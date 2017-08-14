import React from "react";
import Node from "./Node";
import Row from "./Row";
import Column from "./Column";
import PropTypes from "prop-types";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        let { fixed, color, ...remainingProps } = props;
        this.fixed = fixed;
        this._props = remainingProps;
        this.color = color;
    }
    render() {
        if (this.fixed) {
            return (
                <Node node="div" className="navbar-fixed">
                    <Node node="nav" className={this.color}>
                        <Row className="nav-wrapper">
                            <Column size="s12">
                                {this._props.children}
                            </Column>
                        </Row>
                    </Node>;
                </Node>
            );
        } else {
            return (
                <Node node="nav" className={this.color}>
                    <Node className="nav-wrapper">
                        <Column size="s12">
                            {this._props.children}
                        </Column>
                    </Node>
                </Node>
            );
        }
    }
}

Navbar.propTypes = {
    fixed: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.node
};

export default Navbar;
