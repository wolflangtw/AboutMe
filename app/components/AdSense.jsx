import Script from "next/script";
import React from "react";

export default function AdSense({ pId }) {
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
			crossOrigin="anonymous"
			strategy="afterInteractive"
		/>
	);
}
