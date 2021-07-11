import React from "react";
import "../style/home/home.css";

import Canvas from "../components/home/Canvas.tsx";

export default function Home() {
	return (
		<section className="hero">
			<Canvas />
			<section className="hero-content">
				<div className="hero-logo">
					<img height={200} src="/deno.svg" alt="deno logo" />
				</div>

				<h1>Deno 101</h1>
				<p>Last Updated:</p>
				<p>10/7/2021</p>
			</section>
		</section>
	);
}
