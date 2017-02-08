var fs = require('fs');
var path = require('path');

var dir = path.resolve(__dirname, '../src/styles/base');

var source = path.resolve(dir, 'variable.less');
var target = path.resolve(dir, 'variable.md');

var content = fs.readFileSync(source, 'utf8');
var result = [];
content.split('\n').forEach(line => {
     if (/^\/\//.test(line)) {
         result.push(line.replace(/^\/\//, '##'));
         result.push('| Name | Description | Default |');
         result.push('| ----- | ----- | ----- |');
     } else if(/^@/.test(line)) {
         var parts = line.split(/:\s*|;\s*\/\/\s*/);
         if ( /^#/.test(parts[1]) ) parts[1] = '\\' + parts[1];
         result.push('| ' + parts[0] + ' | ' + parts[2] + ' | ' + parts[1] + ' |')
     } else {
         result.push(line);
     }
});

result = result.join('\n');

fs.writeFileSync(target, result);