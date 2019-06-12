'use strict';

var chai = require('chai'), expect = chai.expect;
chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', function () { //describe two parameters, name and callback function
  it('should return true when number is even', function() { //it function takes in two parameters -> name of test and call back function --> contains actual test
    isEven(4).should.be.true;
  });

  it('should return false when number is odd', function() {
    expect(isEven(5)).to.be.false;
  });
});

function add(num1, num2) {
  return num1+num2;
}

describe('add without step/teardown', function() {
  var num;
  this.beforeEach(function() { //beforeEach --> takes single parameter => call back function executes before each test
     num = 5;
  });

  it('should be ten when adding 5 to 5', function () {
    num = add(num,5);
    num.should.equal(10);
  });

  it('should be twelve when adding 7 to 5', function() {
    add(num, 7).should.equal(12);
  });
});


//afterEach also exists
//it.skip to skip a test or xit
//describe.skip or xdescribe to skip

