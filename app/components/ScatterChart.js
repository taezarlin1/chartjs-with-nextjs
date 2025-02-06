"use client"
import { useRef, useEffect } from "react";
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, ScatterController} from "chart.js";

// ✅ Register all required components
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, ScatterController);

export default function ScatterChart(){
    const chartRef = useRef(null)

    useEffect(()=>{
        if (chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "scatter",
                data: {
                    labels: [1, 2, 3, 4, 5, 6, 7],
                    datasets: [
                        {
                            label: "Info",
                            data: [34, 54, 12, 64, 26, 44, 18],
                            backgroundColor: [
                                "rgb(255, 99, 132, 0.2)",
                                
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                
                            ],
                            borderWidth: 1,
                            // barThickness: 50
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {display: true},
                        title: {display: true, text: "Bar Chart Example"}
                    },
                    scales: {
                        x: {
                            type: "linear",
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true
                        },
                        
                    }
                }
            });

            chartRef.current.chart = newChart
        }
    }, [])
    return <div style={{position: "relative", width: "90vw", height: "80vh"}}><canvas ref={chartRef}/></div>
}