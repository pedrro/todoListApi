function TodoController() {
  return this;
}

var todo = [];

TodoController.prototype.create = function (body) {
  todo.push(body);
  return body;
};

TodoController.prototype.getByDate = function (date) {
  return todo.filter(function(obj) {
    return obj.date === date;
  });
};

TodoController.prototype.getSize = function() {
  return todo.length;
};

module.exports = TodoController;
