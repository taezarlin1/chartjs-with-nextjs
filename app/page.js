import BarChart from "./components/BarChart";
import DonutChart from "./components/DonutChart";
import PieChart from "./components/PieChart";
import PolarAreaChart from "./components/PolarAreaChart";

export default function Home() {
  return (
    <div className="container">Chart js
      <div>
        <h3>Bar Chart</h3>
        <BarChart/>
      </div>
      <div>
        <h3>Pie Chart</h3>
        <PieChart/>
      </div>
      <div>
        <h3>Doughnut Chart</h3>
        <DonutChart/>
      </div>
      <div>
        <h3>Polar Area Chart</h3>
        <PolarAreaChart/>
      </div>
    </div>
  );
}
