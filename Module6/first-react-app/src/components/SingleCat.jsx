// ==========================================
// Exercise 2 - Original SingleCat Component
// ==========================================

// This component originally displayed each cat's
// name, Latin name and image.

// function SingleCat({ name, latinName, image }) {
//   return (
//     <li className="singleCat">
//       {/* Display the cat image. */}
//       <img
//         src={image}
//         alt={name}
//         className="catImage"
//         onError={(event) => {
//           event.currentTarget.style.display = 'none'
//         }}
//       />
//
//       <div>
//         {/* Display the common name of the cat. */}
//         <h3>{name}</h3>
//
//         {/* Display the scientific name of the cat. */}
//         <p><em>{latinName}</em></p>
//       </div>
//     </li>
//   )
// }

// Original export from Exercise 2:
// export default SingleCat

// ==========================================
// Exercise 5 - Updated SingleCat Component
// ==========================================

// Exercise 5 adds an onDelete callback to remove a cat.
// The original name, Latin name and image functionality is retained.

function SingleCat({ name, latinName, image, onDelete }) {
  return (
    <li className="singleCat">
      {/* Exercise 2: Display the cat image. */}
      <img
        src={image}
        alt={name}
        className="catImage"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="catDetails">
        {/* Exercise 2: Display the common name of the cat. */}
        <h3>{name}</h3>

        {/* Exercise 2: Display the scientific name of the cat. */}
        <p>
          <em>{latinName}</em>
        </p>
      </div>

      {/* Exercise 5: Delete button calls the function passed from BigCats. */}
      <button className="deleteCatButton" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

// Export the active Exercise 5 SingleCat component.
export default SingleCat;
