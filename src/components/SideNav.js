import React from "react";

import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        let {
            fixed = false,
            className,
            menuWidth = 300,
            edge = "right",
            closeOnClick = true,
            draggable = true,
            onOpen,
            onClose,
            ...remainingProps
        } = props;
        this._props = remainingProps;
        this.options = {
            menuWidth: parseInt(menuWidth),
            edge: edge,
            closeOnClick: closeOnClick,
            draggable: draggable,
            onOpen: onOpen,
            onClose: onClose
        };
        this.className = cn("side-nav", className, {
            fixed: fixed
        }).trim();
    }
    render() {
        return (
            <Node className={this.className} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
    componentDidMount() {
        if (typeof $ !== "undefined" && this._props.id) {
            $("data-activates=[" + this._props.id + "]").sideNav(this.options);
        }
    }
}

SideNav.propTypes = {
    className: PropTypes.string,
    menuWidth: PropTypes.number,
    id: PropTypes.string,
    edge: PropTypes.oneOf(["left", "right"]),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    fixed: PropTypes.bool
};

export default SideNav;
