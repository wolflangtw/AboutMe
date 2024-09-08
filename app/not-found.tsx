"use client";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex justify-center items-center flex-col min-h-dvh bg-[#4c4c4c] font-black gap-4">
			<h1 className="text-8xl mt-10">404</h1>
			<h2 className="text-xl">找不到此頁面</h2>
			<Link
				href="/"
				className="px-4 py-2 bg-[#444444] hover:bg-[#464646] rounded-lg">
				回到主頁
			</Link>
		</div>
	);
}
