import React from 'react';
import datas from './data.json'
import './Charts.css'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    return (
        <div className="charts-container">
            <div className="chart">
                <h3>MONTH WISE SELL</h3>
                <div>
                    <LineChart width={400} height={300} data={datas}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </div>
            </div>
            <div className="chart">  
                <h3>Investment VS Revenue</h3>
                <div>
                    <AreaChart  
                    width={400}
                    height={300}
                    data={datas}
                    >
                         <CartesianGrid strokeDasharray="3 3" />
               
                         <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>
            </div>
            
        </div>
    );
};

export default Charts;