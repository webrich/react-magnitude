import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Node ref={ref => (this.tooltip = ref)} hideOn="all">
                {this.props.children}
            </Node>
        );
    }
    componentWillUnmount() {
        if (typeof $ !== "undefined") {
            if (this.props.target) {
                $(this.props.target).tooltip("remove");
            }
        }
    }
    componentDidMount() {
        if (typeof $ !== "undefined") {
            if (this.props.target) {
                let tooltipText = $(this.tooltip.el).html();
                $(this.props.target).tooltip({
                    position: this.props.position || "right",
                    delay: parseInt(this.props.delay || "350"),
                    html: Boolean(this.props.html),
                    tooltip: tooltipText
                });
            }
        }
    }
}

Tooltip.propTypes = {
    children: PropTypes.node,
    target: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    delay: PropTypes.string,
    html: PropTypes.bool
};

export default Tooltip;
