import express, { Express, Request, Response } from 'express'

/**
 * Consulte o seguinte link para aprender sobre Typescript https://blog.logrocket.com/how-to-set-up-node-typescript-express/
 */

const app : Express = express()

app.listen(3000, ()=>console.log('Your app with ts is woking fine. Go ahead.'))

app.get('/', (req : Request, res : Response)=>{

    req.accepts()

    res.send('Your app with ts is woking fine. Go ahead.')
})