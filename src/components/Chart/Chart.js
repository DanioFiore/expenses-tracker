import React from "react";
import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValue);
    return (
        <React.Fragment>
            <div className={`${styles.chart}`}>
                {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} label={dataPoint.value} value={dataPoint.value} maxValue={totalMaximum} />)}
            </div>
        </React.Fragment>
    );
}

export default Chart;