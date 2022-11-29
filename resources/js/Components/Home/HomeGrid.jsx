import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function HomeGrid() {
	return (
		<div>
			<div className="grid">
				<div className="grid__modulo grid__modulo--voz">
					<div className="grid__tag">A voz do consumidor</div>
					<Link
						className="grid__link"
						href="/blog/a-voz-do-consumidor/o-consumidor-mudou"
					>
						<div className="grid__text grid__text--voz grid__text--laranja">
							<p>
								Oi! Aqui é o consumidor. Notou algo diferente em
								mim?
							</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--entrevista">
					<div className="grid__tag">Entrevista</div>
					<Link
						className="grid__link"
						href="/blog/entrevista/digital-first-o-mindset-do-consumidor"
					>
						<div className="grid__text grid__text--entrevista grid__text--cinza">
							<p>Digital-first: o mindset do consumidor</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--bot">
					<div className="grid__tag">Vida de Bot</div>
					<Link
						className="grid__link"
						href="/blog/vida-de-bot/e-dura-essa-vida-de-bot"
					>
						<div className="grid__text grid__text--bot grid__text--laranja">
							<p>É dura essa vida de bot...</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--palavras">
					<div className="grid__tag">100 Palavras</div>
					<Link
						className="grid__link"
						href="/blog/100-palavras/do-ponto-call-ao-ponto-com"
					>
						<div className="grid__text grid__text--palavras grid__text--laranja">
							<p>Do ponto call ao ponto com</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--citacoes">
					<div className="grid__tag">inCitações</div>
					<Link
						className="grid__link"
						href="/blog/incitacoes/o-consumidor-grita-so-nao-ouve-quem-nao-quer"
					>
						<div className="grid__text grid__text--citacoes grid__text--cinza">
							<p>
								“Hoje em dia, o consumidor grita. Só não ouve
								quem não quer.”
							</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--opiniao">
					<div className="grid__tag">Opinião</div>
					<Link
						className="grid__link"
						href="/blog/opiniao/se-a-pandemia-acelerou-o-0303-ligou-o-turbo"
					>
						<div className="grid__text grid__text--cxpedia grid__text--laranja">
							<p>Se a pandemia acelerou, o 0303 ligou o turbo</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--cxpedia">
					<div className="grid__tag">CXpedia</div>
					<Link
						className="grid__link"
						href="/blog/cxpedia/o-que-e-contact-center"
					>
						<div className="grid__text grid__text--cxpedia grid__text--laranja">
							<p>O que é contact center?</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--insights">
					<div className="grid__tag">Insights</div>
					<Link
						className="grid__link"
						href="/blog/insights/a-hiperpersonalizacao-e-voce"
					>
						<div className="grid__text grid__text--insights grid__text--cinza">
							<p>A hiperpersonalização e você</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--artigo">
					<div className="grid__tag">Artigo</div>
					<Link
						className="grid__link"
						href="/blog/artigo/o-que-e-digital-first"
					>
						<div className="grid__text grid__text--artigo grid__text--laranja">
							<p>Afinal, o que é digital-first?</p>
						</div>
					</Link>
				</div>
				<div className="grid__modulo grid__modulo--cinema">
					<div className="grid__tag">CX no Cinema</div>
					<Link
						className="grid__link"
						href="/blog/cx-no-cinema/de-volta-para-o-futuro-digital-first"
					>
						<div className="grid__text grid__text--cinema grid__text--cinza">
							<p>De volta para o futuro e a CX</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
