import {expect} from 'chai'; //Assertion for Mocha
import jsdom from 'jsdom';
import fs from 'fs'; //Node file system

describe('First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//Testing jsdom
describe('index.html', () => {
  it('should say h1 content', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
     const h1 = window.document.getElementsByTagName('h1')[0];
     expect(h1.innerHTML).to.equal("JavaScript Starter Pack");
     done();
     window.close();
    }); // jsdom.env(index, ) can provide array of JavasScript into JSDOm as second parameter
  });
});
