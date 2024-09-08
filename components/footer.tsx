export default function Footer() {
	return (
		<div className="flex justify-center items-center bg-[#3d3d3d] min-h-16">
			<h1 className="text-white font-black">
				&copy; {new Date().getFullYear()} 狼狼 Wolflangtw
			</h1>
		</div>
	);
}
