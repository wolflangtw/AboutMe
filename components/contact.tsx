"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

export default function Contact() {
	const [discord, setDiscord] = useState(false);
	return (
		<section id="contact">
			<div className="flex justify-center items-center flex-col min-h-dvh bg-[#4c4c4c]">
				<motion.h1
					initial={{ y: 10, opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="flex justify-center text-4xl font-black my-10"
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}>
					聯絡我
				</motion.h1>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="flex justify-center items-center flex-col gap-4"
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}>
					<FaDiscord
						className="text-4xl cursor-pointer"
						onClick={() => {
							setDiscord(!discord);
						}}
					/>
					{discord && (
						<motion.div
							initial={{ y: 5, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
							}}>
							<h1 className="mt-4 mb-2 font-black text-2xl bg-[#444444] px-4 py-2 text-center">
								wolflangtw
							</h1>
						</motion.div>
					)}
				</motion.div>
			</div>
		</section>
	);
}
