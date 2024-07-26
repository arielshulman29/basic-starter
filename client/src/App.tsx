import { useEffect } from "react";

function App() {
  useEffect(() => {
    const get = async () => {
      const res = await fetch("/", { method: "GET" });
      console.log(res);
    };
    get();
  }, []);

  return <button>Simple Demo App</button>;
}

export default App;
