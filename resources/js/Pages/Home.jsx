import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainNav from "@/Components/Home/MainNav";
import HomeGrid from "@/Components/Home/HomeGrid";
import Editorial from "@/Components/Home/Editorial";
import Sobre from "@/Components/Home/Sobre";
import Footer from "@/Components/Footer";
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
			<HomeGrid />
			<Editorial />
			<Sobre />
			<Footer />
		</AuthenticatedLayout>
	);
}
