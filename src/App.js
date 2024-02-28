import axios from "axios";
import { useState } from "react";
function App() {
  const [deg, setdeg] = useState("-");
  const [city, setcity] = useState("-");
  const [desc, setdesc] = useState("-");
  const [enteredvalue, setenteredvalue] = useState("");

  function handleInput(eve) {
    // console.log(eve.target.value);
    setenteredvalue(eve.target.value);
  }

  function getData() {
    var weather = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=c34ed494a18e3b203e207a747e18f142`
    );
    weather.then(function (dalta) {
      //   console.log(dalta.data.weather[0].main);
      setdeg(dalta.data.main.temp);
      setcity(dalta.data.name);
      setdesc(dalta.data.weather[0].main);
    });
  }
  return (
    <div className="flex flex-row justify-center h-[100vh] items-center">
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
        }}
        className="p-2 rounded-md shadow"
      >
        <h2 className="font-medium">Hey! ⛅</h2>
        <p>Do you want to know the weather report :)</p>
        <input
          onChange={handleInput}
          type="text"
          className="rounded-md h-6 mt-2 p-2 text-sm outline-none"
          placeholder="City Name.."
        />
        <br></br>
        <button
          onClick={getData}
          className="bg-black text-white rounded-lg p-1 mt-2 text-xs"
        >
          Get report ⚡
        </button>
        <p className="text-xs mt-2">
          Degree: {deg} | City: {city} | Weather: {desc}
        </p>
      </div>
    </div>
  );
}
export default App;
