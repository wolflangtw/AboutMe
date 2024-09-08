"use client";
import { useState } from "react";
import { ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const scrollTo = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

const NavBtn = ({
	title,
	id,
	children,
}: {
	title: string;
	id: string;
	children?: ReactNode;
}) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}>
			<a
				className="px-4 py-1 hidden xs:block text-center rounded-md hover:bg-[#242424] cursor-pointer"
				onClick={() => scrollTo(id)}>
				{children || title}
			</a>
		</motion.div>
	);
};

const function_use = (section: string) => {
	return section == "主頁"
		? "main"
		: section == "我可以做什麼"
		? "skills"
		: section == "聯絡我"
		? "contact"
		: section;
};

export default function Navbar() {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setOpenMenu(false);
	};

	const [OpenMenu, setOpenMenu] = useState(false);
	return (
		<div className="fixed top-0 right-0 left-0 z-50 flex justify-around items-center bg-[#3d3d3d] min-h-16 shadow-md backdrop-blur-md">
			<motion.div
				initial={{ x: -10, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}>
				<a
					onClick={() => {
						scrollTo("main");
					}}>
					<div className="flex flex-row items-center cursor-pointer px-3 py-1 rounded-md hover:bg-[#242424]">
						<Image src="/avatar.webp" height={40} width={40} alt="avatar" />
						<h1 className="text-xl text-white font-black pl-2">Wolflangtw</h1>
					</div>
				</a>
			</motion.div>
			<div className="flex gap-2 text-white font-black">
				{["主頁", "我可以做什麼", "聯絡我"].map((section) => (
					<NavBtn key={section} title={section} id={function_use(section)}>
						{section}
					</NavBtn>
				))}
				{OpenMenu ? (
					<X
						className="block xs:hidden"
						onClick={() => setOpenMenu(!OpenMenu)}
					/>
				) : (
					<Menu
						className="block xs:hidden"
						onClick={() => setOpenMenu(!OpenMenu)}
					/>
				)}
			</div>
			<AnimatePresence>
				{OpenMenu && (
					<motion.div
						initial={{ y: -5, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -5, opacity: 0 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
						className="flex justify-center items-center absolute top-16 w-full min-h-20 bg-[#3d3d3d] text-white py-5 xs:hidden text-center">
						<div className="flex flex-col gap-2 w-full">
							{["主頁", "我可以做什麼", "聯絡我"].map((section) => {
								return (
									<>
										<a
											key={section}
											className="hover:bg-[#4c4c4c]"
											onClick={() => scrollTo(function_use(section))}>
											{section}
										</a>
									</>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
