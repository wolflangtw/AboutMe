"use client"
import styles from "@/styles/components/Header.module.scss";

import { motion } from 'framer-motion'

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<Link href="/">
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
				>
					<Image src="/avatar.webp" width={100} height={100} alt="avatar" />
				</motion.div>
				<h1>Wolflangtw</h1>
			</Link>
		</div>
	);
};

const Nav = () => {
	return (
		<div className={styles.Nav}>
			<Link href="/">主頁</Link>
			<Link href="/Contact">聯絡我</Link>
		</div>
	);
};

export default function Page() {
	return (
		<div className={styles.main}>
			<Banner />
			<Nav />
		</div>
	);
}
