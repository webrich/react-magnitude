import React from 'react';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

const Card = ({children, size, horizontal=false, stickyAction=false, className, ...props}) => (
    <Node className={ cn('card', className, size, {
                      'horizontal': horizontal,
                      'sticky-action': stickyAction
                  }) } {...props}>
        { children }
    </Node>
);

Card.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    horizontal: PropTypes.bool,
    stickyAction: PropTypes.bool
};

Card.Content = ({children, className, ...props}) => (
    <Node className={ cn('card-content', className) } {...props}>
        { children }
    </Node>
);

Card.Action = ({children, className, ...props}) => (
    <Node className={ cn('card-action', className) } {...props}>
        { children }
    </Node>
);

Card.Title = ({children, className, ...props}) => (
    <Node node='span' className={ cn('card-title', className) } {...props}>
        { children }
    </Node>
);

Card.Image = ({children, waves, className, ...props}) => (
    <Node className={ cn('card-image', className, {
                      'waves-block': waves && waves.trim().length > 0
                  }) } waves={ waves } {...props}>
        { children }
    </Node>
);

Card.Reveal = ({children, className, ...props}) => (
    <Node className={ cn('card-reveal', className) } {...props}>
        { children }
    </Node>
);

Card.Tabs = ({children, className, ...props}) => (
    <Node className={ cn('card-tabs', className) } {...props}>
        { children }
    </Node>
);


Card.Panel = ({children, className, ...props}) => (
    <Node className={ cn('card-panel', className) } {...props}>
        { children }
    </Node>
);


Card.Stacked = ({children, className, ...props}) => (
    <Node className={ cn('card-stacked', className) } {...props}>
        { children }
    </Node>
);


export default Card;