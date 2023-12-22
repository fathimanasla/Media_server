  //importing json-server dependency/package
  const jsonServer=require('json-server')

  //creat server
  const server=jsonServer.create()

  //creat middleware
  const middleware=jsonServer.defaults()

  //initializing router with resource
  const router=jsonServer.router('db.json')

  //implementing middleware into server
  server.use(middleware)

  //implimenting router to server
  server.use(router)

  //defining PORT number
  const PORT=process.env.PORT || 4000

  //creating server into listening for request
  server.listen(PORT,()=>{
    console.log("Server is running in PORT:",PORT)
  })