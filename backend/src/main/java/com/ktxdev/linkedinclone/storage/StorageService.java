package com.ktxdev.linkedinclone.storage;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    String uploadFile(String dir, MultipartFile file);
    Resource downloadFile(String dir,String fileName);
}
