import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this._props = props;
    }
    render() {
        return <Node ref="el" node="img" {...this._props} />;
    }
}

export default Image;
