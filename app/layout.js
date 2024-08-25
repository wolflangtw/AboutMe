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
				<AdSense pId="ca-pub-4861038375560073" />
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-CJHNLJ8CMK"></script>
				<script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'G-CJHNLJ8CMK');
				</script>
			</head>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
