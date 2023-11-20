import React, { useState } from 'react';
import styles from '../styles/CreateProfile.module.css';
import Link from "next/link"; // or CreatePost.module.css
import sharedStyles from '../styles/SharedStyles.module.css';



export default function CreateProfile() {
    const [profileData, setProfileData] = useState({
        dtag: '',
        nickname: '',
        bio: '',
        profilePicture: '',
        coverPicture: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/createProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        });

        if (response.ok) {
            alert('Profile created successfully');
        } else {
            alert('Error creating profile');
        }
    };

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    return (
        <div className={sharedStyles.page}>

            {/* Back Button */}
            <Link href="/" className={sharedStyles.backButton} aria-label="Back to Home">&lt;</Link>

            <h1>Create Desmos Profile</h1>

            <form onSubmit={handleSubmit} className={sharedStyles.form}>

                <label htmlFor="dtag" className={styles.label}>DTag</label>
                <input className={sharedStyles.input}
                    name="dtag"
                    value={profileData.dtag}
                    onChange={handleChange}
                    placeholder="DTag"
                />

                <label htmlFor="nickname" className={styles.label}>Nickname</label>
                <input className={sharedStyles.input}
                    name="nickname"
                    value={profileData.nickname}
                    onChange={handleChange}
                    placeholder="Nickname"
                />

                <label htmlFor="bio" className={styles.label}>Bio</label>
                <textarea className={sharedStyles.input}
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                />

                <label htmlFor="profilePicture" className={styles.label}>Profile Picture URL</label>
                <input className={sharedStyles.input}
                    name="profilePicture"
                    value={profileData.profilePicture}
                    onChange={handleChange}
                    placeholder="Profile Picture URL"
                />

                <label htmlFor="coverPicture" className={styles.label}>Cover Picture URL</label>
                <input className={sharedStyles.input}
                    name="coverPicture"
                    value={profileData.coverPicture}
                    onChange={handleChange}
                    placeholder="Cover Picture URL"
                />

                <button type="submit" className={sharedStyles.button}>Create Profile</button>
            </form>
        </div>
    );
}
