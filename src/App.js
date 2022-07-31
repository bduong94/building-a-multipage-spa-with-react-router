import { Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Products from "./component/Products";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
