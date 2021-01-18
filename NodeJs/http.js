const http = require('http')
const fs = require('fs').promises

// const server = http.createServer((req, res) => {
//   if (req.url == '/api' && req.method == 'GET') {
//     fs.readFile(__dirname + '/index.html')
//       .then((content) => {
//         res.writeHead(200, {
//           'Content-Type': 'text/html',
//         })
//         res.end(content)
//       })
//       .catch((err) => {
//         res.writeHead(500)
//         res.end(err)
//         return
//       })
//   }
// })

// server.listen(5000, () => {
//   console.log('listening on port 5000')
// })


// http.get('http://jsonplaceholder.typicode.com/posts',(res) => {
//     console.log(res)
//     //res stream
//     res.on('data',(chunk) => {
//         console.log(chunk.toString())
//     })
// })



