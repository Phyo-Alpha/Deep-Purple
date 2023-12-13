import { Doughnut } from "react-chartjs-2";
import { MyChartData } from "../types";

interface DoughnutChartProps {
    chartData: MyChartData;
}

function DoughnutChart({ chartData }: DoughnutChartProps) {

    return (

        <div className="chart-container bg-light-1 px-10 py-4 rounded-md" style={{ width: '30%', height: '30%' }}>
            <h2 style={{ textAlign: "center" }} className="text-dark-1">Customer Sentiment</h2>
            <Doughnut
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                            text: "Customer sentiment"
                        },
                        legend: {
                            display: false,
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                    cutout: '60%',
                    rotation: 270,
                    circumference: 180,
                }}
            />
        </div>


    );
}
export default DoughnutChart;