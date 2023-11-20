// pages/create-post.js
import React, { useState } from 'react';
import styles from '../styles/CreatePost.module.css'; // Import the CSS module
import sharedStyles from '../styles/SharedStyles.module.css';
import Link from "next/link";


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
        <div className={sharedStyles.page}>
            {/* Back Button */}
            <Link href="/" className={sharedStyles.backButton} aria-label="Back to Home">&lt;</Link>

            <h1 className={sharedStyles.title}>Create a Post</h1>

            <form onSubmit={handleSubmit} className={sharedStyles.form}>
        <textarea className={sharedStyles.textarea}
            name="text"
            value={postData.text}
            onChange={handleChange}
            placeholder="What's on your mind?"
        />
                <button type="submit" className={sharedStyles.button}>Create Post</button>
            </form>
        </div>
    );
}
