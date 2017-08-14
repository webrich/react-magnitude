import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

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
