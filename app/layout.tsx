import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ErrorPage from "@/components/ErrorPage";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

export const metadata = {
	title: "關於我 | Wolflangtw",
	description: "About me | Wolflangtw",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh-TW">
			<body className={`${inter.className} antialiased`}>
				<ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>
			</body>
		</html>
	);
}
