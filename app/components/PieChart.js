"use client"
import { useRef, useEffect } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// ✅ Register all required components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function PieChart(){
    const chartRef = useRef(null)

    useEffect(()=>{
        if (chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "pie",
                data: {
                    labels: ["ကချင်", "ကယား", "ကရင်", "ချင်း", "စစ်ကိုင်း", "တနင်္သာရီ", "ပဲခူး", "မကွေး", "မန္တလေး", "မွန်", "ရခိုင်", "ရန်ကုန်", "ရှမ်း", "ဧရာဝတီ", "နေပြည်တော်"],
                    datasets: [
                        {
                            label: "Info",
                            data: [2197283, 296903, 1490968, 373024, 6015590, 1380567, 4453691, 4078504, 6283663, 1717166, 2466385, 7370010, 6517377, 5546281, 1129344],
                            backgroundColor: [
                                "rgb(255, 99, 132, 0.2)",
                                "rgb(255, 159, 64, 0.2)",
                                "rgb(255, 205, 86, 0.2)",
                                "rgb(75, 192, 192, 0.2)",
                                "rgb(54, 162, 235, 0.2)",
                                "rgb(153, 102, 255, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(75, 192, 192)",
                                "rgb(54, 162, 235)",
                                "rgb(153, 102, 255)",
                                "rgb(201, 203, 207)",
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