"use client";
import { motion } from "framer-motion";

export default function Contact() {
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
					className="font-black text-2xl bg-[#444444] mb-10 px-8 py-4 flex-col text-center"
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}>
					<h1 className="text-2xl border-b-2 border-black">Discord</h1>
					<h2 className="text-base text-gray">wolflangtw</h2>
				</motion.div>
			</div>
		</section>
	);
}
