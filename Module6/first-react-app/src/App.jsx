import "./App.css";

// ==========================================
// Module 6 - React Exercises
// ==========================================

// Exercise 1: Greeting component
import Greeting from "./components/Greeting";

// Exercise 2, 4 and 5: BigCats component
import BigCats from "./components/BigCats";

// Exercise 3: Emoji component
import Emoji from "./components/Emoji";

// Exercise 6: Calculator component
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <h1>Module 6 - React Exercises</h1>

      {/* ==========================================
          Exercise 1 - Greeting Component
          ========================================== */}

      <h2>Exercise 1 - Greeting</h2>

      {/* Renders the Greeting component with no props. */}
      <Greeting />

      {/* Renders the Greeting component with a name prop. */}
      <Greeting name="John" />

      {/* Renders the Greeting component with children. */}
      <Greeting name="Mark">
        <p>Welcome to React!</p>
      </Greeting>

      {/* ==========================================
          Exercise 2, 4 and 5 - BigCats Component
          ========================================== */}

      <h2>Exercises 2, 4 and 5 - BigCats</h2>

      {/* Exercise 2: Display a list of big cats. */}
      {/* Exercise 4: Sort, reverse, filter and reset the list. */}
      {/* Exercise 5: Add new cats and delete existing cats. */}
      <BigCats />

      {/* ==========================================
          Exercise 3 - Emoji Component
          ========================================== */}

      <h2>Exercise 3 - Emoji</h2>

      {/* Exercise 3: Change the displayed emoji using useState. */}
      <Emoji />

      {/* ==========================================
          Exercise 6 - Calculator Component
          ========================================== */}

      <h2>Exercise 6 - Calculator</h2>

      {/* Exercise 6: Calculate results using two numbers and an operator. */}
      <Calculator />
    </>
  );
}

export default App;
