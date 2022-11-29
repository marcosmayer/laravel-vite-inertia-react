import React from "react";

export default function Footer() {
	return (
		<div>
			<div className="footer">
				<span className="footer__ano">
					&copy; {new Date().getFullYear()} Connvert
				</span>
				<span className="footer__space">&nbsp;-&nbsp;</span>
				<span className="footer__direitos">
					Todos os direitos reservados
				</span>
			</div>
			<script
				type="text/javascript"
				src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-632dfadc87ad4f71"
			></script>
		</div>
	);
}
