import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  async function getData() {
    const response = await fetch("/api/v1/cats");
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => getData, []); // GET DATA ON COMPONENT LOAD

  return (
    <>
      {/* <button onClick={() => getData()}>get data</button> */}
      <h1>
        {data ? (
          <ul>
            {data.cats.map((cat) => {
              return (
                <li>
                  name: {cat.name}, color: {cat.color} age: {cat.age}{" "}
                </li>
              );
            })}
          </ul>
        ) : (
          "click the button to get the data"
        )}
      </h1>
    </>
  );
}

export default App;
