var express = require('express');
var bodyParser = require('body-parser');
var Joi = require('joi');
var TodoController = require('./controller/todoController.js');

var app = express();
var router = express.Router();
var todoController = new TodoController();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var todo = [];

/* ROUTES */
var todosRoute = router.route('/todo');
var todoRoute = router.route('/todo/:date');

/* END-POINT */
todosRoute.post(function(request, response) {
  var todoValidation = Joi.object().keys({
        'date': Joi.date().min('now').required(),
        'todo': Joi.string().required()
    });

    Joi.validate(request.body, todoValidation, function(err, value) {
        if (err === null) {
            response.json(todoController.create(request.body));
        } else {
            response.status(400).send('errors on request: ' + err);
        }
    });
});

todoRoute.get(function(request, response) {
   response.json(todoController.getByDate(request.params.date));
});

app.use('/', router);

module.exports = app;
