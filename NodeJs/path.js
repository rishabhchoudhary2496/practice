const path = require('path');
console.log(path.basename('D://nodePractice/index.html'))
console.log(path.dirname('D://nodePractice/index.html'))
console.log(path.extname('D://nodePractice/index.html'))
console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt',
}))
console.log(path.isAbsolute('D://nodePractice/index.html'))
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))