const expect = require("chai").expect;
const request = require("request");
const app = require("../server.js"); // Import the server

describe("Calculator API", function () {
  const baseUrl = "http://localhost:3000";
  let server;

  
  before(function(done) {
    // The app is already created, just start the server
    server = app.listen(3000, function() {
      console.log("Test server running on port 3000");
      done();
    });
  });

  after(function(done) {
    if (server) {
      server.close(function() {
        console.log("Test server closed");
        done();
      });
    } else {
      done();
    }
  });

  it("returns status 200 for root URL", function(done) {
    request(baseUrl, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  describe("Math Operations", function() {
    it("should add two numbers correctly", function(done) {
      request.post({
        url: `${baseUrl}/add`,
        json: true,
        body: { num1: 10, num2: 5 }
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.result).to.equal(15);
        done();
      });
    });

    it("should subtract two numbers correctly", function(done) {
      request.post({
        url: `${baseUrl}/subtract`,
        json: true,
        body: { num1: 10, num2: 5 }
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.result).to.equal(5);
        done();
      });
    });

    it("should multiply two numbers correctly", function(done) {
      request.post({
        url: `${baseUrl}/multiply`,
        json: true,
        body: { num1: 10, num2: 5 }
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.result).to.equal(50);
        done();
      });
    });

    it("should divide two numbers correctly", function(done) {
      request.post({
        url: `${baseUrl}/divide`,
        json: true,
        body: { num1: 10, num2: 5 }
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.result).to.equal(2);
        done();
      });
    });

    it("should return error when dividing by zero", function(done) {
      request.post({
        url: `${baseUrl}/divide`,
        json: true,
        body: { num1: 10, num2: 0 }
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body.error).to.equal("Cannot divide by zero");
        done();
      });
    });
  });

  describe("Quote API", function() {
    it("should return a random quote", function(done) {
      request.get(`${baseUrl}/quote`, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        const data = JSON.parse(body);
        expect(data).to.have.property('quote');
        done();
      });
    });
  });
});