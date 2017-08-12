import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';
import Anchor from './Anchor';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        let {duration=200, dist=-100, shift=0, padding=0, fullWidth=false, indicators, noWrap=false, slider=false, className, ...remainingProps} = props;
        this.options = {
            duration: duration,
            dist: dist,
            shift: shift,
            padding: padding,
            fullWidth: fullWidth,
            noWrap: noWrap,
            slider: slider
        };
        this.indicators = indicators !== true ? undefined : true;
        this.className = cn('carousel', className, {
            'carousel-slider': slider,
            'center': this.indicators
        });
        this._props = remainingProps;
    }
    render() {
        return (
            <Node ref='el' data-indicators={ this.indicators } className={ this.className } {...this._props}>
                { React.Children.map(this._props.children, child => React.cloneElement(child, {
                      indicators: this.indicators
                  })) }
            </Node>
            );
    }
    componentDidMount() {
        if (typeof $ !== 'undefined') {
            $(ReactDOM.findDOMNode(this.refs.el)).carousel(this.options);
        }
    }
}

class CarouselItem extends React.Component {
    constructor(props) {
        super(props);
        let {className, fixed=false, href='javascript:void(0);', indicators=false, ...remainingProps} = props;
        this.indicators = indicators;
        this.fixed = fixed;
        this.href = href;
        this.className = cn(className, {
            'carousel-item': !fixed,
            'carousel-fixed-item': fixed,
            'center': fixed
        });
        this._props = remainingProps;
    }
    render() {
        if (this.indicators || this.fixed) {
            return (
                <Node href={ this.href } className={ this.className } {...this._props}>
                    { this._props.children }
                </Node>
                );
        } else {
            return (
                <Anchor href={ this.href } className={ this.className } {...this._props}>
                    { this._props.children }
                </Anchor>
                );
        }
    }
}

CarouselItem.propTypes = {
    children: PropTypes.node.isRequired,
    fixed: PropTypes.bool
};

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
    duration: PropTypes.number,
    dist: PropTypes.number,
    shift: PropTypes.number,
    dist: PropTypes.number,
    fullWidth: PropTypes.bool,
    indicators: PropTypes.bool,
    noWrap: PropTypes.bool,
    slider: PropTypes.bool
}

Carousel.Item = CarouselItem;

export default Carousel;