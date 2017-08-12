import React from "react";
import ReactDOM from "react-dom";
import Node from "./Node";
import Anchor from "./Anchor";
import PropTypes from "prop-types";
import cn from "classNames";
import shortid from "shortid";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        let {
            inDuration = 300,
            outDuration = 225,
            constrainWidth = true,
            hover = false,
            gutter = 0,
            belowOrigin = false,
            alignment = "left",
            stopPropagation = false,
            id = shortid.generate(),
            ...remainingProps
        } = props;
        this.options = {
            inDuration,
            outDuration,
            constrainWidth,
            hover,
            gutter,
            belowOrigin,
            alignment,
            stopPropagation
        };
        this._props = {
            className: "dropdown-content",
            id,
            ...remainingProps
        };
    }
    render() {
        return (
            <Node ref="el" node="ul" {...this._props}>
                {this._props.children}
            </Node>
        );
    }
    componentWillUnmount() {
        if (typeof $ !== "undefined" && $.fn.dropdown) {
            $(this._props.target).dropdown("destroy");
        }
    }
    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.dropdown) {
            $(this._props.target).attr("data-activates", this._props.id).dropdown(this.options);
        }
    }
}

class DropdownItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.href) {
            return (
                <li>
                    <Anchor {...this.props}>
                        {this.props.children}
                    </Anchor>
                </li>
            );
        } else {
            return (
                <li {...this.props}>
                    {this.props.children}
                </li>
            );
        }
    }
}

DropdownItem.propTypes = {
    children: PropTypes.node
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    constrainWidth: PropTypes.bool,
    hover: PropTypes.bool,
    gutter: PropTypes.number,
    belowOrigin: PropTypes.bool,
    alignment: PropTypes.oneOf(["left", "right"]),
    stopPropagation: PropTypes.bool,
    target: PropTypes.string.isRequired
};

Dropdown.Item = DropdownItem;

export default Dropdown;
