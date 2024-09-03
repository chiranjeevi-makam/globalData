import './App.css'; 

import Data from './globaldata'

const App=()=><Data.Consumer>
  {value=>{
    const{name}=value 

    return<div>
      <h1>{name}</h1>
    </div>
  }}
</Data.Consumer>

export default App;
