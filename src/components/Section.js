import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

const Section = ({ children, className, ...props }) =>
    <Node className={cn(className, "section")} {...props}>
        {children}
    </Node>;

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Section;
