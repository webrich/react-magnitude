import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        let { className, indicators = true, height = 400, transition = 500, interval = 6000, fullscreen = false, ...remainingProps } = props;
        this.className = cn(className, "slider", { fullscreen: fullscreen });
        this._props = remainingProps;
        this.options = {
            indicators,
            height,
            transition,
            interval
        };
    }

    render() {
        return (
            <Node ref={ref => (this.slider = ref)} className={this.className} {...this._props}>
                <Node node="ul" className="slides">
                    {this._props.children}
                </Node>
            </Node>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.slider) {
            $(this.slider.el).slider(this.options);
        }
    }
}

Slider.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fullscreen: PropTypes.bool,
    indicators: PropTypes.bool,
    height: PropTypes.number,
    transition: PropTypes.number,
    interval: PropTypes.number
};

export default Slider;
