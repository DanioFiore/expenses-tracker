import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} label={dataPoint.value} value={dataPoint.value} maxValue={totalMaximum} />)}
        </div>
    );
}

export default Chart;