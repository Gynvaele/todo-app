import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Provider from "react-redux/lib/components/Provider";
//reducers
import { todo } from "./redux/Todos/reducer";
//components
import { TodoList } from "./pages/TodoList/TodoList";
import { SingIn } from "./pages/SingIn/SingIn";
import { Nav } from "./components/Nav/Nav";

export const store = createStore(todo);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={"/"} render={() => <SingIn />} />
          <Route exact path={"/todos"} component={TodoList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
