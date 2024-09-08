import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "關於我 | Wolflangtw",
	description: "About Me | Wolflangtw",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-tw">
			<body>{children}</body>
		</html>
	);
}
