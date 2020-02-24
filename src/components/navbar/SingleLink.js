import React from "react";
import { NavLink } from "react-router-dom";

export const SingleLink = props => {
  const { linkParameters } = props;
  return (
    <li className="nav-item text-right">
      <NavLink to={`/${linkParameters.path}`} className="nav-link">
        <span data-toggle="collapse" data-target=".navbar-collapse.show">
          {linkParameters.title}
        </span>
      </NavLink>
    </li>
  );
};
