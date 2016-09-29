var TodoController = require('../../src/controller/todoController.js');
var todoController = new TodoController();

describe('TodoController', function() {
  var todoTest = {date:'10-10-2016', todo:'qa'};
  
  it('should add a new todo', function() {
    expect(todoController.create(todoTest)).to.be.eql(todoTest);
  });

  it('should return a specific todo', function() {
    expect(todoController.getByDate('10-10-2016')).to.be.eql([todoTest]);
  });

  it('should get size of todos', function() {
    expect(todoController.getSize()).to.be.eql(1);
  });
});
