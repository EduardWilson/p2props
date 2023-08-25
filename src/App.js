import './App.css';

import Button from './components/button';
import TextField from './components/textfield';
import Image from './components/image';
import H1 from './components/H1';
import cite from './cite.jpg'
import ed from './ed.jpg'
function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <H1
            label="Eduard Wilson" />
          <div className="button">
            <Button
              backgroundColor="#D2042D"
              label="Cancel"
            />
            <Button
              backgroundColor="#0047AB"
              label="Submit"
            />
          </div>
          <div className="input">
            <TextField
              id="input"
              borderRadius="20px"
              border="none"
              borderBottom="4px solid black"
              color="#000000"
            />
            <TextField
              id="input"
              borderRadius="20px"
              border="none"
              color="#000000"
              borderBottom="4px solid black"
            />
          </div>
          <div className="input">
            <TextField
              border="4px solid black"
              backgroundColor="#7FFFD4"
            />
            <TextField
              border="4px solid black"
              backgroundColor="#7FFFD4"
            />
          </div>
          <div className="image">
            <Image
              src={ed}
              borderRadius="20px"
              width="200px"
              height="200px" />
            <Image
              src={ed}
              borderRadius="20px"
              width="200px"
              height="200px" />
          </div>
          <div className="image">
            <Image
              src={cite}
              borderRadius="50%"
              width="100px"
              height="100px" />
            <Image
              src={cite}
              borderRadius="50%"
              width="100px"
              height="100px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
