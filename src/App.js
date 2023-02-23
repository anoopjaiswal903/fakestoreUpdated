import "./App.scss";

import { Content, Theme } from "@carbon/react";

import ProductView from "./Fakestore/Products/ProductView";
import { CartView } from "./Fakestore/Products/CartView";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Testpage from "./Testpage/Testpage";

// import { UpdateCartView } from "./Fakestore/Products/UpdateCartView";

function App() {
  return (
    <div className="App">
      <Content>
        <Theme theme="g90">
          <Header />
        </Theme>
        <Switch>
          <Route exact path="/" component={ProductView} />
          <Route path="/cartView" component={CartView} />
          <Route path="/Testpage" component={Testpage} />
          {/* <Route path="/UpdateCartView" component={UpdateCartView} /> */}
        </Switch>
      </Content>
    </div>
  );
}

export default App;
