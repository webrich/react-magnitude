import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';
import PropTypes from 'prop-types';
import cn from 'classNames';

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Node ref='el' hideOn='all'>
                    { this.props.children }
                </Node>);
    }
    componentWillUnmount() {
        if (typeof $ !== 'undefined') {
            if (this.props.target) {
                $(this.props.target).tooltip('remove');
            }
        }
    }
    componentDidMount() {
        if (typeof $ !== 'undefined') {
            if (this.props.target) {
                let tooltipText = $(ReactDOM.findDOMNode(this.refs.el)).html();
                $(this.props.target).tooltip({
                    position: this.props.position || 'right',
                    delay: parseInt(this.props.delay || '350'),
                    html: Boolean(this.props.html),
                    tooltip: tooltipText
                });
            }
        }
    }
}

Tooltip.propTypes = {
    target: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    delay: PropTypes.string,
    html: PropTypes.bool
};

export default Tooltip;