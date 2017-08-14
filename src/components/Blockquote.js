import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

const Blockquote = ({ children, ...props }) =>
    <Node node="blockquote" {...props}>
        {children}
    </Node>;

Blockquote.propTypes = {
    children: PropTypes.node
};

export default Blockquote;
