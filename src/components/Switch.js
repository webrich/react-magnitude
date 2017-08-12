import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Switch extends Input {
    constructor(props) {
        super(props);
        let { checked = false, type, className, ...remainingProps } = this.input_props;
        this.checkbox_props = {
            type: "checkbox",
            defaultChecked: checked,
            ...remainingProps
        };
    }

    render() {
        let N = this.wrapper_props.size ? Column : "p";
        let labelCount = React.Children.count(this.wrapper_props.children);
        return (
            <N {...this.wrapper_props}>
                <Node className="switch">
                    <label {...this.label_props}>
                        {this.wrapper_props.children[0].props.children}
                        <input {...this.checkbox_props} />
                        <span className="lever" />
                        {this.wrapper_props.children[1].props.children}
                    </label>
                </Node>
            </N>
        );
    }
}

export default Switch;
