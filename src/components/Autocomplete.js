import Input from "./Input";
import React from "react";
import Column from "./Column";
import Node from "./Node";
import PropTypes from "prop-types";

class Autocomplete extends Input {
    constructor(props) {
        super(props);
        let { options, ...remainingProps } = this.input_props;
        this.autocomplete_props = remainingProps;
        this.options = options;
    }

    render() {
        let N = this.wrapper_props.size ? Column : Node;
        return (
            <N className={this.wrapperClassName} {...this.wrapper_props}>
                {this.wrapper_props.children}
                <input type="text" ref={ref => (this.input = ref)} {...this.autocomplete_props} autoComplete="off" />
                <label {...this.label_props}>
                    {this.label_props.children}
                </label>
            </N>
        );
    }

    componentDidMount() {
        $(document).ready(() => {
            if ($.fn.autocomplete) {
                $(this.input).autocomplete(this.options);
            }
        });
    }
}

Autocomplete.propTypes = {
    options: PropTypes.object
};

export default Autocomplete;
