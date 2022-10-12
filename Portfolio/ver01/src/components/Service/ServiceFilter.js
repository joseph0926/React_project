import React, {useContext} from 'react'
import ChartContext from '../context/chart-context'

import "./ExpensesFilter.css"

const ServiceFilter = (props) => {
  const chartCtx = useContext(ChartContext);

  const dropdownChangeHandler = (event) => {
    chartCtx.filterHandler(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by stack</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='f'>FrontEnd</option>
          <option value='b'>BackEnd</option>
        </select>
      </div>
    </div>
  )
}

export default ServiceFilter