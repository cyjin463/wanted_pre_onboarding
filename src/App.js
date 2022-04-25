import { Route } from "react-router-dom";

import Main from "./components/Main";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";

function App() {
  return (
    <div className='App'>
      <Route path='/' exact component={Main} />
      <Route path='/toggle' exact component={Toggle} />
      <Route path='/tab' exact component={Tab} />
      <Route path='/input' exact component={Input} />
    </div>
  );
}

export default App;
