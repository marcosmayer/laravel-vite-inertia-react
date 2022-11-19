<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return Inertia::render('Posts/Index', [
			'posts' => Post::all(),
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validated = $request->validate([
			'titulo' => 'required',
			'slug' => 'required',
			'data' => 'required',
			'autor' => 'required',
			'conteudo' => 'required',
		]);

		$request->user()->posts()->create($validated);

		return redirect(route('admin'));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Models\Post  $post
	 * @return \Illuminate\Http\Response
	 */
	public function show(Post $post)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Models\Post  $post
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Post $post)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Models\Post  $post
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Post $post)
	{
		$this->authorize('update', $post);

		$validated = $request->validate([
			//
		]);

		$post->update($validated);

		return redirect(route('admin.index'));
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\Post  $post
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Post $post)
	{
		$this->authorize('delete', $post);

		$post->delete();

		return redirect(route('admin.index'));
	}
}
