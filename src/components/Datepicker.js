import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";

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
                <input ref={ref => (this.input = ref)} {...this.datepicker_props} type="text" />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.pickadate) {
            $(this.input).pickadate(this.options);
        }
    }
}

Datepicker.propTypes = {
    options: PropTypes.object
};

export default Datepicker;
