<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-50">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Morrowind Character Generator">
    <meta name="author" content="John Phillip Betley">

    <title>Morrowind Tools</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600" rel="stylesheet" />

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-full font-sans text-gray-900 antialiased">
    <div class="min-h-full">
        <nav class="bg-gray-900">
            <div class="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <a href="/" class="text-base font-semibold text-white">Morrowind Tools</a>
            </div>
        </nav>

        <header class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Character Planner</h1>
            <p class="mt-2 text-sm text-gray-600">
                Pick a race, birthsign, specialization and skills to see your starting character.
            </p>
        </header>

        <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div id="app"></div>
        </main>

        <footer class="mx-auto max-w-3xl space-y-2 px-4 pb-12 text-center text-xs/5 text-gray-500">
            <p>This work is licensed under an <a class="underline hover:text-gray-700" href="https://raw.githubusercontent.com/JPBetley/morrowind/master/LICENSE">MIT License</a>.</p>
            <p>All data, taken from the game, belongs to Bethesda Softworks, that has nothing to do with this site.</p>
            <p>ZeniMax, Bethesda Softworks, The Elder Scrolls, Morrowind, Tribunal, Bloodmoon and their respective logos
                are registered trademarks of ZeniMax Media Inc. Copyright © 1993-2015. All Rights Reserved.</p>
            <p>Created by <a class="underline hover:text-gray-700" href="https://jpbetley.com">JPBetley</a></p>
        </footer>
    </div>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PGEMRVZXC4"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PGEMRVZXC4');
    </script>
</body>
</html>
