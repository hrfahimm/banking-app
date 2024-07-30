'use client'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Bank Accounts',
                data: [12739, 87394, 23939],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: [
            'Bank A',
            'Bank B',
            'Bank C'
        ]
    }
    return (
        <Doughnut data={data} options={{ cutout: '60%', plugins: { legend: { display: false } } }} />
    )
}

export default DoughnutChart