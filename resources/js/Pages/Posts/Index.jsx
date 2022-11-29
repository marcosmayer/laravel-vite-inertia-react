import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import MainNav from "@/Components/Home/MainNav";
import Footer from "@/Components/Footer";

export default function Index({ auth }) {
	const { posts } = usePage().props;
	return (
		<AuthenticatedLayout auth={auth}>
			<Head>
				<title>Lista de posts</title>
				<meta
					head-key="description"
					name="description"
					content="Esta é a lista de posts"
				/>
			</Head>
			<MainNav />

			<div className="conteudo">
				<div className="conteudo__container">
					<div className="conteudo__conteudo">
						<div className="lista">
							<div className="lista__secao">Artigos</div>
							<div className="lista__linha"></div>
							<div className="lista__area">
								{posts.map((post, id) => (
									<div key={id} className="lista__item">
										{post.titulo}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>{/* <ul>{listPosts}</ul> */}</div>
			<Footer />
		</AuthenticatedLayout>
	);
}
