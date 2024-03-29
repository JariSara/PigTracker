import React from "react";
import Navbar from "../Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Temperature() {
  var CurrentTime:any;
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes();

   

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
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Pass in empty array to run effect only once!

  return (
    <body>
      <Navbar />
      <h1>Temperature measurements</h1>
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
            <Line connectNulls type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </body>
  );
}

export default Temperature;
