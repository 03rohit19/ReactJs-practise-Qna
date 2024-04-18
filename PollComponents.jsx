import { useState } from "react";

function PollComponent() {
  const [options, setOptions] = useState([
    { name: "Option 1", votes: 0 },
    { name: "Option 2", votes: 0 },
    { name: "Option 3", votes: 0 },
    { name: "Option 4", votes: 0 },
  ]);

  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].votes += 1;
    setOptions(newOptions);
  };

  return (
    <div>
      <h4 id="question">What is your favorite option?</h4>
      {options.map((option, idx) => (
        <button key={idx} className="option" onClick={() => handleVote(idx)}>
          {option.name} - Votes: {option.votes}
        </button>
      ))}
    </div>
  );
}

export default PollComponent;
