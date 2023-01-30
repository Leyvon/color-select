import ColorSelect from "./components/ColorSelect/ColorSelect";

function App() {
  return (
    <div className="App">
      <ColorSelect value="#000000" onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
