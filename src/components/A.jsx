import { useState } from "react";
import B from "./B";
import Context from "./Context";

const A = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>A Component</h2>
      <p>Data from D : {value}</p>
      <hr />
      <Context.Provider value={{ setValue }}>
        <B />
      </Context.Provider>
    </div>
  );
};

export default A;
