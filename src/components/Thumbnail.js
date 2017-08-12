import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";
import cn from "classNames";
import ReactDOM from "react-dom";

class Thumbnail extends Image {
    constructor(props) {
        super(props);
        let { width = "256", height, className, ...remainingProps } = props;
        this._props = {
            width,
            height,
            className: cn("materialboxed", className),
            ...remainingProps
        };
    }
    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.materialbox) {
            $(ReactDOM.findDOMNode(this.refs.el)).materialbox();
        }
    }
}

export default Thumbnail;
