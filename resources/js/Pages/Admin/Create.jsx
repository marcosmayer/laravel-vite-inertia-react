import React, { useState, useRef, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Create(props, { initialValue }) {
	const [value, setValue] = useState(initialValue ?? "");
	useEffect(() => setValue(initialValue ?? ""), [initialValue]);
	const editorRef = useRef(null);

	const { data, setData, post, processing, reset, errors } = useForm({
		titulo: "",
		slug: "",
		data: "",
		autor: "",
		conteudo: "",
	});

	const submit = (e) => {
		e.preventDefault();
		post(route("posts.store"), { onSuccess: () => reset() });
	};

	function handleUpdate(value, editor) {
		editor.getContent();
		setValue(value);
		data.conteudo = editorRef.current.getContent();
	}

	const onHandleChange = (event) => {
		setData(
			event.target.name,
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value
		);
	};

	return (
		<AuthenticatedLayout auth={props.auth} errors={props.errors}>
			<Head title="Criar novo post" />

			<div className="admin">
				<div className="admin__area">
					<div className="admin__titulo">Criar um novo post</div>
					<div className="admin__nav">
						<form onSubmit={submit}>
							<div>
								<TextInput
									type="text"
									name="titulo"
									value={data.titulo}
									placeholder="Título"
									className=""
									autoComplete="titulo"
									isFocused={true}
									handleChange={onHandleChange}
									required
								/>
								<InputError
									titulo={errors.titulo}
									className=""
								/>
							</div>
							<div>
								<TextInput
									type="text"
									name="slug"
									value={data.slug}
									placeholder="Slug"
									className=""
									autoComplete="slug"
									isFocused={true}
									handleChange={onHandleChange}
									required
								/>
								<InputError slug={errors.slug} className="" />
							</div>
							<div>
								<TextInput
									type="text"
									name="data"
									value={data.data}
									placeholder="Data de publicação"
									className=""
									autoComplete="data"
									isFocused={true}
									handleChange={onHandleChange}
									required
								/>
								<InputError data={errors.data} className="" />
							</div>
							<div>
								<TextInput
									type="text"
									name="autor"
									value={data.autor}
									placeholder="Autor"
									className=""
									autoComplete="autor"
									isFocused={true}
									handleChange={onHandleChange}
									required
								/>
								<InputError autor={errors.autor} className="" />
							</div>
							<div>
								<Editor
									apiKey="nrms2yne5q1nccauaz54wz1q5yyoipm1skz62mnhweyyqk88"
									onInit={(evt, editor) =>
										(editorRef.current = editor)
									}
									initialValue={initialValue}
									value={value}
									onEditorChange={handleUpdate}
									init={{
										selector: "textarea.tinymce",
										height: 500,
										menubar: true,
										plugins: [
											"advlist",
											"autolink",
											"lists",
											"link",
											"image",
											"charmap",
											"preview",
											"anchor",
											"searchreplace",
											"visualblocks",
											"code",
											"fullscreen",
											"insertdatetime",
											"media",
											"table",
											"code",
											"help",
											"wordcount",
										],
										toolbar:
											"undo redo | blocks | " +
											"bold italic forecolor | alignleft aligncenter " +
											"alignright alignjustify | bullist numlist outdent indent | " +
											"removeformat | help",
									}}
								>
									<textarea
										name="conteudo"
										className="tinymce"
									></textarea>
								</Editor>
								<InputError conteudo={errors.conteudo} />
								<PrimaryButton processing={processing}>
									ENVIAR
								</PrimaryButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
