import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

// ==========================================
// Exercise 2 - Original Cat Data
// ==========================================

// Array containing the seven big cats.
// Each cat has a unique ID, name, Latin name and image.
const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=300",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300",
  },
];

// ==========================================
// Exercise 2 - Original BigCats Implementation
// ==========================================

// This version displays the original list of cats
// using map() and the reusable SingleCat component.

// function BigCats() {
//   return (
//     <div className="BigCats componentBox">
//       <h2>Big Cats</h2>
//
//       <ul className="catList">
//         {cats.map((cat) => (
//           <SingleCat
//             key={cat.id}
//             name={cat.name}
//             latinName={cat.latinName}
//             image={cat.image}
//           />
//         ))}
//       </ul>
//     </div>
//   )
// }

// Original Exercise 2 export:
// export default BigCats

// ==========================================
// Exercise 4 - Previous BigCats Implementation
// ==========================================

// Exercise 4 introduced useState and four buttons
// for sorting, reversing, filtering and resetting.

// function BigCats() {
//   const [currentCats, setCurrentCats] = useState(cats)
//
//   function sortCats() {
//     const sortedCats = [...currentCats].sort((a, b) =>
//       a.name.localeCompare(b.name)
//     )
//     setCurrentCats(sortedCats)
//   }
//
//   function reverseCats() {
//     const reversedCats = [...currentCats].reverse()
//     setCurrentCats(reversedCats)
//   }
//
//   function filterCats() {
//     const filteredCats = currentCats.filter((cat) =>
//       cat.latinName.startsWith('Panthera')
//     )
//     setCurrentCats(filteredCats)
//   }
//
//   function resetCats() {
//     setCurrentCats([...cats])
//   }
//
//   return (
//     <div className="BigCats componentBox">
//       <h2>Big Cats</h2>
//
//       <div className="catButtons">
//         <button onClick={sortCats}>Sort Alphabetically</button>
//         <button onClick={reverseCats}>Reverse List</button>
//         <button onClick={filterCats}>Filter Panthera</button>
//         <button onClick={resetCats}>Reset List</button>
//       </div>
//
//       <p>Showing {currentCats.length} cats</p>
//
//       <ul className="catList">
//         {currentCats.map((cat) => (
//           <SingleCat
//             key={cat.id}
//             name={cat.name}
//             latinName={cat.latinName}
//             image={cat.image}
//           />
//         ))}
//       </ul>
//     </div>
//   )
// }

// Original Exercise 4 export:
// export default BigCats

// ==========================================
// Exercise 5 - Updated BigCats Implementation
// ==========================================

// Exercise 5 adds the ability to add and delete cats.
// All Exercise 4 sorting and filtering features are retained.

function BigCats() {
  // Exercise 4: Store the current list of cats in state.
  const [currentCats, setCurrentCats] = useState(cats);

  // Exercise 4: Sort cats alphabetically.
  function sortCats() {
    // Create a copy before sorting to avoid mutating state.
    const sortedCats = [...currentCats].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Update the state with the sorted list.
    setCurrentCats(sortedCats);
  }

  // Exercise 4: Reverse the current list.
  function reverseCats() {
    // Create a copy before reversing to avoid mutating state.
    const reversedCats = [...currentCats].reverse();

    // Update the state with the reversed list.
    setCurrentCats(reversedCats);
  }

  // Exercise 4: Filter cats from the Panthera genus.
  function filterCats() {
    // filter() returns a new array containing matching cats.
    const filteredCats = currentCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );

    // Update the state with the filtered list.
    setCurrentCats(filteredCats);
  }

  // Exercise 4: Reset the list to the original seven cats.
  function resetCats() {
    setCurrentCats([...cats]);
  }

  // Exercise 5: Add a new cat to the current list.
  function addCat(newCat) {
    // Generate a unique ID for the new cat.
    const catWithId = {
      ...newCat,
      id: crypto.randomUUID(),
    };

    // Add the new cat without modifying the existing array.
    setCurrentCats((previousCats) => [...previousCats, catWithId]);
  }

  // Exercise 5: Delete a cat using its unique ID.
  function deleteCat(id) {
    // filter() creates a new array without the selected cat.
    setCurrentCats((previousCats) =>
      previousCats.filter((cat) => cat.id !== id)
    );
  }

  return (
    <div className="BigCats componentBox">
      <h2>Big Cats</h2>

      {/* Exercise 4: Sorting and filtering buttons. */}
      <div className="catButtons">
        <button onClick={sortCats}>Sort Alphabetically</button>
        <button onClick={reverseCats}>Reverse List</button>
        <button onClick={filterCats}>Filter Panthera</button>
        <button onClick={resetCats}>Reset List</button>
      </div>

      {/* Exercise 5: AddCatForm receives the addCat callback. */}
      <AddCatForm onAddCat={addCat} />

      {/* Display the number of cats currently shown. */}
      <p>Showing {currentCats.length} cats</p>

      <ul className="catList">
        {/* Exercise 2: Use map() and unique keys to render cats. */}
        {/* Exercise 5: Pass an onDelete callback to each SingleCat. */}
        {currentCats.map((cat) => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onDelete={() => deleteCat(cat.id)}
          />
        ))}
      </ul>
    </div>
  );
}

// Export the active Exercise 5 BigCats component.
export default BigCats;
