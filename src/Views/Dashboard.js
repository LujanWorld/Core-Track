import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const history = useHistory();
  const [name, setName] = useState("");

  const handleName = (event) => {
    event.preventDefault();

    if (name === "") {
      console.log("add a name");
      return;
    }
    //props.onName(name);
    console.log("redirecting to tasks");
    history.push("/usertask");
  };

  return (
    <div className="view_container">
      <div style={{ textAlign: "center" }}>
        Nombre:
        <input type="text" name="name" onChange={setName} />
        <input type="submit" value="Next" onClick={handleName} />
      </div>
    </div>
  );
}

export default Dashboard;
