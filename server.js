const express=require('express')
const app=express()
const port=4000

app.set('view engine', 'ejs');


app.use((req, res, next) => {
   let date = new Date();
   let Day = date.getDay() + 1;
   let Hour = date.getHours();
   if (Day > 0 && Day < 6 && Hour >= 9 && Hour <= 17) next();
   else {
     res.send(
       '<h3 style="font-size:xx-large; text-align: center;">This website is not available on Saturday and Sunday</h3>'
     );
     res.end();
   }
 });
app.get('/',(req,res)=>{
   res.render('index');
})

app.get('/contact',(req,res)=>{
   res.render('contact');
 })

 app.get('/services',(req,res)=>{
   res.render('services');
})

app.listen(port,(err)=>{
   if (err) {
       return err
   } 
   else {
       console.log('server is running...')
   }
   })