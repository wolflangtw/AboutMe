import styles from "@/styles/Home.module.scss";
import Image from "next/image";

const myBirthday = () => {
	const dob = new Date("2008-12-24");
	const today = new Date();
	return Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
};

export default function Page() {
	return (
		<div className={styles.main}>
			<Image src="/avatar.webp" width={100} height={100} alt="avatar" />
			<h1>狼狼</h1>
			<h2>{myBirthday()} 歲 / 學生 / 喜歡創作、研發各種東西</h2>
			<p>往下滑查看更多</p>
		</div>
	);
}
