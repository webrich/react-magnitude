import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Caption extends React.Component {
    constructor(props) {
        super(props);
        let { className, align = "left", ...remainingProps } = props;
        this.className = cn(className, "caption", {
            "left-align": align === "left",
            "center-align": align === "center",
            "right-align": align === "right"
        });
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={this.className} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

Caption.propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(["left", "center", "right"]),
    className: PropTypes.string
};

export default Caption;
