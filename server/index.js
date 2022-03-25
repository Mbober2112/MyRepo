const express = require('express');
const cors = require('cors');

const users = {
    '1': {
        totalUsers: [
            { id: 1, name: "Bob", followed: true, club: 'Спартак Москва', postsCounter: 0, raiting: 0, pass: '111',
            status: 'first', 
            posts: [
                {title: 'Title-1', text: 'text', likes: 12, dislikes: 3 }, 
                {title: 'Title-2', text: 'text', likes: 14, dislikes: 5 }, 
                {title: 'Title-3', text: 'text', likes: 3, dislikes: 1 }, 
                {title: 'Title-4', text: 'text', likes: 11, dislikes: 3 },
            ],
            friends: [
                {id: 3},
                {id: 5},
                {id: 7},
                {id: 12},
            ], token: 'n', },
            { id: 2, name: "Oleg", followed: false, club: 'ЦСКА Москва', postsCounter: 0, raiting: 0, pass: '222',
            status: 'second',
            friends: [], token: 'n', },
            { id: 3, name: "Olga", followed: true, club: 'Локомотив Москва', postsCounter: 0, raiting: 0, pass: '333',
            status: 'third', token: 'n', },
            { id: 4, name: "Ilya", followed: false, club: 'Динамо Москва', postsCounter: 0, raiting: 0, pass: '444',
            status: '4', token: 'n', },
            { id: 5, name: "Igor", followed: true, club: 'Зенит', postsCounter: 0, raiting: 0, pass: '555',
            status: '5', token: 'n', },
            { id: 6, name: "Petr", followed: false, club: 'Краснодар', postsCounter: 0, raiting: 0, pass: '666',
            status: '6', token: 'n', },
            { id: 7, name: "Valera", followed: true, club: 'Ростов', postsCounter: 0, raiting: 0, pass: '777',
            status: '7', token: 'n', },
            { id: 8, name: "Alexandr", followed: false, club: 'Нижний Новгород', postsCounter: 0, raiting: 0, pass: '888',
            status: '8', token: 'n', },
            { id: 9, name: "Ramzan", followed: true, club: 'Ахмат', postsCounter: 0, raiting: 0, pass: '999',
            status: '9', token: 'n', },
            { id: 10, name: "Victor", followed: false, club: 'Крылья Советов', postsCounter: 0, raiting: 0, pass: '10',
            status: '10', token: 'n', },
            { id: 11, name: "Ravshan", followed: true, club: 'Сочи', postsCounter: 0, raiting: 0, pass: '11',
            status: '11', token: 'n', },
            { id: 12, name: "Sergey", followed: false, club: 'Химки', postsCounter: 0, raiting: 0, pass: '12',
            status: '12', token: 'n', },
        ],
        totalCount: 12,
    }
};

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/favicon.ico', (req, res, next) => {
    res.sendStatus(204);
});

app.get('/data', (req, res, next) => {
    res.send({
        result: 'ok',
    });
});

app.get('/user', (req, res, next) => {
    const user = users[req.query.id].totalUsers;
    const totalCount = users[req.query.id].totalCount;
    const count = Number(req.query.count);
    const page = Number(req.query.page);
    let token = req.headers.token;
    
    const response = {
        usersSend: [],
        totalCount,
        currentUser: {},
    };

    for (let i = 0; i<users[1].totalUsers.length; i++) {
        if (token === users[1].totalUsers[i].token) {
            response.currentUser = users[1].totalUsers[i];
        }
    }

    const pageCounter = count*(page-1);
    const length = pageCounter + count;

    for (let i=(0+pageCounter); i<length; i++){ 
        if (!user[i]) {
            res.send(response);
        } else {
        response.usersSend.push(user[i]);
        }
    }
    res.send(response);   
});

app.get(`/user/userpage`, (req, res, next) => {
    let userId;
    let user;
    let token = req.headers.token;
    if (req.query.id === 'none') {
        for (let i = 0; i<users[1].totalUsers.length; i++) {
            if (token === users[1].totalUsers[i].token) {
                user = users[1].totalUsers[i];
            }
        }
    } else {
            userId = Number(req.query.id);
            user = users[1].totalUsers[(userId-1)];
        }
    res.send(user);
    
});

app.get(`/auth`, (req, res, next) => {
    // let userId = Number(req.query.id);
    // let user = users[1].totalUsers[(userId-1)];
    let login = req.headers.login;
    let pass = req.headers.password;
    let r = Math.random().toString(36).substring(7);
    let message = '';
    let user = {};

    for (let i=0; i<users[1].totalUsers.length; i++) {
        if ((users[1].totalUsers[i].name === login) && (users[1].totalUsers[i].pass === pass) ) {
            users[1].totalUsers[i].token = r;
            user = users[1].totalUsers[i];
        } else {
            message = 'неверный логин или пароль';
        }
    }

    res.send(user);
    
});

app.post('/user', (req, res, next) => {
    const {id, user} = req.body;
    if (!user || !id) {
        res.sendStatus(400);
        return;
    }
    users[id] = user;
    res.sendStatus(200);
});

app.post ('/follow', (req, res, next) => {
    let friend = req.body;
    let user;
    let token = req.headers.token;
        for (let i = 0; i<users[1].totalUsers.length; i++) {
            if (token === users[1].totalUsers[i].token) {
                user = users[1].totalUsers[i];
            }
        }
    user.friends.push(friend);        
    res.send({result: 'ok'});
});

app.post ('/addpost', (req, res, next) => {
    let newPost = req.body;
    let user;
    let token = req.headers.token;
        for (let i = 0; i<users[1].totalUsers.length; i++) {
            if (token === users[1].totalUsers[i].token) {
                user = users[1].totalUsers[i];
            }
        }
    user.posts.unshift(newPost);        
    res.send({result: 'ok'});
});

app.delete ('/follow', (req, res, next) => {
    let friend = Number(req.headers.id);
    let user;
    let token = req.headers.token;
        for (let i = 0; i<users[1].totalUsers.length; i++) {
            if (token === users[1].totalUsers[i].token) {
                user = users[1].totalUsers[i];
            }
        }
    for (let i =0; i<user.friends.length; i++){
        if (user.friends[i].id === friend) {
            user.friends.splice(i,1);
        }
    }    
    // user.friends.push(friend);        
    res.send({result: 'ok'});
});

app.put ('/status', (req, res, next) => {
    let status = req.body.status;
    let user;
    let token = req.headers.token;
        for (let i = 0; i<users[1].totalUsers.length; i++) {
            if (token === users[1].totalUsers[i].token) {
                user = users[1].totalUsers[i];
            }
        }
    user.status = status;        
    res.send('lol');
});

app.listen(8080, () => {console.log('started')} );
