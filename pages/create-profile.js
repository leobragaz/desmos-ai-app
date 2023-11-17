import React, { useState } from 'react';
import styles from '../styles/CreateProfile.module.css'; // or CreatePost.module.css


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
        <div className={styles.page}>
            <h1>Create Desmos Profile</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="dtag" className={styles.label}>DTag</label>
                <input
                    name="dtag"
                    value={profileData.dtag}
                    onChange={handleChange}
                    placeholder="DTag"
                />
                <label htmlFor="nickname" className={styles.label}>Nickname</label>
                <input
                    name="nickname"
                    value={profileData.nickname}
                    onChange={handleChange}
                    placeholder="Nickname"
                />
                <label htmlFor="bio" className={styles.label}>Bio</label>
                <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                />
                <label htmlFor="profilePicture" className={styles.label}>Profile Picture URL</label>
                <input
                    name="profilePicture"
                    value={profileData.profilePicture}
                    onChange={handleChange}
                    placeholder="Profile Picture URL"
                />
                <label htmlFor="coverPicture" className={styles.label}>Cover Picture URL</label>
                <input
                    name="coverPicture"
                    value={profileData.coverPicture}
                    onChange={handleChange}
                    placeholder="Cover Picture URL"
                />
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
}
