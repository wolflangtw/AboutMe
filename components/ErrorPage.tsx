"use client";

export default function ErrorPage() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-bold">發生錯誤</h1>
				<p className="mt-2">很抱歉，頁面載入時發生錯誤</p>
				<button
					onClick={() => window.location.reload()}
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					重新載入
				</button>
			</div>
		</div>
	);
}
