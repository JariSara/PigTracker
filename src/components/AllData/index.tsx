import React from "react";
import { useForm } from "react-hook-form";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";
import Navbar from "../Navbar";


function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Login() {
  var CurrentTime: any;
  var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes();
  CurrentTime = {
    currentTime: time
  }
  const [data, setData] = React.useState([  {name: CurrentTime.currentTime.toString(), value: (randomIntFromInterval(0,5)/10)}]);
  const [co2, setCo2] = React.useState([{ name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(100, 3000) }]);
  const [nh3, setNh3] = React.useState([{ name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(0, 20) }]);
  const [h2s, setH2s] = React.useState([{ name: CurrentTime.currentTime.toString(), value: (randomIntFromInterval(0, 5)/10) }]);
  const test: boolean=true;
  React.useEffect(() => {
    const timer = setInterval(() => {
      var CurrentTime: any;
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes();
      CurrentTime = {
        currentTime: time
      }
      setCo2((data) => [...data, { name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(100, 3000) }])
      setNh3((data) => [...data, { name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(0, 20) }])
      setH2s((data) => [...data, { name: CurrentTime.currentTime.toString(), value: (randomIntFromInterval(0, 5)/10) }])
      setData((data) => [...data, {name: CurrentTime.currentTime.toString(), value: (randomIntFromInterval(0, 5)/10)}])
      //if(co2.length < 10){
        //setCo2(co2.slice());
      //}
      //setCo2((data) => [...data, {name: data.name}]);
      //setCo2(co2.slice(1));
      //console.log(co2[0]);a
      //data.push({name:CurrentTime.currentTime.toString(), value:99});
      //console.log(data);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Pass in empty array to run effect only once!

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (datas: any) => console.log(datas);
  //const t = Object.keys(data);
  //console.log(Object(data[0]));
  return (
<body>
      <Navbar />
      <h1>All data</h1>

      <div className="App">
      <h2>CO2 Measurements:</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={co2}
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
            <Line connectNulls type="monotone" dataKey="value" stroke="#4523d8" fill="#8884d8" isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
      <h2>NH3 measurements:</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={nh3}
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
            <Line connectNulls type="monotone" dataKey="value" stroke="#4523d8" fill="#8884d8" isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
          <div className="App">
      <h2>H2S measurements:</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={h2s}
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
            <Line connectNulls type="monotone" dataKey="value" stroke="#4523d8" fill="#8884d8" isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
        <h2>Airflow measurements</h2>  
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
      <h2>Temperature measurement</h2>
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
    </body>
  );
}

export default Login;
