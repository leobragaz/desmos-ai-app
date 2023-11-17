// pages/create-post.js
import React, { useState } from 'react';
import styles from '../styles/CreatePost.module.css'; // Import the CSS module

export default function CreatePost() {
    const [postData, setPostData] = useState({ text: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (response.ok) {
            alert('Post created successfully');
        } else {
            alert('Error creating post');
        }
    };

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.page}>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
        <textarea
            name="text"
            value={postData.text}
            onChange={handleChange}
            placeholder="What's on your mind?"
        />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}
