import React from "react";
import { withRouter, Link } from "react-router-dom";

import SVGicon from "../../icons/SVGicon";

const EditShotBtn = props => {
  return (
    <div className="edit">
      <Link to={`${props.location.pathname}/edit`} className="edit">
        <SVGicon name="settings" className="settingsIcon" />
        &nbsp;
        <p> Edit</p>
      </Link>
    </div>
  );
};

export default withRouter(EditShotBtn);
