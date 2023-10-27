import { useEffect, useState } from "react";
import { dataBd, dataPak } from "./components/hw/data";

function App() {
  let [allyear, setAllYear] = useState(new Array(2023));
  let [allmonth, setAllMonth] = useState(new Array(12));
  let [allday, setAllDay] = useState(new Array(31));

  let [year, setYear] = useState([]);
  let [month, setMonth] = useState([]);
  let [day, setDay] = useState([]);

  let [bdDivision, setBdDivision] = useState(dataBd);
  let [pakDivision, setPakDivision] = useState(dataPak);
  let [bdDivisionName, setBdDivisionName] = useState("");
  let [pakDivisionName, setPakDivisionName] = useState("");

  let handleChange = (e) => {
    if (e.target.value != "Select Division") {
      setBdDivisionName(e.target.value);
    }
  };

  useEffect(() => {
    let yearArr = [];
    for (let i = 1970; i <= allyear.length; i++) {
      yearArr.push(i);
    }
    setYear(yearArr);

    let monthArr = [];
    for (let i = 1; i <= allmonth.length; i++) {
      monthArr.push(i);
    }
    setMonth(monthArr);

    let dayArr = [];
    for (let i = 1; i <= allday.length; i++) {
      dayArr.push(i);
    }
    setDay(dayArr);
  }, []);
  return (
    <>
      <select>
        {year.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <select>
        {month.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <select>
        {day.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <select onChange={handleChange}>
        <option>Select Division</option>
        {bdDivision.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>

      <select>
        <option value>Select District</option>
        {!bdDivisionName && <option>Select Division First</option>}
        {bdDivision.map(
          (item) =>
            item.name == bdDivisionName &&
            item.district.map((ite) => <option>{ite.name}</option>)
        )}
      </select>

      <select>
        {pakDivision.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
    </>
  );
}

export default App;
