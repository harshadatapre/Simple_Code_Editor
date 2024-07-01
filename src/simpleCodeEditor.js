import React, { useState } from 'react';
import './simpleCodeEditor.css';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const highlight = code => Prism.highlight(code, Prism.languages.javascript, 'javascript');

export function App() {
  const [code, setCode] = useState('');

  return (
    <div className="total">
      <div className="nameArea">
        <div className="editorName">
          <h1>Simple Code Editor</h1>
        </div>
      </div>
      <div className="editor">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={highlight}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
          className="writeCode"
        />
      </div>
    </div>
  );
}




