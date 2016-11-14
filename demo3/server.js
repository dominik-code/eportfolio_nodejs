// include package http
const http = require('http')  
// set listen port to 3000
const port = 3000

// if request was sent this will be executed
const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello World from Node.js http Package')
}
// create server
const server = http.createServer(requestHandler)

// start listening to port 3000 if no error occurs
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
 
  console.log(`server is listening on ${port}`)
})
