import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";
import cn from "classnames";

const Card = ({ children, size, horizontal = false, stickyAction = false, className, ...props }) =>
    <Node
        className={cn("card", className, size, {
            horizontal: horizontal,
            "sticky-action": stickyAction
        })}
        {...props}
    >
        {children}
    </Node>;

Card.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    horizontal: PropTypes.bool,
    stickyAction: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Content = ({ children, className, ...props }) =>
    <Node className={cn("card-content", className)} {...props}>
        {children}
    </Node>;

Card.Content.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Action = ({ children, className, ...props }) =>
    <Node className={cn("card-action", className)} {...props}>
        {children}
    </Node>;

Card.Action.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Title = ({ children, className, ...props }) =>
    <Node node="span" className={cn("card-title", className)} {...props}>
        {children}
    </Node>;

Card.Title.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Image = ({ children, waves, className, ...props }) =>
    <Node
        className={cn("card-image", className, {
            "waves-block": waves && waves.trim().length > 0
        })}
        waves={waves}
        {...props}
    >
        {children}
    </Node>;

Card.Image.propTypes = {
    waves: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Reveal = ({ children, className, ...props }) =>
    <Node className={cn("card-reveal", className)} {...props}>
        {children}
    </Node>;

Card.Reveal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Tabs = ({ children, className, ...props }) =>
    <Node className={cn("card-tabs", className)} {...props}>
        {children}
    </Node>;

Card.Tabs.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Panel = ({ children, className, ...props }) =>
    <Node className={cn("card-panel", className)} {...props}>
        {children}
    </Node>;

Card.Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Card.Stacked = ({ children, className, ...props }) =>
    <Node className={cn("card-stacked", className)} {...props}>
        {children}
    </Node>;

Card.Stacked.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Card;
