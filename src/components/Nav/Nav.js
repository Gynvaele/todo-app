import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export const Nav = () => {
  return (
    <div id={"navigation"}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>
          <NavLink exact to={"/singIn"} className={"navButton"}>
            SignIn page
          </NavLink>
        </Button>
        <Button>
          <NavLink exact to={"/"} className={"navButton"}>
            {"ToDo list."}
          </NavLink>
        </Button>
      </ButtonGroup>
    </div>
  );
};
