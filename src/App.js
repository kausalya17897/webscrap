
import './App.css';
import { Welcome } from './Welcome';
import { Notfound } from './Notfound';
import {Link,Switch,Route} from "react-router-dom";
import TextField from '@mui/material/TextField';
export default function App() {
return(
  <div className="App">
    
    <nav>
    <Link to="/">A-Z SHOP</Link>
     <Link to="/">HOME</Link>
     <Link to="/men">MEN</Link>
     <Link to="/women">WOMEN</Link>
     <input className="search" placeholder="🔍search for products" type="text"/>
     <Link className="login" to="/login">LOGIN</Link>
    </nav>
    <Switch>
      <Route path="/men">
      </Route>
      <Route path="/women"></Route>
      <Route path="/login">
<Loginform/>
      </Route>
      <Route exact path="/"><Welcome/></Route>
      <Route path="**">
      <Notfound/>
      </Route>
      </Switch>
    
    </div>
  
)
}
function Loginform(){

return(
<div className="loginform">
  
  <TextField id="standard-basic" label="First Name" variant="standard"
  placeholder="name" />
  <TextField id="standard-basic" label="Last Name" variant="standard" />
  <TextField id="standard-basic" label="Gmail id" variant="standard" />
  <TextField id="standard-basic" label="Phone no" variant="standard" />
  
  
</div>
)
}

