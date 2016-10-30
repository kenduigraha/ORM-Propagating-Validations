# Web-API-Authentication-and-Authorization

## Introduction
Implement authentication and authorization web API using node.js and express framework

## How To Run Apps
> npm install

> npm start

> open localhost:3000 in browser

## Dependencies
1. node.js
2. express framework
3. nodemon
4. mongodb
5. mongoose
6. mongoose-validator

## How To Install Dependencies
1. express generator : ```express .```
2. nodemon : ```npm install --save-dev nodemon```
3. mongodb : ``` npm install --save mongodb```
4. mongoose : ``` npm install --save mongoose```
5. mongoose-validator : ```npm install --save mongoose-validator```

## Database's Structure

1. Database's name : db_EO
2. Collection's name : EOs
3. Fields : event_name, event_title, event_email, date_create

## HTTP Routes

| Routes | HTTP | Action |
|--------|------|--------|
| localhost:3000/ | GET | show form new data |
| localhost:3000/ | POST | process form new data |
| localhost:3000/list | GET | show table all data |

## package.json

```
{
    "name": "ORM_propagating_validations",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "start": "nodemon ./bin/www"
    },
    "dependencies": {
        "body-parser": "~1.15.1",
        "cookie-parser": "~1.4.3",
        "debug": "~2.2.0",
        "express": "~4.13.4",
        "jade": "~1.11.0",
        "mongodb": "^2.2.11",
        "mongoose": "^4.6.5",
        "mongoose-validator": "^1.2.5",
        "morgan": "~1.7.0",
        "serve-favicon": "~2.3.0"
    },
    "devDependencies": {
        "nodemon": "^1.11.0"
    }
}

```

## App's Structure

```
.
├── app.js
├── bin
│   └── www
├── controllers
│   └── index.js
├── helpers
│   └── middleware.js
├── models
│   └── EO.js
├── package.json
├── public
│   └── stylesheets
├── README.md
├── routes
│   ├── index.js
│   └── list.js
└── views
    ├── error.jade
    ├── footer.jade
    ├── index.jade
    ├── layout.jade
    ├── list.jade
    └── navbar.jade

8 directories, 15 files

```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
