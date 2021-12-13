const express = require('express');
const cors = require('cors');

const users = {
    '1': {
        totalUsers: [
            { id: 1, name: "Bob", followed: true, club: 'Спартак Москва', postsCounter: 0, raiting: 0, },
            { id: 2, name: "Oleg", followed: false, club: 'ЦСКА Москва', postsCounter: 0, raiting: 0, },
            { id: 3, name: "Olga", followed: true, club: 'Локомотив Москва', postsCounter: 0, raiting: 0, },
            { id: 4, name: "Ilya", followed: false, club: 'Динамо Москва', postsCounter: 0, raiting: 0, },
            { id: 5, name: "Igor", followed: true, club: 'Зенит', postsCounter: 0, raiting: 0, },
            { id: 6, name: "Petr", followed: false, club: 'Краснодар', postsCounter: 0, raiting: 0, },
            { id: 7, name: "Valera", followed: true, club: 'Ростов', postsCounter: 0, raiting: 0, },
            { id: 8, name: "Alexandr", followed: false, club: 'Нижний Новгород', postsCounter: 0, raiting: 0, },
            { id: 9, name: "Ramzan", followed: true, club: 'Ахмат', postsCounter: 0, raiting: 0, },
            { id: 10, name: "Victor", followed: false, club: 'Крылья Советов', postsCounter: 0, raiting: 0, },
            { id: 11, name: "Ravshan", followed: true, club: 'Сочи', postsCounter: 0, raiting: 0, },
            { id: 12, name: "Sergey", followed: false, club: 'Химки', postsCounter: 0, raiting: 0, },
        ],
        totalCount: 12,
    }
        
        
    // '2': {count: 5}, 
    // '3': {page: 1},
    // '4': {totalCount: 12}, 
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
    // const totalCount = req.query.totalCount;
    // const totalCount = users[req.query.totalCount];
    // const obj = [user, count, page, totalCount];
        
    // if (!user) {
    //     res.sendStatus(404);
    //     return;
    // }
    const response = {
        usersSend: [],
        totalCount,
    };
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

app.post('/user', (req, res, next) => {
    const {id, user} = req.body;
    if (!user || !id) {
        res.sendStatus(400);
        return;
    }
    users[id] = user;
    res.sendStatus(200);
});


app.listen(8080, () => {console.log('started')} );
