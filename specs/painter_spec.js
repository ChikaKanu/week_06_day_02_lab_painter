const assert = require('assert');
const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')

describe('Paint', function (){
  let paint;
  beforeEach(function (){
  });
  it('should have a paint', function () {
    paint = new Paint(2);
    assert.strictEqual(paint.litres, 2);
  });
  it('should be empty', function () {
    paint = new Paint(0);
    assert.strictEqual(paint.litres, 0);
  });
  it('should empty itself', function () {
    paint = new Paint(2);
    assert.strictEqual(paint.emptying(1), 1);
  });
});

describe('Decorator', function (){
  let decorator;
  beforeEach(function () {
    decorator = new Decorator(0)
  });

  it('should have an empty stock', function (){
    assert.strictEqual(decorator.paintStock, 0);
  });
});

describe('Room', function (){
  let room;
  beforeEach(function (){

  });

  it('should have an area', function () {
    room = new Room(2)
    assert.strictEqual(room.area, 2);
  });
});
