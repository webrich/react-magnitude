import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";
import * as Utils from "./Utils";

class Column extends React.Component {
    constructor(props) {
        super(props);
        let { push, pull, offset, size, className, node = "div", ...remainingProps } = props;
        this.node = node;
        this._props = remainingProps;
        this.className = cn(className, "col", size).trim();
        this.pushPropToClassName(push);
        this.pullPropToClassName(pull);
        this.offsetPropToClassName(offset);
    }
    pushPropToClassName(push) {
        this.className = cn(this.className, Utils.prefix("push-", push)).trim();
    }
    pullPropToClassName(pull) {
        this.className = cn(this.className, Utils.prefix("pull-", pull)).trim();
    }
    offsetPropToClassName(offset) {
        this.className = cn(this.className, Utils.prefix("offset-", offset)).trim();
    }
    render() {
        return (
            <Node className={this.className} node={this.node} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
}

Column.propTypes = {
    size: PropTypes.string,
    push: PropTypes.string,
    pull: PropTypes.string,
    offset: PropTypes.string,
    className: PropTypes.string,
    node: PropTypes.string
};

export default Column;
