import './App.css';
import { Loading } from './loading/Loading.js';
import { BookSelectContainer } from './bookSelect/BookSelectContainer.js'

function App() {
  /*return (
    <div className="App">
      <Loading />
    </div>
  );*/
  return (
    <div>
      <BookSelectContainer />
    </div>
  )
}

export default App;
