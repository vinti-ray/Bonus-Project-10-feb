const express=require("express")
const app=express()
const cron = require("node-cron");


const events = [
    {  text: 'first text', dateTime: '*/5 * * * *' },
    { text: 'second text', dateTime: '*/6 * * * *' },
    {  text: 'third text', dateTime: '*/7 * * * *' },
    {  text: 'fourth text', dateTime: '*/8 * * * *' },
    {  text: 'fifth text', dateTime: '*/9 * * * *' },
    {  text: 'sixth text', dateTime: '*/10 * * * *' },
    { text: 'seventh text', dateTime: '*/11 * * * *' },
    {  text: 'eighth text', dateTime: '*/12 * * * *' },
    {  text: 'ninth text', dateTime: '*/13 * * * *' },
    {  text: 'tenth text', dateTime: '*/14 * * * *' }
  ];


//   function scheduleEvent(text) {
//     console.log(`Scheduling event: ${text.text}`);
//     cron.schedule(text.dateTime, () => {
//       console.log(`Running event: ${text.text}`);
//       return res.send({message:text.text})
//     });
//   }
  

app.use("/cronAssignment",(req,res)=>{
    // for (const text of events) {
    //     scheduleEvent(text);
    //   }
    for(let event of events){
        cron.schedule(event.dateTime, function() {
            console.log(`printing the  ${event.text}`);
            return res.send({message:event.text})
        });

        
    }

})




app.listen(3009,()=>{
    console.log("server started");
})

