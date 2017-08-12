import React from "react";
import ReactDOM from "react-dom";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Node node="li" {...this.props}>
                {this.props.children}
            </Node>
        );
    }
}

Slide.propTypes = {
    children: PropTypes.node.isRequired
};

export default Slide;
