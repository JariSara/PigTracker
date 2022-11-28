import React from "react";
import Navbar from "../Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useForm } from "react-hook-form";

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Gas() {
  var CurrentTime: any;
  var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  CurrentTime = {
    currentTime: time
  }
  const [data, setData] = React.useState([{ name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(20, 25) }]);
  const test: boolean=true;
  React.useEffect(() => {
    const timer = setInterval(() => {
      var CurrentTime: any;
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      CurrentTime = {
        currentTime: time
      }
      setData((data) => [...data, { name: CurrentTime.currentTime.toString(), value: randomIntFromInterval(20, 25) }])
      //data.push({name:CurrentTime.currentTime.toString(), value:99});
      console.log(data);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Pass in empty array to run effect only once!

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (datas: any) => console.log(datas);
  const t = Object.keys(data);
  console.log(Object(data[0]));
  return (
    <body>
      <Navbar />
      <h1>Gas measurements</h1>
      <h2>Gas stuff</h2>
      <div>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your inpt into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
        return(
    <body>
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
            <Line connectNulls type="monotone" dataKey="value" stroke="#4523d8" fill="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </body>
  )
  );
        </div>
    </body>

  )
}

export default Gas;
