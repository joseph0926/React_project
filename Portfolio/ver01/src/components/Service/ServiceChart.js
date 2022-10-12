import React, {useContext} from 'react'
import ChartContext from '../context/chart-context'
import ServiceChartBar from './ServiceChartBar';

import "./Chart.css"

const ServiceChart = (props) => {
  const chartCtx = useContext(ChartContext);

  const dataPointValues = props.stc.map((dataPoint) => {
    return dataPoint.amount;
  });
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.stc.map((dataPoint) => (
        <ServiceChartBar
          key={dataPoint.id}
          value={dataPoint.amount}
          maxValue={totalMaximum}
          label={dataPoint.name}
        ></ServiceChartBar>
      ))}
    </div>
  )
}

export default ServiceChart