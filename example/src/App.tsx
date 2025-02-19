import type { Component } from "solid-js";

import Highlight from "solid-highlight";
import "highlight.js/styles/stackoverflow-light.css";

const App: Component = () => {
  return (
    <div>
      <Highlight autoDetect={true}>
        {`function foo() { return 'bar' }`}
      </Highlight>
      <pre>
        <code>{`function foo() { return 'bar' }`}</code>
      </pre>
    </div>
  );
};

export default App;
