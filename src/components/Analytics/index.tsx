import React from "react";
import Navbar from "../Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Analytics() {
  var CurrentTime:any;
  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

 

  CurrentTime = {

    currentTime: time

  }
console.log(CurrentTime.currentTime);
const [data, setData] = React.useState([  {name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(20,25)}]);
React.useEffect(() => {
  const timer = setInterval(() => {
    setData((data) => [...data, {name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(20, 25)}])
    //data.push({name:CurrentTime.currentTime.toString(), value:99});
    console.log(data);
  }, 10000);
  return () => {
    clearInterval(timer);
  };
}, []); // Pass in empty array to run effect only once!

return (
  <body>
    <Navbar />
    <h1>Analytics</h1>
    <h2>Analytics stuff</h2>
    <div>
    </div>
  </body>
);
}

export default Analytics;
