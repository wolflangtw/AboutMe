"use client";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="min-h-dvh">
			<Navbar />
			<Main />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}
