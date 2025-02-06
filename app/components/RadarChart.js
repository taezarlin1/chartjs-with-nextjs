"use client"
import { useRef, useEffect } from "react";
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, RadarController, PointElement, LineElement } from "chart.js";

// ✅ Register all required components
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, RadarController, PointElement, LineElement);

export default function RadarChart(){
    const chartRef = useRef(null)

    useEffect(()=>{
        if (chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "radar",
                data: {
                    labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby"],
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
                        },
                        {
                            label: "Info",
                            data: [24, 69, 22, 38, 11, 51, 46],
                            backgroundColor: [
                                "rgb(25, 99, 132, 0.2)",
                                
                            ],
                            borderColor: [
                                "rgb(25, 99, 132)",
                                
                            ],
                            borderWidth: 1,
                            // barThickness: 50
                        }
                    ]
                },
                options: {
                    responsive: true,
                }
            });

            chartRef.current.chart = newChart
        }
    }, [])
    return <div style={{position: "relative", width: "90vw", height: "80vh"}}><canvas ref={chartRef}/></div>
}