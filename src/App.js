import Forms from "./components/forms/Forms";
import FormsObject from "./components/forms/FormsObject";
import KeyboardClipboard from "./components/keyboardClipboardEvents/KeyboardClipboard";
import MouseEvent from "./components/mouseEvents/MouseEvents";
import Event from "./events/Event"
import UseStateCounter from "./usestateComp/UseStateCounter";
import UseStateObject from "./usestateComp/UseStateObject";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container"


function App() {
  return (
    <Container className="mt-4">

      <Event /> 
      <UseStateCounter /> 
      <UseStateObject /> 
      <Forms />       
      <MouseEvent /> 
      <FormsObject /> <br/><br/><br/>
      <KeyboardClipboard />

    </Container>
  );
}

export default App;
