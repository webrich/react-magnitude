import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";

class Select extends Input {
    constructor(props) {
        super(props);
        this.wrapperClassName = "input-field";
        let { className, ...remainingProps } = this.input_props;
        this.select_props = remainingProps;
        this.className = className;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        if (this.className.indexOf("browser-default") === -1) {
            return (
                <N className={this.wrapperClassName} {...this.wrapper_props}>
                    <select ref={ref => (this.el = ref)} {...this.select_props} className={this.className}>
                        {this.wrapper_props.children}
                    </select>
                    <label {...this.label_props}>
                        {this.label_props.children}
                    </label>
                </N>
            );
        } else {
            return (
                <N {...this.wrapper_props}>
                    <label {...this.label_props}>
                        {this.label_props.children}
                    </label>
                    <select {...this.select_props} className={this.className}>
                        {this.wrapper_props.children}
                    </select>
                </N>
            );
        }
    }

    componentWillUnmount() {
        if (typeof $ !== "undefined" && $.fn.material_select) {
            $(this.el).material_select("destroy");
        }
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.material_select) {
            $(this.el).material_select();
        }
    }
}

export default Select;
