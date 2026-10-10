{
  /* This creates a new Greeting component as a function that returns some JSX. */
}
{
  /* Destructures the props object to access name and children. */
}
function Greeting({ name, children }) {
  return (
    <div className="Greeting componentBox">
      {/* If the name prop exists, display it. Otherwise display World. */}
      <h2>Hello {name ? name : "World"}</h2>

      {/* If this component has children, render them here. */}
      {children}
    </div>
  );
}

// Export this component so we can import it elsewhere.
export default Greeting;
