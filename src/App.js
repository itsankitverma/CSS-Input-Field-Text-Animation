import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="inputBox">
        <input type="text" required="required" />
        <span>First Name</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Last name</span>
      </div>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>Address</span>
      </div>
    </div>
  );
}
