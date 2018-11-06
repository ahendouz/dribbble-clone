import React from "react";
import { Link } from "react-router-dom";

import SVGicon from "../SVGicon";

const Logo = props => {
  return (
    <Link to="/" className="dribbble-logo">
      <SVGicon {...props} />
    </Link>
  );
};
export default Logo;
