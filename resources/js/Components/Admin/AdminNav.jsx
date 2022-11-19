import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function AdminNav() {
	return (
		<div className="admin">
			<div className="admin__area">
				<div className="admin__titulo">
					Área de Administração do Blog
				</div>
				<div className="admin__nav">
					<Link href={route("create")}>
						<button className="admin__button">
							Criar novo post
						</button>
					</Link>

					<Link href={route("create")}>
						<button className="admin__button">
							Criar novo post
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
