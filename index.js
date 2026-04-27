const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Welcome to my API');
});

app.get('/about', (req, res) => {
    res.send('This is the about page')
});
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const userID = req.params.id;
    res.send('User ID: ${userID}');
});

app.get('/search', (req, res) => {
    const query = req.query.keyword
    res.send(`search keyword: ${query}`);
})

//Jason responses
app.get('/api/users', (req, res) => {
    const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'},
    ];
    res.jason(users);
});

const PORT = 3000;

app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
});

