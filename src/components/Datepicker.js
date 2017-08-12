import Input from "./Input";
import React from "react";
import ReactDOM from "react-dom";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Datepicker extends Input {
    constructor(props) {
        super(props);
        let { options, ...remainingProps } = this.input_props;
        this.datepicker_props = remainingProps;
        this.options = options;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                {this.wrapper_props.children}
                <input ref="el" {...this.datepicker_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.pickadate) {
            $(ReactDOM.findDOMNode(this.refs.el)).pickadate(this.options);
        }
    }
}

export default Datepicker;
