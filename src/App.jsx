import { useEffect, useState } from "react";

function App() {
  let [all, setAll] = useState(new Array(31));
  let [data, setData] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= all.length; i++) {
      arr.push(i);
    }
    setData(arr);
  }, []);
  console.log(data);

  return <>
  <select name="" id="">
    {data.map(item=>(
      <option>{item}</option>
    ))}
  </select>
  </>;
}

export default App;
