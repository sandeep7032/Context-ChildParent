import { useContext, useState } from "react";
import Context from "./Context";

const D = () => {
  const { setValue } = useContext(Context);
  const [input, setInput] = useState("");
  return (
    <div>
      <h2>D Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue(input);
        }}
      >
        Send to A
      </button>
    </div>
  );
};

export default D;
