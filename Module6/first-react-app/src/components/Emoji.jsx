import { useState } from "react";

// Emoji component demonstrates how to use the useState hook.
function Emoji() {
  // useState creates a state variable called mood.
  // setMood is the function used to update the state.
  // The initial value of mood is 'happy'.
  const [mood, setMood] = useState("happy");

  // This function changes the mood between happy and sad.
  function changeMood() {
    setMood((currentMood) => (currentMood === "happy" ? "sad" : "happy"));
  }

  return (
    <div className="Emoji componentBox">
      <h2>Emoji Mood Changer</h2>

      {/* Conditionally display an emoji based on the current mood. */}
      <p className="emojiDisplay">{mood === "happy" ? "😊" : "😢"}</p>

      {/* Display the current mood. */}
      <p>Current Mood: {mood}</p>

      {/* Call the changeMood function when the button is clicked. */}
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

// Export the Emoji component.
export default Emoji;
