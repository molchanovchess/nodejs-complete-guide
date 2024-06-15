const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head>
                <title>Practice</title>
            </head>
            <body>
                <h1>Practice part</h1>
                <form action="/create-user" method="POST">
                <label>Input User</label>
                    <input type="text" name="username">
                    <div>
                        <button type="submit">
                            Submit!
                        </button>
                    </div>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head>
                <title>User Page</title>
            </head>
            <body>
                <h1>Users</h1>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                </ul>
            </body>
        </html>
        `)
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk: ', chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody:',parsedBody)
            const user = parsedBody.split('=')[1];
            console.log(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })

    }
};

module.exports = {
    handler: requestHandler
}