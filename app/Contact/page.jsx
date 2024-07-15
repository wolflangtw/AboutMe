import styles from "@/styles/contact.module.scss";

const Box = ({ title, desc }) => {
	return (
		<div className={styles.box}>
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	);
};

export default function Page() {
	return (
		<div className={styles.main}>
			<h1>聯絡我 / Contact</h1>
			<Box title="Discord" desc="wolflangtw" />
		</div>
	);
}
