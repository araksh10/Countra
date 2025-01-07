import './App.css';
import Counter from './component/Counter';

function App() {

  return (
    <>
      <div className='headerSec'>
        <h1 className="headerName">
          Countra ...
        </h1>
        <div className="shortMenu">
          <button id="add">
            Add+
          </button>
          <button id="reset">
            Reset
          </button>
        </div>
      </div>
      <div className="mainBody">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App;
