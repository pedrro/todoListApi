var frisby = require('frisby');

frisby.create('should add a todo')
.post('http://localhost:3000/todo',{date: '10-10-2016', todo: 'test'})
.expectStatus(200)
.expectJSON({date: '10-10-2016', todo: 'test'})
.toss();

frisby.create('should not add a todo when request is invalid')
.post('http://localhost:3000/todo',{date:'lala', todo:1})
.expectStatus(400)
.toss();

frisby.create('should get a todo')
.get('http://localhost:3000/todo/10-10-2016')
.expectStatus(200)
.expectJSON([{date: '10-10-2016', todo: 'test'}])
.toss();
