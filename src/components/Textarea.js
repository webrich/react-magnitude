import Input from "./Input";
import React from "react";
import ReactDOM from "react-dom";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class Textarea extends Input {
    constructor(props) {
        super(props);
        let { autoresize = false, className, ...remainingProps } = this.input_props;
        this.autoresize = autoresize;
        this.textarea_props = {
            className: cn(className, "materialize-textarea"),
            ...remainingProps
        };
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                {this.wrapper_props.children}
                <textarea ref="el" {...this.textarea_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        super.componentDidMount();
        if (typeof $ !== "undefined" && this.autoresize) {
            $(ReactDOM.findDOMNode(this.refs.el)).trigger("autoresize");
        }
    }
}

export default Textarea;
