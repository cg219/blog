export const title = 'imkreative';

export default ({ title, content }) => `
<!doctype html>
<html lang='en'>
<head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0' />
    <title>${title}</title>
    <base href='/' />
    <link rel='stylesheet' type='text/css' href="css/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo:wght@800&family=Mukta&display=swap" rel="stylesheet">
    <link rel='stylesheet' type='text/css' href="css/index.css" />
    <link rel='stylesheet' type='text/css' href="css/components.css" />
</head>

<body>
    <main class='imkreative'>
        ${content}
    </main>
</body>
</html>
`
