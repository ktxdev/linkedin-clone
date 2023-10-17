package com.ktxdev.linkedinclone.storage;

import com.ktxdev.linkedinclone.exceptions.FileNotFoundException;
import com.ktxdev.linkedinclone.exceptions.FileStorageException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import static java.util.Objects.nonNull;

@Slf4j
@Service
public class FileSystemStorageService implements StorageService {
    @Value("${app.upload-dir}")
    private String uploadDir = "uploads";
    private final Path fileUploadLocation;

    public FileSystemStorageService() {
        log.info("Upload Dir: {}", uploadDir);
        this.fileUploadLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        this.createDirectoriesIfNotExists(this.fileUploadLocation);
    }


    @Transactional
    @Override
    public String uploadFile(String dir, MultipartFile file) {
        Path uploadLocation = this.fileUploadLocation;

        if (nonNull(dir)) {
            uploadLocation = uploadLocation.resolve(dir).toAbsolutePath().normalize();
            this.createDirectoriesIfNotExists(uploadLocation);
        }

        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (originalFileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + originalFileName);
            }

            String fileName = "%s%s".formatted(UUID.randomUUID().toString(), originalFileName.substring(originalFileName.lastIndexOf(".")));

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = uploadLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;

        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + originalFileName + ". Please try again!", ex);
        }
    }

    @Override
    public Resource downloadFile(String dir, String fileName) {
        try {
            Path filePath = this.fileUploadLocation.resolve(fileName).normalize();
            if (nonNull(dir)) {
                filePath = this.fileUploadLocation.resolve(dir).resolve(fileName).normalize();
            }
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new FileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new FileNotFoundException("File not found " + fileName, ex);
        }
    }

    private void createDirectoriesIfNotExists(Path path) {
        try {
            if (!Files.exists(path)) {
                Files.createDirectories(path);
            }
        } catch (IOException e) {
            throw new FileStorageException("Could not create required directories");
        }
    }
}
