# react-native-level-fs

[fs](http://nodejs.org/api/fs.html) in react-native using [level-filesystem](https://github.com/mafintosh/level-filesystem) and [asyncstorage-down](https://github.com/tradle/asyncstorage-down)

	npm install react-native-level-fs

## Usage

To use simply require it and use it as you would fs

(package.json)

```json
{
    ...
    "browser": {
       "fs": "react-native-level-fs" 
    }
    ...
}
```

``` js
var fs = require('fs');

fs.mkdir('/home', function() {
	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
		fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
});
```

## License

MIT
