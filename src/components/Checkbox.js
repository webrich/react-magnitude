import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Checkbox extends Input {
    constructor(props) {
        super(props);
        let { filled = false, type, checked = false, className, ...remainingProps } = this.input_props;
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

export default Checkbox;
