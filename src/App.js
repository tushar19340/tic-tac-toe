import './App.css';
import Board from './board'


function App() {
  var array = ["tushar", "bharti"];

  function handleClick(){
    console.log("hello");
  }
  return (

    <div className="App">
      <Board/>
    </div>
  );
}

export default App;