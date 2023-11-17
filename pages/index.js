import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Welcome to Desmos Social App</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/create-profile">Create Profile</Link>
                    </li>
                    <li>
                        <Link href="/create-post">Create Post</Link>
                    </li>
                </ul>
            </nav>
            {/* Post feed will be implemented here */}
        </div>
    );
}
