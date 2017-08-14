import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

class Parallax extends React.Component {
    constructor(props) {
        super(props);
        let { height = 500, ...remainingProps } = props;
        this._props = remainingProps;
        this.height = height;
    }

    render() {
        return (
            <Node className="parallax-container" style={{ height: this.height + "px" }}>
                <Node ref={ref => (this.parallax = ref)} className="parallax">
                    {this._props.children}
                </Node>
            </Node>
        );
    }

    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.parallax) {
            $(this.parallax.el).parallax();
        }
    }
}

Parallax.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number
};

export default Parallax;
