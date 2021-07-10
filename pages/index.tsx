import React from "react";
import "../style/home/home.css";

export default function Home() {
	return (
		<section className="hero">
			<section className="hero-content">
				<div className="hero-logo">
					<img src="/deno.svg" alt="deno logo" />
				</div>

				<h1>Deno 101</h1>
				<p>Last Updated:</p>
				<p>10/7/2021</p>
			</section>
		</section>
	);
}
