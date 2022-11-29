import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Navbar from "../Navbar";

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Home() {
  var CurrentTime: any;
  var today = new Date(),
    time = (today.getHours()) + ':' + today.getMinutes() + ':' + today.getSeconds();
  CurrentTime = {
    currentTime: time 
  }
  //console.log(today.getMinutes());
  //today.setMinutes(today.getMinutes()+30)
  //console.log(today.getMinutes());
  today.setHours(today.getHours() -1)
  var data = [
    {name: (today.getHours()) + ':' + (today.getMinutes()), value: randomIntFromInterval(20, 25)}
  ]
  for(let i = 1; i < 7; i++){
    //console.log(10*i);
    today.setMinutes(today.getMinutes() + 10)
    //console.log(today.getHours())
    //console.log(today.getMinutes())
    data.push({name: (today.getHours()) + ':' + (today.getMinutes()), value: randomIntFromInterval(20, 25)})
  }
  return (
    <body>
      <Navbar />
      <h1>Home</h1>
      <h2>Temperature the last hour: </h2>
      <div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="value" stroke="#4523d8" fill="red" isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </body>
  );
}

export default Home;
