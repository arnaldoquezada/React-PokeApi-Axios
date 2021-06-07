import './components/App.scss';
// import PokeApi from './components/PokeApi';
import PokeApiAxios from './components/PokeApiAxios';
// import Form from './components/Form';


function App() {
  return (
    <div className="App">
      {/* < PokeApi/> */}
      <PokeApiAxios />
    </div>
  );
}

export default App;
