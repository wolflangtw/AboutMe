import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";

const roboto = Roboto({ weight: ["900"], subsets: ["latin"] });

const Header = dynamic(() => import("./(components)/Header/page"));
const Footer = dynamic(() => import("./(components)/Footer/page"));

import "@/styles/globals.scss";

export const metadata = {
	title: "關於我 | wolflangtw",
	description: "About Me | wolflangtw",
};

export default function RootLayout({ children }) {
	return (
		<html lang="zh_TW">
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7360048637415092"
					crossorigin="anonymous"
				/>
			</Head>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
