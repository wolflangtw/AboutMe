"use client";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const myBirthday = () => {
	const dob: Date = new Date("2008-12-24");
	const today: Date = new Date();
	return Math.floor(
		(today.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
	);
};

const scrollTo = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

export default function Main() {
	return (
		<section id="main">
			<div className="flex justify-center items-center flex-col bg-[#4c4c4c] min-h-dvh gap-6">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}>
					<Image
						src="/avatar.webp"
						width={100}
						height={100}
						alt="avatar"
						className="mt-20"
					/>
				</motion.div>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}>
					<h1 className="text-4xl font-black">狼狼</h1>
				</motion.div>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
						delay: 0.6,
					}}>
					<h2 className="text-lg font-black">
						{myBirthday()}歲 / 學生 / 喜歡創作、研發各種東西
					</h2>
				</motion.div>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
						delay: 1,
					}}>
					<CircleChevronDown
						size={40}
						className="mt-20 mb-10 cursor-pointer"
						onClick={() => scrollTo("skills")}
					/>
				</motion.div>
			</div>
		</section>
	);
}
