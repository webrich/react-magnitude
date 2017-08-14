import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

const Paragraph = ({ children, ...props }) =>
    <Node node="p" {...props}>
        {children}
    </Node>;

Paragraph.propTypes = {
    children: PropTypes.node
};

export default Paragraph;
