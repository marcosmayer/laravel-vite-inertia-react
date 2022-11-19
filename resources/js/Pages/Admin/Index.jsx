import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

export default function Index({ auth }) {
	const { posts } = usePage().props;

	const listPosts = posts.map((post) => (
		<li key={post.id}>
			{post.id} - {post.titulo}
		</li>
	));
	return (
		<AuthenticatedLayout auth={auth}>
			<Head title="Admin" />

			<div>
				<ul>{listPosts}</ul>
			</div>
		</AuthenticatedLayout>
	);
}
