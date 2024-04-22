import { useState } from "react";

const RatingComponentLab = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [text, setText] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = () => {
    setText(`Selected Emoji: ${selectedEmoji}, Feedback: ${feedbackText}`);
    setSelectedEmoji(null);
    setFeedbackText("");
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  return (
    <>
      <div id="feedback" className="p-4">
        {["😍", "😀", "🙁", "😭"].map((emoji) => (
          <button
            key={emoji}
            className="m-2 text-2xl"
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}

        {selectedEmoji && (
          <div>
            <textarea
              value={feedbackText}
              onChange={handleFeedbackChange}
              placeholder="Enter your Feedback"
              className="w-full p-2 border border-gray-400"
            ></textarea>
            <button
              id="submit"
              onClick={handleSubmit}
              className="mt-2 px-4 py-2 bg-blue-700 text-white"
            >
              Submit
            </button>
          </div>
        )}

        <p className="text-xl h-12 w-auto border border-black">{text}</p>
      </div>
    </>
  );
};

export default RatingComponentLab;
