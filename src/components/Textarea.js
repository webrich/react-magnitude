import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import cn from "classnames";

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
                <textarea ref={ref => (this.el = ref)} {...this.textarea_props} />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        super.componentDidMount();
        if (typeof $ !== "undefined" && this.autoresize) {
            $(this.el).trigger("autoresize");
        }
    }
}

export default Textarea;
