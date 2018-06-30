const fs = require('..');
const assert = require("assert");

describe("main", () => {
  it("example", done => {
    fs.mkdir('/home', function() {
      fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
        fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
          if (err) {
            done(err);
            return;
          }
          assert.equal(data, 'Hello world!\n');
          done();
        });
      });
    });
  });
});
