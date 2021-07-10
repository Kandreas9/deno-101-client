import React from "react";

import Meta from "./Meta.tsx";

interface IProps {
	children: any;
}

const metaData = {
	title: "Deno 101",
	keywords: "deno, 101, learning",
	description: "Learn deno from scratch",
};

export default function Layout({ children }: IProps) {
	return (
		<main>
			<Meta
				title={metaData.title}
				keywords={metaData.keywords}
				description={metaData.description}
			/>
			{children}
		</main>
	);
}
