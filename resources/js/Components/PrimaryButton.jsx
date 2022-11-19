import React from "react";

export default function PrimaryButton({
	type = "submit",
	className = "",
	processing,
	children,
}) {
	return (
		<button
			type={type}
			className={`admin__button--send` + className}
			disabled={processing}
		>
			{children}
		</button>
	);
}
