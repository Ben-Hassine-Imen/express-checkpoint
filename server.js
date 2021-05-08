const express=require('express')
const app=express()
const port=4000

app.set('view engine', 'ejs');

const logtime=(req,res,next)=>{
   const datetime= new Date()
    if((datetime.getDay()>6))
   {
      res.send('<h1>the website not available</h1>')
      console.log("the website not available")
   }
   else if (datetime.getHours()<09 || datetime.getHours()>=17){
       res.send('<h1>the website not available</h1>') 
      console.log("the website not available") 
   }
   else{ 
      console.log('available')
   }
     
   next()
}
app.use(logtime)
app.get('/',(req,res)=>{
   res.render('index');
})

app.get('/contact',(req,res)=>{
   res.render('contact');
 })

 app.get('/services',(req,res)=>{
   res.render('services');
})

app.listen(port,()=>{console.log('server is running')})