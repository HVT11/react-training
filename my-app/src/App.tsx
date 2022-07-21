import Calculator from "./component/Calculator/Calculator";
import SignUpDialog from "./component/Dialog/WelcomeDialog";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Tri Huynh"/>
      <Calculator />
      <SignUpDialog />
    </div>
  );
}

export default App;
