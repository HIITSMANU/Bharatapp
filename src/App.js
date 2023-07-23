import React from 'react';
function Heading(props){
  const {text}=props;
  return <h1>{text}</h1>;
}
function App() {
  return (
    <div>
      <div className="App">
      <Heading text="Codebeat" />
    </div><h1>Counter</h1>
    </div>
  );
}

export default App;