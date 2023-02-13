const express=require("express")
const app=express()
const cron = require("node-cron");

const events = [
    {      text: "textOne", dateTime: "34 47 12 12 02 *"},  //specifies that the job will run at 2:23:20 PM on the 12th day of the 11th month.
    {     text: "textTwo", dateTime: "34 34 11 12 02 *" },
    {     text: "textThree", dateTime: "34 34 11 12 02 *" },
    {      text: "textFour", dateTime: "34 34 11 12 02  *"},
    {      text: "textFive",dateTime: "34 34 11 12 02 *"},
    {  text: 'textSix', dateTime: "34 34 11 12 02  *" },
    { text: 'textSeven', dateTime: "34 34 11 12 02  *" },
    {  text: 'textEight', dateTime: "34 34 11 12 02 *"},
    {  text: 'textNine', dateTime: "34 34 11 12 02 *" }, 
    {  text: 'textTen', dateTime: "34 34 11 12 02 *" } 
  ];
 


app.use("/cronAssignment/:text",(req,res)=>{
   let text=req.params.text

  events.forEach((event) => {
      if(event.text==text){cron.schedule(event.dateTime, function() {
            console.log(`printing   ${event.text}`);
            return res.send({message:event.text})
        })}
  });

})




app.listen(3009,()=>{
    console.log("server started");
})

