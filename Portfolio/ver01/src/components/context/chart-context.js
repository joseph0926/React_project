import React, {useState} from "react"
import dummyData from "../../dummyData";

const ChartContext = React.createContext({
  data: [],
  filter: "f",
  filterHandler: () => {}
});

export const ChartContextProvider = (props) => {
  const [data, setData] = useState(dummyData);
  const [filter, setFilter] = useState("f");

  const filterHandler = (f) => {
    setFilter(f);
  }

  const contextValue = {
    data: data,
    filter: filter,
    filterHandler: filterHandler
  }

  return (
    <ChartContext.Provider value = {contextValue}>
      {props.children}
    </ChartContext.Provider>
  )
}

export default ChartContext;