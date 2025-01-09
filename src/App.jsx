import './App.css';
// import Counter from './component/Counter';
import { Provider } from 'react-redux';
import Store from './redux/store';
import HooksCounter from './component/HooksCounter';
import DynamicHooksCounter from './component/DynamicHooksCounter';
import VariableCounter from './component/VariableCounter';

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
        < HooksCounter />
        < DynamicHooksCounter />
        < VariableCounter />
        < VariableCounter dynamic />
      </div>
    </Provider>
  )
}

export default App;
