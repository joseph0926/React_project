import React, {Fragment, useContext} from 'react'
import ChartContext from '../context/chart-context'
import ServiceFilter from './ServiceFilter';
import ServiceChart from './ServiceChart';

import "./Service.css"

const Service = () => {

  const chartCtx = useContext(ChartContext);

  const filteredPos = chartCtx.filter

  const filteredStc = chartCtx.data.filter((item) => {
    return item.pos === chartCtx.filter;
  })

  return (
    <div className='service-container'>
      <ServiceFilter selected={filteredPos}></ServiceFilter>
      <ServiceChart stc={filteredStc}></ServiceChart>
    </div>
  )
}

export default Service