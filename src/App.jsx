import { useState } from "react";
import data from "./components/division/text";

function App() {
  let [country, setCountry] = useState(data);
  let [district, setDistrict] = useState("");
  let handleChange = (e) => {
    if (e.target.value != "Select Division") {
      setDistrict(e.target.value);
    }
  };

  return (
    <>
      <select onChange={handleChange} name="" id="">
        <option value="">Select Division</option>
        {country.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>

      <select name="" id="">
        <option value="">Select District</option>
        {!district && <option value="">Please a Select District</option>}
        {country.map(
          (item) =>
            item.name == district &&
            item.district.map((ite) => <option>{ite.name}</option>)
        )}
      </select>
    </>
  );
}

export default App;
