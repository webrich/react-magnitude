import Input from "./Input";
import React from "react";
import Column from "./Column";
import PropTypes from "prop-types";
import cn from "classnames";

class Checkbox extends Input {
    constructor(props) {
        super(props);
        let { filled = false, checked = false, className, ...remainingProps } = this.input_props;
        this.checkbox_props = {
            type: "checkbox",
            className: cn(className, {
                "filled-in": filled
            }),
            defaultChecked: checked,
            ...remainingProps
        };
    }

    render() {
        let N = this.wrapper_props.size ? Column : "p";
        return (
            <N {...this.wrapper_props}>
                <input {...this.checkbox_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }
}

Checkbox.propTypes = {
    filled: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Checkbox;
