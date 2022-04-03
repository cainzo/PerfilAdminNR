import "./charts.scss";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
    {name: "Enero", Total: 1100},
    {name: "Febrero", Total: 1300},
    {name: "Marzo", Total: 2200},
    {name: "Abril", Total: 3200},
    {name: "Mayo", Total: 4200},
    {name: "Junio", Total: 200},
    {name: "Julio", Total: 1300},
    {name: "Agosto", Total: 1500},
    {name: "Septiembre", Total: 700},
    {name: "Octubre", Total: 600},
    {name: "Noviembre", Total: 900},
    {name: "Diciembre", Total: 1000}
];
const Charts = ({aspect, title}) => {
  return (
    <div className="chart">
        <div className="titulo">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
