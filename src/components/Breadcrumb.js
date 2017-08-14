import React from "react";
import Anchor from "./Anchor";
import cn from "classnames";
import PropTypes from "prop-types";

const Breadcrumb = ({ children, className, ...props }) =>
    <Anchor className={cn("breadcrumb", className).trim()} {...props}>
        {children}
    </Anchor>;

Breadcrumb.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Breadcrumb;
