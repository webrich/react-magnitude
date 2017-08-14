import Input from "./Input";
import React from "react";
import Column from "./Column";
import PropTypes from "prop-types";
import cn from "classnames";

class Radio extends Input {
    constructor(props) {
        super(props);
        let { withgap = false, checked = false, className, ...remainingProps } = this.input_props;
        this.radio_props = {
            type: "radio",
            className: cn(className, {
                "with-gap": withgap
            }),
            defaultChecked: checked,
            ...remainingProps
        };
    }

    render() {
        let N = this.wrapper_props.size ? Column : "p";
        return (
            <N {...this.wrapper_props}>
                <input {...this.radio_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }
}
Radio.propTypes = {
    withgap: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string
};

export default Radio;
