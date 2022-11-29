import React from "react";
import top from "/public/img/editorial-top.jpg";
import bottom from "/public/img/editorial-bottom.jpg";

export default function Editorial() {
	return (
		<div>
			<div className="editorial">
				<div className="editorial__image editorial__image--top">
					<img src={top} alt="Editorial" />
				</div>
				<div className="editorial__text">
					<h2>Editorial</h2>
					<p>Chegamos!</p>
					<p>
						A gente tem tanta novidade para contar que é até difícil
						escolher a primeira. 😮 Mas como já dizia o produtor
						cinematográfico, Walt Disney, “Para começar, pare de
						falar e comece a fazer”, então vamos acabar logo com
						esse lero-lero e mostrar o que temos feito pra você.
					</p>
					<p>
						Se você leu o nosso Quem Somos, já sabe que o Fora da
						Caixa traz uma proposta beeem diferente de conteúdo. A
						nossa intenção é compartilhar informação de qualidade,
						em formato multimídia, sempre olhando além do óbvio.
					</p>
					<p>
						Descubra um pouco mais sobre cada das seções do nosso
						site e, para conferir na prática o resultado desse
						trabalho, basta clicar em cada uma delas. Boa leitura!
					</p>
					<h3>Destaque</h3>
					<p>
						Impossível ignorar as notícias divulgadas todos os dias
						no nosso mercado. Por isso vamos reunir algumas das
						principais informações para você ficar sempre
						bem-informado.
					</p>
					<h3>Entre Vistas</h3>
					<p>
						O bate-papo será com nomes importantes do nosso mercado
						para falar sobre diferentes temas. Com certeza, é
						imperdível!
					</p>
					<h3>Artigo</h3>
					<p>
						Essa é para quem gosta de ler mesmo. Aqui o conteúdo é
						mais denso, com reflexão, depoimento, infográfico,
						pesquisa, análise e tudo mais que temos direito.
					</p>
					<h3>Incitações</h3>
					<p>
						Nada melhor do que ler uma frase inspiradora e que nos
						incita a ação. Aqui você encontrará frases de
						especialistas, autores famosos e, por que não,
						desconhecidos, para instigar ainda mais a sua rotina.
					</p>
					<h3>100 Palavras</h3>
					<p>
						De temas simples a complexos, não importa. Nossa
						proposta é explicar tudo em 100 palavras.
					</p>
					<h3>Insights</h3>
					<p>
						O que é isso? Eu com isso? Qual o impacto disso? As
						respostas para cada uma dessas perguntas, sobre algum
						tema relevante do mercado, é o que te entregaremos nessa
						seção.
					</p>
					<h3>CXpedia</h3>
					<p>
						Imagine um dicionário vivo? Assim é o CXpedia, com
						conceitos e definições de termos que usamos no mercado,
						de um jeito simples e objetivo.
					</p>
					<h3>Voz do consumidor</h3>
					<p>
						Como seria se o segmento (e/ou o consumidor) que você
						mira pudesse te mandar um WhatsApp ou um e-mail? Pois é!
						E essa resposta, que também é baseada em pesquisa, você
						confere na seção.
					</p>
					<h3>Opinião</h3>
					<p>
						Nesta seção não faltarão especialistas do mercado com
						insights valiosos sobre tendências e muitos temas
						importantes, para provocar ideias e pensamentos fora da
						caixa.
					</p>
					<h3>CX no Cinema</h3>
					<p>
						Campeão ou não de bilheteria, não importa. É o olhar,
						sem Déjà Vu, de como poderíamos aplicar o CX no nosso
						contexto, sempre tendo como pano de fundo algum filme.
					</p>
					<h3>Vida de Bot</h3>
					<p>
						Prepara o fone para ouvir, de um ponto de vista bem
						robotizado, as aspirações e comentários feitos por um
						robô que adora falar sobre a rotina e as invencionices
						do homem moderno. Tudo isso de um jeito bem racional e
						lógico.
					</p>
					<p>
						Explore, compartilhe, sinta-se provocado, divirta-se...
						pense Fora da Caixa!
					</p>
				</div>
				<div className="editorial__image editorial__image--bottom">
					<img src={bottom} alt="Editorial" />
				</div>
			</div>
		</div>
	);
}
