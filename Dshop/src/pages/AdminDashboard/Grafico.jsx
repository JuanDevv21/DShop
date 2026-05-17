import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'LUNES', value: 400 },
    { name: 'MARTES', value: 680, active: true }, // Este tendrá el tooltip
    { name: 'MIERCOLES', value: 450 },
    { name: 'JUEVES', value: 850, highlighted: true }, // El más oscuro
    { name: 'VIERNES', value: 300 },
    { name: 'SABADO', value: 550 },
    { name: 'DOMINGO', value: 480 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
    return (
        <div style={{ backgroundColor: '#111', color: '#fff', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>
        {payload[0].value}
        </div>
    );
    }
    return null;
};

const OrderTrendsChart = () => {
    return (
    <div style={{ width: '95%', height: 300, background: '#fff', padding: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 16 }} 
            dy={10}
            />
            <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: 'transparent' }} 
            active={true} 
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
            {data.map((entry, index) => (
                <Cell 
                key={`cell-${index}`} 
                fill={entry.highlighted ? '#0044cc' : entry.active ? '#0066ff' : '#f0f0f0'} 
                />
            ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default OrderTrendsChart