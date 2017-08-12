import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classNames";
import Icon from "./Icon";
import Image from "./Image";

class Tag extends React.Component {
    constructor(props) {
        super(props);
        let { src, alt, dismissable = false, ...remainingProps } = props;
        this.img_props = { src, alt };
        this.dismissable = dismissable;
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className="chip" {...this._props}>
                {this.img_props.src ? <Image {...this.img_props} /> : ""}
                {this._props.children}
                {this.dismissable ? <Icon className="close">close</Icon> : ""}
            </Node>
        );
    }
}

Tag.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    dismissable: PropTypes.bool,
    children: PropTypes.string.isRequired
};

export default Tag;
