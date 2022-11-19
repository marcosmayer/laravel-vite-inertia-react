import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Index({ auth }) {
	const { posts } = usePage().props;

	return (
		<AuthenticatedLayout auth={auth}>
			<Head title="Admin" />

			<div className="admin">
				<div className="admin__area">
					<div className="admin__titulo">Lista de posts</div>
					<div className="admin__nav">
						{posts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
