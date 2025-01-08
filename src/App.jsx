import './App.css';
import Counter from './component/Counter';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {

  return (
    <Provider store={Store}>
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
        <Counter id={1}/>
        <Counter id={2}/>
        <Counter id={3}/>
      </div>
    </Provider>
  )
}

export default App;
