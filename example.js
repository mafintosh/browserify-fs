
// to write require('fs'), add "browser" mapping in package.json
var fs = require('react-native-level-fs');

fs.mkdir('/home', function() {
	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
		fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
});
