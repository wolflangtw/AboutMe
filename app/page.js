import dynamic from "next/dynamic";

const Main = dynamic(() => import("./Home/page"));
const Skill = dynamic(() => import("./Skill/page"));

export default function Home() {
	return (
		<main>
			<Main />
			<Skill />
		</main>
	);
}
