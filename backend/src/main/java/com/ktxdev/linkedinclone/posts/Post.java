package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.users.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue
    private UUID id;
    @Lob
    private String text;
    private String imageUrl;
    private LocalDateTime postedAt;
    @ManyToOne
    @JoinTable(
            name = "user_posts",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "posted_by_id")
    )
    private User postedBy;
}
