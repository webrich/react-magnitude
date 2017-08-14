import React from "react";
import { NavLink } from "react-router-dom";
import Anchor from "./Anchor";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        let { tab = false, active = false, disabled = false, className, ...remainingProps } = props;
        this.className = cn(className, {
            tab: tab,
            active: active,
            disabled: disabled
        }).trim();
        this.initializing = true;
        this._props = remainingProps;
    }
    componentDidMount() {
        this.initializing = false;
    }
    render() {
        if (this._props.to) {
            return (
                <Node node="li" className={this.className}>
                    <NavLink activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }} replace {...this._props}>
                        {this._props.children}
                    </NavLink>
                </Node>
            );
        } else {
            return (
                <Node node="li" className={this.className}>
                    <Anchor {...this._props}>
                        {this._props.children}
                    </Anchor>
                </Node>
            );
        }
    }
}

Nav.propTypes = {
    tab: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Nav;
