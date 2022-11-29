import "./bootstrap";

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

/* const appName =
	window.document.getElementsByTagName("title")[0]?.innerText ||
	"Fora da Caixa"; */

createInertiaApp({
	title: (title) => `${title} - Fora da Caixa`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.jsx`,
			import.meta.glob("./Pages/**/*.jsx")
		),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
});

InertiaProgress.init({ color: "#4B5563" });
