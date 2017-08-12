import React from "react";
import Node from "./Node";
import * as Utils from "./Utils";
import PropTypes from "prop-types";
import classNames from "classNames";

class Button extends React.Component {
    constructor(props) {
        super(props);
        let { floating = false, pulse = false, flat = false, disabled = false, size, className, ...remainingProps } = props;
        this.className = classNames(className, {
            btn: !flat,
            disabled: disabled,
            "btn-floating": floating,
            "btn-flat": flat,
            "btn-large": size === "large",
            pulse: pulse
        }).trim();
        this.node = props.type ? "button" : "a";
        this._props = remainingProps;
    }
    render() {
        return (
            <Node className={this.className} node={this.node} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    pulse: PropTypes.bool,
    size: PropTypes.oneOf(["large"]),
    type: PropTypes.oneOf(["reset", "submit", "button"])
};

export default Button;
