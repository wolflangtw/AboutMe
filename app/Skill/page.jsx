import Image from "next/image";
import styles from "@/styles/Skill.module.scss";
import AdBanner from "../components/AdBanner";

const SkillBox = ({ img, what, content }) => {
	return (
		<div className={styles.skillBox}>
			<div className={styles.picture}>
				<Image src={`/${img}`} alt={what} width={100} height={100} />
			</div>
			<div className={styles.skillBox_content}>
				<h3>{what}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default function Page() {
	return (
		<div className={styles.main}>
			<h1>我可以做什麼?</h1>
			<SkillBox
				img="Minecraft.webp"
				what="Minecraft"
				content="我已經玩 Minecraft 很久了，算是老玩家了，喜歡在這裡創造一些有趣的事物，例如建築、紅石和地圖製作等。我經常與朋友一起製作遊戲，雖然有時候會把地圖搞壞或者做出一些奇怪的迴圈，但我一直努力學習如何更好地使用這些指令。"
			/>
			<AdBanner
				dataAdFormat="auto"
				dataFullWidthResponsive={true}
				dataAdSlot="4835848807"
			/>
			<SkillBox
				img="coding.webp"
				what="程式設計"
				content="我喜歡使用程式語言來開發一些有趣的專案。我曾經開發過一些小型的專案，例如 Discord 機器人、網站開發、Minecraft 地圖 等等。"
			/>
			<AdBanner
				dataAdFormat="auto"
				dataFullWidthResponsive={true}
				dataAdSlot="4835848807"
			/>
			<SkillBox
				img="linux.webp"
				what="管理"
				content="我對 Minecraft 伺服器管理 及 Linux (Ubuntu / Debian) 系統管理，以及對 防火牆、網路(攻擊防禦) 有些微的知識。我曾經管理過一些社群，例如 Discord、Minecraft 伺服器 等等，我喜歡這類工作，也會努力的去學習如何更好的管理一個社群。"
			/>
			<AdBanner
				dataAdFormat="auto"
				dataFullWidthResponsive={true}
				dataAdSlot="4835848807"
			/>
			<SkillBox
				img="internet.webp"
				what="網路"
				content="我從小就對資訊網路有著濃厚的興趣，且有些微的知識，例如網路安全、網路架構 等等。"
			/>
			<AdBanner
				dataAdFormat="auto"
				dataFullWidthResponsive={true}
				dataAdSlot="4835848807"
			/>
		</div>
	);
}
