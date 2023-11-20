import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Welcome to Desmos Social App</h1>
            <div className={styles.nav}>
                <Link href="/create-profile" passHref className={styles.link}>Create Profile</Link>
                <Link href="/create-post" passHref className={styles.link}>Create Post</Link>
            </div>
            {/* Post feed will be implemented here */}
        </div>
    );
}
