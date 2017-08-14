import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class FlowText extends React.Component {
    constructor(props) {
        super(props);
        let { className, node = "p", ...remainingProps } = props;
        this.className = cn(className, "flow-text");
        this.node = node;
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={this.className} node={this.node} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

FlowText.propTypes = {
    className: PropTypes.string,
    node: PropTypes.string,
    children: PropTypes.node
};

export default FlowText;
