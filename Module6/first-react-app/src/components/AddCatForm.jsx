import { useState } from "react";

// ==========================================
// Exercise 5 - AddCatForm Component
// ==========================================

// This component contains a controlled form for adding new cats.
// The onAddCat function is passed down from the BigCats parent component.

function AddCatForm({ onAddCat }) {
  // Store the values of the form inputs in state.
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  // Handle the form submission.
  function handleSubmit(event) {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // Create a new cat object using the form values.
    const newCat = {
      name: name.trim(),
      latinName: latinName.trim(),
      image: image.trim(),
    };

    // Pass the new cat to the parent BigCats component.
    onAddCat(newCat);

    // Reset the form inputs after submitting.
    setName("");
    setLatinName("");
    setImage("");
  }

  return (
    <div className="AddCatForm componentBox">
      <h3>Add a New Cat</h3>

      {/* Controlled form: input values are stored in React state. */}
      <form onSubmit={handleSubmit} className="catForm">
        {/* Input for the cat's common name. */}
        <label htmlFor="catName">Cat Name:</label>
        <input
          type="text"
          id="catName"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter cat name"
          required
        />

        {/* Input for the cat's Latin name. */}
        <label htmlFor="catLatinName">Latin Name:</label>
        <input
          type="text"
          id="catLatinName"
          value={latinName}
          onChange={(event) => setLatinName(event.target.value)}
          placeholder="Enter Latin name"
          required
        />

        {/* Input for the cat's image URL. */}
        <label htmlFor="catImage">Image URL:</label>
        <input
          type="url"
          id="catImage"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="https://example.com/cat.jpg"
          required
        />

        {/* Submit button calls handleSubmit when the form is submitted. */}
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

// Export the AddCatForm component.
export default AddCatForm;
