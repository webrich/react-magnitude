import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";
import * as Utils from "./Utils";

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        let { color, ...remainingProps } = props;
        this.className = cn("spinner-layer", Utils.prefix("spinner-", color)).trim();
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={this.className}>
                <Node className="circle-clipper left">
                    <Node className="circle" />
                </Node>
                <Node className="gap-patch">
                    <Node className="circle" />
                </Node>
                <Node className="circle-clipper right">
                    <Node className="circle" />
                </Node>
            </Node>
        );
    }
}

Spinner.propTypes = {
    color: PropTypes.string
};

export default Spinner;
