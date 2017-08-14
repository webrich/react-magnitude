import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";
import shortid from "shortid";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        let {
            inDuration = 300,
            outDuration = 225,
            dismissible = true,
            opacity = 0.5,
            startingTop = 4,
            endingTop = 10,
            ready,
            complete,
            fixedFooter = false,
            bottomSheet = false,
            id = shortid.generate(),
            target,
            ...remainingProps
        } = props;
        this.target = target;
        this.options = {
            inDuration,
            outDuration,
            dismissible,
            opacity,
            startingTop: startingTop + "%",
            endingTop: endingTop + "%",
            ready,
            complete
        };
        this._props = {
            className: cn("modal", {
                "modal-fixed-footer": fixedFooter,
                "bottom-sheet": bottomSheet
            }),
            id,
            ...remainingProps
        };
    }
    render() {
        return (
            <Node ref={ref => (this.modal = ref)} {...this._props}>
                {this._props.children}
            </Node>
        );
    }
    componentDidMount() {
        $(document).ready(() => {
            if (typeof $ !== "undefined" && $.fn.modal) {
                $(this.target).attr("data-target", this._props.id);
                $(this.modal.el).modal(this.options);
            }
        });
    }
}

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        let { className, ...remainingProps } = props;
        this.className = cn("modal-content", className);
        this._props = remainingProps;
    }
    render() {
        return (
            <Node {...this._props} className={this.className}>
                {this._props.children}
            </Node>
        );
    }
}

class ModalFooter extends React.Component {
    constructor(props) {
        super(props);
        let { className, ...remainingProps } = props;
        this.className = cn("modal-footer", className);
        this._props = remainingProps;
    }
    render() {
        return (
            <Node {...this._props} className={this.className}>
                {this._props.children}
            </Node>
        );
    }
}

ModalContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

ModalFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    dismissible: PropTypes.bool,
    opacity: PropTypes.number,
    startingTop: PropTypes.number,
    endingTop: PropTypes.number,
    ready: PropTypes.func,
    complete: PropTypes.func,
    fixedFooter: PropTypes.bool,
    bottomSheet: PropTypes.bool,
    id: PropTypes.string,
    target: PropTypes.string
};

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
