import React from 'react';
import Node from './Node';
import Button from './Button';
import Anchor from './Anchor';
import PropTypes from 'prop-types';
import cn from 'classNames';

class FABAction extends React.Component {
    constructor(props) {
        super(props);
        let {toolbar, node, ...remainingProps} = props;
        this.toolbar = toolbar;
        this._props = remainingProps;
    }
    render() {
        if (this.toolbar) {
            return ( <Node node='li'>
                         <Anchor {...this._props}>
                             { this._props.children }
                         </Anchor>
                     </Node>
                );
        } else {
            return (
                <Node node='li'>
                    <Button floating {...this._props}>
                        { this._props.children }
                    </Button>
                </Node>
                );
        }
    }
}


class FABActions extends React.Component {
    constructor(props) {
        super(props);
        let {toolbar, node, ...remainingProps} = props;
        this.toolbar = toolbar;
        this._props = remainingProps;
    }
    render() {
        return (
            <Node node='ul' {...this._props}>
                { React.Children.map(this._props.children, child => React.cloneElement(child, {
                      toolbar: this.toolbar
                  })) }
            </Node>
            );
    }
}

FABActions.propTypes = {
    children: PropTypes.node.isRequired
};

class FAB extends React.Component {
    constructor(props) {
        super(props);
        let {className, horizontal, click, toolbar, node='div', ...remainingProps} = props;
        this.className = cn(className, 'fixed-action-btn', {
            'horizontal': horizontal && !toolbar,
            'click-to-toggle': click,
            'toolbar': toolbar
        }).trim();
        this.node = node;
        this.toolbar = toolbar;
        this._props = remainingProps;
    }

    render() {
        return (
            <Node className={ this.className } node={ this.node } {...this._props}>
                { React.Children.map(this._props.children, child => {
                      if (child.type && child.type.name === 'Actions') {
                          return React.cloneElement(child, {
                              toolbar: this.toolbar
                          });
                      } else {
                          return child;
                      }
                  }) }
            </Node>
            );
    }
}

FAB.propTypes = {
    horizontal: PropTypes.bool,
    click: PropTypes.bool,
    toolbar: PropTypes.bool,
    children: PropTypes.node.isRequired
};

FAB.Action = FABAction;
FAB.Actions = FABActions;
export default FAB;