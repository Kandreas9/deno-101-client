import React, { ComponentType } from "react";
import "./style/index.css";

import Layout from "./components/core/Layout.tsx";

export default function App({
	Page,
	pageProps,
}: {
	Page: ComponentType<any>;
	pageProps: any;
}) {
	return (
		<Layout>
			<Page {...pageProps} />
		</Layout>
	);
}
