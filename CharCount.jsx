import { useState } from "react";

const CharCount = () => {
  const [charCnt, setCharCnt] = useState(0);
  const handleChangeCount = () => {
    setCharCnt(event.target.value.length);
  };

  return (
    <>
      <h1>Character count</h1>
      <div>
        <textarea id="textInput" onChange={handleChangeCount}></textarea>
        <div id="count">{charCnt}</div>
      </div>
    </>
  );
};

export default CharCount;
