import React from "react";
import Anchor from "./Anchor";
import PropTypes from "prop-types";
import cn from "classnames";

const Brand = ({ children, placement, ...props }) =>
    <Anchor className={cn("brand-logo", placement)} {...props}>
        {children}
    </Anchor>;

Brand.propTypes = {
    placement: PropTypes.oneOf(["left", "right", "center"]),
    children: PropTypes.node
};

export default Brand;
