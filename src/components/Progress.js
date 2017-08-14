import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

const Progress = ({ indeterminate = false, width = 0 }) =>
    <Node className="progress">
        <Node
            className={cn({
                determinate: !indeterminate,
                indeterminate: indeterminate
            })}
            style={{ width: width + "%" }}
        />
    </Node>;

Progress.propTypes = {
    children: PropTypes.node,
    indeterminate: PropTypes.bool,
    width: PropTypes.number
};

export default Progress;
