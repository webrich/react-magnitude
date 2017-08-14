import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Input extends React.Component {
    constructor(props) {
        super(props);
        let {
            push,
            pull,
            offset,
            size,
            label,
            type = "text",
            inline = false,
            validate = false,
            active = false,
            error,
            success,
            className,
            children,
            ...remainingProps
        } = props;
        this.label_props = {
            children: label,
            htmlFor: props.id || props.name,
            "data-error": error,
            "data-success": success,
            className: cn({
                active: active
            }).trim()
        };
        this.wrapperClassName = cn("input-field", {
            inline: inline
        });
        this.wrapper_props = {
            children
        };
        if (push) {
            this.wrapper_props.push = push;
        }
        if (pull) {
            this.wrapper_props.pull = pull;
        }
        if (offset) {
            this.wrapper_props.offset = offset;
        }
        if (size) {
            this.wrapper_props.size = size;
        }
        this.input_props = {
            className: cn(className, {
                validate: validate
            }),
            ...remainingProps
        };
        this.type = type;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                {this.wrapper_props.children}
                <input ref={ref => (this.el = ref)} type={this.type} {...this.input_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.characterCounter && this.input_props["data-length"]) {
            $(this.el).characterCounter();
        }
    }
}

Input.propTypes = {
    push: PropTypes.string,
    pull: PropTypes.string,
    offset: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    inline: PropTypes.bool,
    validate: PropTypes.bool,
    active: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    name: PropTypes.string
};

export default Input;
