import axios from "axios";
import { useState } from "react";
function App() {
  const [deg, setdeg] = useState("-");
  const [city, setcity] = useState("-");
  const [desc, setdesc] = useState("-");
  const [enteredvalue, setenteredvalue] = useState("");

  function handleInput(eve) {
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
          backgroundImage:
            "linear-gradient(to right, #ec77ab 0%, #7873f5 100%)",
        }}
        className="text-xl rounded-3xl shadow p-5"
      >
        <h2 className="font-medium text-2xl">Hey! ⛅</h2>
        <p className="text-xl pb-2">
          Do you want to know the weather report :)
        </p>
        <input
          onChange={handleInput}
          type="text"
          className="rounded-md h-6 mt-2 p-4 text-xl outline-none"
          placeholder="City Name.."
        />
        <br></br>
        <button
          onClick={getData}
          className="bg-black text-white rounded-lg p-2 mt-2 text-sm"
        >
          Get report ⚡
        </button>
        <p className="text-xl mt-2">
          Degree: {deg} <br></br>
          City: {city} <br></br>
          Weather: {desc} <br></br>
        </p>
      </div>
    </div>
  );
}
export default App;
