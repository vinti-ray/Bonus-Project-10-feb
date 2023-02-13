const express=require("express")
const app=express()
const cron = require("node-cron");
const path=require("path")


const events = [
    {      text: "textOne", dateTime: "34 16 08 13 02 *"},  //specifies that the job will run at 8:16:34 AM on the 13th day of the 2nd month.
    {     text: "textTwo", dateTime: "34 17 08 13 02 *" },
    {     text: "textThree", dateTime: "34 18 08 13 02 *" },
    {      text: "textFour", dateTime: "34 34 11 12 02  *"},
    {      text: "textFive",dateTime: "34 34 11 12 02 *"},
    {  text: 'textSix', dateTime: "34 34 11 12 02  *" },
    { text: 'textSeven', dateTime: "34 34 11 12 02  *" },
    {  text: 'textEight', dateTime: "34 34 11 12 02 *"},
    {  text: 'textNine', dateTime: "34 34 11 12 02 *" }, 
    {  text: 'textTen', dateTime: "34 34 11 12 02 *" } 
  ];
 


  //1st aproach

  app.use("/cronAssignment/",(req,res)=>{
  events.forEach((event) => {
  function scheduleEvent(text) {
    console.log(`Scheduling event: ${text}`);
    cron.schedule(event.dateTime, () => {
      console.log(`Running event: ${text}`);
      return res.send({message:text})
    });
  }
  let text=event.text
  scheduleEvent(text)
});
});


//2nd approach
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

