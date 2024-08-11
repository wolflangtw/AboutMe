"use client";

import { useEffect } from "react";

export default function AdBanner({
	dataAdSlot,
	dataAdFormat,
	dataFullWidthResponsive,
}) {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (error) {
			console.log(error.message);
		}
	}, []);
	return (
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-client="ca-pub-4861038375560073"
			data-ad-slot={dataAdSlot}
			data-ad-format={dataAdFormat}
			data-full-width-responsive={dataFullWidthResponsive.toString()}></ins>
	);
}
