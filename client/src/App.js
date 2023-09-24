import { useEffect, useState } from "react";

function App() {
  const [APIstate, setAPIState] = useState();

  useEffect(() => {
    fetch("http://localhost:23450/testAPI")
      .then((res) => res.text())
      .then((res) => setAPIState({ apiResponse: res }))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <p className="App-intro">{APIstate?.apiResponse || "API is down"}</p>
    </div>
  );
}

export default App;
