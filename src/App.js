import { useState } from 'react';
import './App.css';
import Page from './Components/Page/Page';

function App() {
  const [notesArr, setNotesArr] = useState([])

  return (
    <div className="App">
      <Page notesArr={notesArr} setNotesArr={setNotesArr}></Page>
    </div>
  );
}

export default App;
