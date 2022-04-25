import { Route } from "react-router-dom";

import Main from "./components/Main";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";

function App() {
  return (
    <div className='App'>
      <Route path='/' exact component={Main} />
      <Route path='/toggle' exact component={Toggle} />
      <Route path='/tab' exact component={Tab} />
    </div>
  );
}

export default App;
