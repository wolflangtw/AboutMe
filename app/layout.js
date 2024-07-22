import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const roboto = Roboto({ weight: ["900"], subsets: ["latin"] });

const Header = dynamic(() => import("./(components)/Header/page"));
const Footer = dynamic(() => import("./(components)/Footer/page"));

import AdSense from "./components/AdSense";

import "@/styles/globals.scss";

export const metadata = {
	title: "關於我 | wolflangtw",
	description: "About Me | wolflangtw",
};

export default function RootLayout({ children }) {
	return (
		<html lang="zh_TW">
			<head>
				<AdSense pId="pub-7360048637415092" />
			</head>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
