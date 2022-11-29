<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- <title inertia>{{ config('app.name', 'Título') }}</title> -->

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Arapey&family=BenchNine&family=Ubuntu:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&family=Unica+One&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- <link rel="stylesheet" href="{{ asset('build/assets/app.6280e941.css') }}"> -->

	<!-- Scripts -->
	@routes
	@viteReactRefresh
	@vite(['resources/css/app.css', 'resources/js/app.jsx'])
	@inertiaHead
	<script src="https://cdn.tiny.cloud/1/nrms2yne5q1nccauaz54wz1q5yyoipm1skz62mnhweyyqk88/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

</head>

<body>
	@inertia
	<div id="modal-root"></div>
</body>

</html>