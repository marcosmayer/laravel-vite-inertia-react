import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function MainNav() {
	const { url, component } = usePage();

	return (
		<div>
			<nav className="header__nav">
				<ul className="header__menu">
					<li
						className={
							url === "/blog/artigos"
								? "header__link active"
								: "header__link"
						}
					>
						<Link className="header__ilink" href="/blog/artigos">
							Artigos
						</Link>
						{/* <Link href={route("create")}></Link> */}
					</li>
					<li
						className={
							url === "/blog/entrevistas"
								? "header__link active"
								: "header__link"
						}
					>
						<Link
							className="header__ilink"
							href="/blog/entrevistas"
						>
							Entrevistas
						</Link>
					</li>
					<li
						className={
							url === "/blog/opiniao"
								? "header__link active"
								: "header__link"
						}
					>
						<Link className="header__ilink" href="/blog/opiniao">
							Opinião
						</Link>
					</li>
					<li
						className={
							url === "/blog/vida-de-bot"
								? "header__link active"
								: "header__link"
						}
					>
						<Link
							className="header__ilink"
							href="/blog/vida-de-bot"
						>
							Vida de Bot
						</Link>
					</li>
					<li
						className={
							url === "/blog/100-palavras"
								? "header__link active"
								: "header__link"
						}
					>
						<Link
							className="header__ilink"
							href="/blog/100-palavras"
						>
							100 palavras
						</Link>
					</li>
					<li
						className={
							url === "/blog/a-voz-do-consumidor"
								? "header__link active"
								: "header__link"
						}
					>
						<Link
							className="header__ilink"
							href="/blog/a-voz-do-consumidor"
						>
							A Voz do Consumidor
						</Link>
					</li>
					<li
						className={
							url === "/blog/incitacoes"
								? "header__link active"
								: "header__link"
						}
					>
						<Link className="header__ilink" href="/blog/incitacoes">
							InCitações
						</Link>
					</li>
					<li
						className={
							url === "/blog/cxpedia"
								? "header__link active"
								: "header__link"
						}
					>
						<Link className="header__ilink" href="/blog/cxpedia">
							CXpedia
						</Link>
					</li>
					<li
						className={
							url === "/blog/insights"
								? "header__link active"
								: "header__link"
						}
					>
						<Link className="header__ilink" href="/blog/insights">
							Insights
						</Link>
					</li>
					<li
						className={
							url === "/blog/cx-no-cinema"
								? "header__link active"
								: "header__link"
						}
					>
						<Link
							className="header__ilink"
							href="/blog/cx-no-cinema"
						>
							CX no Cinema
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
