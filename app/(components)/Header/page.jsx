import styles from "@/styles/components/Header.module.scss";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<div className={styles.banner}>
			<Link href="/">
				<Image src="/avatar.webp" width={100} height={100} alt="avatar" />
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
