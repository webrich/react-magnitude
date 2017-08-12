import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";

class File extends Input {
    constructor(props) {
        super(props);
        let { placeholder, validate = false, ...remainingProps } = this.input_props;
        this.wrapperClassName = "file-field input-field";
        this.placeholder = placeholder;
        this.file_props = remainingProps;
        this.validate = validate;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                <Node className="btn">
                    {this.label_props.children}
                </Node>
                <input {...this.file_props} type="file" />
                <Node className="file-path-wrapper">
                    <input className={cn("file-path", { validate: this.validate })} type="text" placeholder={this.placeholder} />
                </Node>
            </N>
        );
    }
}

export default File;
