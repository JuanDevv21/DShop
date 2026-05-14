import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'LUNES', value: 400 },
    { name: 'MARTES', value: 680 },
    { name: 'MIERCOLES', value: 450 },
    { name: 'JUEVES', value: 850 },
    { name: 'VIERNES', value: 300 },
    { name: 'SABADO', value: 550 },
    { name: 'DOMINGO', value: 480 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
    return (
        <div style={{ 
        backgroundColor: '#111', 
        color: '#fff', 
        padding: '5px 10px', 
        borderRadius: '4px', 
        fontSize: '12px',
        position: 'relative',
        }}>
        {payload[0].value}
        <div style={{
            position: 'absolute',
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '0',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #111'
        }}></div>
        </div>
    );
    }
    return null;
};

const OrderTrendsChart = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

  // 1.Funcion para encontrar el indice de mayor valor
    const maxIndex = useMemo(() => {
    const values = data.map(d => d.value);
    const max = Math.max(...values);
    return data.findIndex(d => d.value === max);
    }, []);

    return (
    <div style={{ width: '100%', height: 350, background: '#fff', padding: '20px' }}>
        <ResponsiveContainer width="80%" height="100%">
        <BarChart 
            data={data} 
            margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
          // Codigo para cambiar el color cuando se pasa el mouse por encima
            onMouseMove={(state) => {
            if (state.isTooltipActive) setHoverIndex(state.activeTooltipIndex);
            else setHoverIndex(null);
            }}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 12 }} 
            dy={15}
            />
            <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: 'transparent' }} 
            position={{ y: 0 }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => {
              // 2. Pone azul la columna del indice mas alto
                const isMax = index === maxIndex;
                const isHovered = index === hoverIndex;
                
                return (
                <Cell
                    key={`cell-${index}`} 
                    fill={isMax || isHovered ? '#0066ff' : '#f0f0f0'} 
                    style={{ transition: 'fill 0.2s ease' }}
                />
                );
            })}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default OrderTrendsChart;