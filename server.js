import express from "express";

const app = express();
const PORT = 3000;

app.use (express.urlencoded ({ extended: true }));

app.get ('/', (req, res) => {
    res.send(`
        <a href="/about">О портале</a>
        <a href="/contact">Контакты</a>
        <a href="/help">Помощь</a>
        <a href="/rooms">Список помещений</a>
        <a href="/register">Регистрация</a>
        `);
});

app.get('/register', (req, res) => {
    res.send(`
        <form method="POST" action="/register">
            <input name="login" placeholder="Логин">
            <input name="password" type="password" placeholder="Пароль">
            <input name="city" placeholder="Город">
            <button>Создать пользователя</button>
            <button type="reset">Очистить форму</button>
        </form>
        `);
});

app.post('/register', (req, res) => {
    res.send(`Пользователь ${req.body.login} зарегистрирован в городе ${req.body.city}`);
});

app.get ('/about', (req, res) => {
    res.send(`<h1>О портале</h1>`);
});

app.get ('/contact', (req, res) => {
    res.send(`<h1>Контакты</h1>`);
});

app.get ('/help', (req, res) => {
    res.send(`<h1>Помощь</h1>`);
});

app.get ('/rooms', (req, res) => {
    res.send(`<h1>Список помещений</h1>`);
});

app.listen(PORT, () => {
    console.log(`Сервер: http://localhost:${PORT}`);
});