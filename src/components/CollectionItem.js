import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
        let { active = false, header = false, avatar = false, dismissable = false, node = "li", className, ...remainingProps } = props;
        this.className = cn(className, {
            "collection-header": header,
            "collection-item": !header,
            active: active,
            avatar: avatar,
            dismissable: dismissable
        }).trim();
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

CollectionItem.propTypes = {
    header: PropTypes.bool,
    active: PropTypes.bool,
    avatar: PropTypes.bool,
    dismissable: PropTypes.bool,
    node: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default CollectionItem;
