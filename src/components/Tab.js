import React from "react";
import Column from "./Column";
import Anchor from "./Anchor";
import PropTypes from "prop-types";
import cn from "classnames";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        let { onSelect, href, active = false, disabled = false, className, ...remainingProps } = props;
        this.className = cn(className, "tab", {
            disabled: disabled
        }).trim();
        this.anchorClassName = cn({
            active: active
        });
        this._props = remainingProps;
        this.href = href;
        this.onSelect = onSelect;
    }

    _onSelect(e) {
        if (this.onSelect) {
            this.onSelect(this.href, e);
        }
    }

    render() {
        return (
            <Column node="li" className={this.className} {...this._props}>
                <Anchor onClick={this._onSelect.bind(this)} href={this.href} target={this.target} className={this.anchorClassName}>
                    {this._props.children}
                </Anchor>
            </Column>
        );
    }
}

Tab.propTypes = {
    onSelect: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Tab;
