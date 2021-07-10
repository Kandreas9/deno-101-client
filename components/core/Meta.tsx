import React from "react";

interface IProps {
	title: string;
	keywords: string;
	description: string;
}

export default function Meta({ title, keywords, description }: IProps) {
	return (
		<head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta charSet="utf-8" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<title>{title}</title>
		</head>
	);
}
