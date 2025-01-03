"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillBox = ({
	img,
	what,
	content,
}: {
	img: string;
	what: string;
	content: string;
}) => {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: "easeInOut",
			}}
			className="text-center bg-[#696969] mb-40 w-4/5 px-30 py-36">
			<div>
				<Image
					src={`/${img}`}
					alt={what}
					width={100}
					height={100}
					className="mx-auto"
				/>
			</div>
			<div className="font-black">
				<h1 className="text-4xl my-6">{what}</h1>
				<h2 className="mx-10 text-base md:mx-24 md:text-xl">{content}</h2>
			</div>
		</motion.div>
	);
};

export default function Skills() {
	return (
		<section id="skills">
			<div className="min-h-dvh bg-[#444444] pt-10">
				<motion.h1
					initial={{ y: 10, opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="flex justify-center text-4xl font-black py-10"
					transition={{
						duration: 0.5,
						delay: 0.5,
					}}>
					我可以做什麼?
				</motion.h1>
				<div className="flex justify-center items-center flex-col mt-30 min-h-dvh gap-30">
					<SkillBox
						img="Minecraft.webp"
						what="Minecraft"
						content="我已經玩 Minecraft 很久了，算是老玩家了，喜歡在這裡創造一些有趣的事物，例如建築、紅石和地圖創作等。我很常與朋友一起創作地圖，也有開過數次伺服器。"
					/>
					<SkillBox
						img="coding.webp"
						what="程式設計"
						content="我喜歡使用程式語言來開發一些有趣的專案。我曾經開發過一些小型的專案，例如 Discord 機器人、網站開發、Minecraft 地圖 等等。"
					/>
					<SkillBox
						img="linux.webp"
						what="管理"
						content="我對 Minecraft 伺服器管理 及 Linux (Ubuntu / Debian) 系統管理，以及對 路由器、防火牆、網路(攻擊防禦) 等網路設備有一定的知識，曾經管理過一些社群，例如 Discord、Minecraft 伺服器 等等...。曾經是 DWMS-TK、STSP-Studio 擁有者 及 葡萄休憩島 代理群主，我喜歡這類工作，也會努力的去學習如何更好的管理一個社群。"
					/>
					<SkillBox
						img="internet.webp"
						what="網路"
						content="我從小就對資訊網路有著濃厚的興趣，且有些微的知識，例如 網路安全、網路架構、BGP、CDN 等等，我還把路由器刷成了自由度更高的 OpenWrt 軟路由系統，並且學習了許多網路知識"
					/>
				</div>
			</div>
		</section>
	);
}
