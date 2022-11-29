import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainNav from "@/Components/MainNav";
import { Head } from "@inertiajs/inertia-react";

export default function Home(props) {
	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={<h2>Dashboard</h2>}
		>
			<Head>
				<title>Blog MM!</title>
				<meta
					head-key="description"
					name="description"
					content="Página inicial do blog que já é uma experiência!"
				/>
			</Head>
			<MainNav />
			<h1>Página inicial!</h1>
		</AuthenticatedLayout>
	);
}
