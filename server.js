import express from "express";

const app = express();
const PORT = 3000;

app.use (express.urlencoded ({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

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
    res.render('register', {title: 'Регистрация на портале'});
});

app.get('/login', (req, res) => {
    res.render('login', {title: "Войдите в аккаунт"});
});

app.get('/dashboard', (req, res) => {
    const requests = Request.findByUser(req.session.userId);
    let html = '<h1>Мои заявки</h1>';
    requests.forEach (r => {
        html += `<li>${r.room_name} - ${r.status}</li>`;
    })
    html += '</ul>';
    res.send(html);
});

// app.get('/dashboard', (req, res) => {
//     const requests = Request.findByUser{req.session.userId};
//     res.render('dashboard', ( requests ));
// });

app.post('/register', (req, res) => {
    res.send(`Пользователь ${req.body.login} зарегистрирован в городе ${req.body.city}, с ФИО ${req.body.fio}, с номером ${req.body.phone}, с почтой ${req.body.email}`);
});

app.get ('/about', (req, res) => {
    res.render('about', {title: 'О портале', description: {}});
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