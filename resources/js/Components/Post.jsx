import React from "react";

export default function Post({ post }) {
	return (
		<div>
			<div>
				<span className="text-gray-800">{post.titulo}</span>
				<small className="ml-2 text-sm text-gray-600">
					{new Date(post.created_at).toLocaleString()}
				</small>
			</div>
			<p className="mt-4 text-lg text-gray-900">{post.autor}</p>
			<p className="mt-4 text-lg text-gray-900">{post.titulo}</p>
		</div>
	);
}
