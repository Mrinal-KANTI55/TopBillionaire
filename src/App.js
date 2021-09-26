// import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Billionaire from './component/Billionaires/Billionaire';

function App() {
  return (
    <div className="App">
      {/* here add component name */}
      <Header></Header>
      <Billionaire></Billionaire>
    </div>
  );
}

export default App;
