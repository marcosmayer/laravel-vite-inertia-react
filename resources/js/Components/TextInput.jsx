import React, { useEffect, useRef } from "react";

export default function TextInput({
	type = "text",
	name,
	value,
	className,
	autoComplete,
	required,
	placeholder,
	isFocused,
	handleChange,
}) {
	const input = useRef();

	useEffect(() => {
		if (isFocused) {
			input.current.focus();
		}
	}, []);

	return (
		<div className="admin__field">
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				className={`admin__input ` + className}
				ref={input}
				autoComplete={autoComplete}
				required={required}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
}
