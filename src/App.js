import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './App.css';

function App() {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );

  return (
    <div className="App">
      <header className="App-header">
          <p>Editor:</p>
      </header>
        <Editor
            editorState={editorState}
            onChange={editorState => setEditorState(editorState)}
        />
    </div>
  );
}

export default App;
