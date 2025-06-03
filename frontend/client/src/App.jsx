import { useEffect, useState } from "react";
import axios from "axios";

import UserData  from "./components/UserData";
function App() {
  const [message, setMessage] = useState("Loading...");

  const serverUrl = "http://localhost:5000/";

  useEffect(() => {
    axios
      .get(serverUrl)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Error fetching from backend");
      });
  }, []);

  return (
    <>

      <p className="read-the-docs">
        Backend Message :{message}
      </p>


      <UserData/>
    </>
  );
}

export default App;
