import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import * as Utils from "./Utils";

class Node extends React.Component {
    constructor(props) {
        super(props);
        let {
            waves,
            valign,
            align,
            hideOn,
            float,
            truncate = false,
            hoverable = false,
            node = "div",
            className,
            textColor,
            color,
            depth,
            ...remainingProps
        } = props;
        this.className = cn(className, color).trim();
        this.textColorPropToClassName(textColor);
        this.wavesPropToClassName(waves);
        this.className = cn(this.className, float, Utils.prefix("z-depth-", depth), {
            "left-align": align === "left",
            "right-align": align === "right",
            "center-align": align === "center",
            hide: hideOn === "all",
            "hide-on-small-only": hideOn === "small",
            "hide-on-med-only": hideOn === "medium",
            "hide-on-med-and-down": hideOn === "medium-",
            "hide-on-med-and-up": hideOn === "medium+",
            "hide-on-large-only": hideOn === "large",
            truncate: truncate,
            hoverable: hoverable
        });
        this.className = this.className && this.className.trim().length > 0 ? this.className.trim() : undefined;
        this.valign = valign;
        this.node = node;
        this._props = remainingProps;
    }
    wavesPropToClassName(waves) {
        if (waves && waves.trim().length > 0) {
            this.className = cn(this.className, "waves-effect", Utils.prefix("waves-", waves)).trim();
        }
    }
    textColorPropToClassName(textColor) {
        this.className = cn(
            this.className,
            Utils.prefix(prop => {
                if (["lighten", "darken", "accent"].indexOf(prop.split("-")[0]) > -1 && prop.split("-").length === 2) {
                    return prop.split("-")[0] + "-text-" + prop.split("-")[1];
                } else {
                    return prop + "-text";
                }
            }, textColor)
        ).trim();
    }
    render() {
        let N = this.node;
        let component = (
            <N ref={ref => (this.el = ref)} className={this.className} {...this._props}>
                {this._props.children}
            </N>
        );
        if (this.valign && ["top", "middle", "bottom"].indexOf(this.valign)) {
            switch (this.valign) {
                case "top":
                    return (
                        <div
                            className="valign-wrapper"
                            style={{ "-webkit-align-items": "flex-start", "-ms-flex-align": "flex-start", "align-items": "flex-start" }}
                        >
                            {component}
                        </div>
                    );
                case "middle":
                    return (
                        <div className="valign-wrapper">
                            {component}
                        </div>
                    );
                case "bottom":
                    return (
                        <div
                            className="valign-wrapper"
                            style={{ "-webkit-align-items": "flex-end", "-ms-flex-align": "flex-end", "align-items": "flex-end" }}
                        >
                            {component}
                        </div>
                    );
            }
        }
        return component;
    }
}

Node.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.string,
    push: PropTypes.string,
    pull: PropTypes.string,
    offset: PropTypes.string,
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    waves: PropTypes.string,
    node: PropTypes.node,
    align: PropTypes.oneOf(["left", "right", "center"]),
    valign: PropTypes.oneOf(["top", "middle", "bottom"]),
    float: PropTypes.oneOf(["left", "right"]),
    hideOn: PropTypes.oneOf(["all", "small", "medium", "medium-", "medidum+", "large"]),
    truncate: PropTypes.bool,
    hoverable: PropTypes.bool,
    textColor: PropTypes.string,
    color: PropTypes.string
};

export default Node;
