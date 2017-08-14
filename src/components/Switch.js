import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";

class Switch extends Input {
    constructor(props) {
        super(props);
        let { checked = false, ...remainingProps } = this.input_props;
        this.checkbox_props = {
            defaultChecked: checked,
            ...remainingProps,
            type: "checkbox",
            className: null
        };
    }

    render() {
        let N = this.wrapper_props.size ? Column : "p";
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
