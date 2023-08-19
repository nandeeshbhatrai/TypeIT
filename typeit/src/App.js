import Navbar from "./components/Navbar";
import Minibar from "./components/Minibar";
import TextArea from "./components/TextArea";
import styled from 'styled-components'

const APP= styled.div`
`
function App() {
  return (
    <APP>
      <Navbar/>   
      <Minibar/>
      <TextArea/>
      </APP>
  );
}

export default App;
