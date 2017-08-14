import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";

class Timepicker extends Input {
    constructor(props) {
        super(props);
        let { options, ...remainingProps } = this.input_props;
        this.timepicker_props = remainingProps;
        this.options = options;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                {this.wrapper_props.children}
                <input ref={ref => (this.input = ref)} {...this.timepicker_props} type="text" />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.pickatime) {
            $(this.input).pickatime(this.options);
        }
    }
}

export default Timepicker;
