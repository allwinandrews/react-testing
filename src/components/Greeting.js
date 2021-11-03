import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <p>p tag</p>}
      {changeText && <p>changed</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
