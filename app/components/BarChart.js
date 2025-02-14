"use client"
import { useRef, useEffect, useState } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PieController, ArcElement } from "chart.js";

// ✅ Register all required components
Chart.register(BarController, BarElement, PieController, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart(){
    const chartRef = useRef(null)
    const [chartData, setChartData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://dummyjson.com/users")
            if (!response.ok){
                console.error("Bad response")
            }
            const data = await response.json()
            // console.log(data);
            const firstTen = data.users.splice(0,10)
            // setChartData(data.users)
            setChartData(firstTen)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        if (chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");
            const label = chartData.map((items)=> items.firstName)
            const data = chartData.map((items)=> items.weight)

            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: ["ကချင်", "ကယား", "ကရင်", "ချင်း", "စစ်ကိုင်း", "တနင်္သာရီ", "ပဲခူး", "မကွေး", "မန္တလေး", "မွန်", "ရခိုင်", "ရန်ကုန်", "ရှမ်း", "ဧရာဝတီ", "နေပြည်တော်"],
                    // labels: label,
                    datasets: [
                        {
                            label: "Info",
                            data: [2197283, 296903, 1490968, 373024, 6015590, 1380567, 4453691, 4078504, 6283663, 1717166, 2466385, 7370010, 6517377, 5546281, 1129344],
                            // data: data,
                            // data: [
                            //     {name: "John", age: "34"},
                            //     {name: "Jane", age: "54"},
                            //     {name: "Doe", age: "12"},
                            //     {name: "Emily", age: "64"},
                            //     {name: "Jack", age: "26"},
                            //     {name: "David", age: "44"},
                            //     {name: "Ruby", age: "18"},
                            // ],
                            backgroundColor: [
                                "rgb(255, 99, 132, 0.2)",
                                "rgb(255, 159, 64, 0.2)",
                                "rgb(155, 205, 86, 0.2)",
                                "rgb(75, 192, 192, 0.2)",
                                "rgb(54, 162, 235, 0.2)",
                                "rgb(153, 102, 255, 0.2)",
                                "rgb(201, 203, 207, 0.2)",
                            ],
                            borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(155, 205, 86)",
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
                    // layout: {
                    //     padding: 40
                    // },
                    responsive: true,
                    // parsing: {
                    //     xAxisKey: "name",
                    //     yAxisKey: "age"
                    // },
                    plugins: {
                        legend: {display: true},
                        title: {display: true, text: "Weight Info"}
                    },
                    scales: {
                        x: {
                            type: "category",
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
    }, [chartData])
    return <div style={{position: "relative", width: "90vw", height: "80vh"}}><canvas ref={chartRef}/></div>
}