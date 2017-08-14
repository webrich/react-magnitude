import React from "react";
import Node from "./Node";
import cn from "classnames";
import PropTypes from "prop-types";

const Row = ({ children, className, ...props }) =>
    <Node className={cn(className, "row")} {...props}>
        {children}
    </Node>;

Row.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Row;
