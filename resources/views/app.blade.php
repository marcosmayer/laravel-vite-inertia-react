<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

	<!-- Scripts -->
	@routes
	@viteReactRefresh
	@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
	@inertiaHead
	<script src="https://cdn.tiny.cloud/1/nrms2yne5q1nccauaz54wz1q5yyoipm1skz62mnhweyyqk88/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

</head>

<body class="font-sans antialiased">
	@inertia
	<div id="modal-root"></div>
</body>

</html>