import React from "react";
import { Link } from "react-router-dom";

import SVGicon from "../../icons/SVGicon";

const Logo = props => {
  return (
    <Link to="/" className="dribbble-logo" style={{ lineHeight: 0 }}>
      <SVGicon {...props} />
    </Link>
  );
};
export default Logo;
