import React from 'react';
import Anchor from './Anchor';
import PropTypes from 'prop-types';
import cn from 'classNames';

const Brand = ({children, placement, ...props}) => (
    <Anchor className={ cn('brand-logo', placement) } {...props}>
        { children }
    </Anchor>
);

Brand.propTypes = {
    placement: PropTypes.oneOf(['left', 'right', 'center'])
};

export default Brand;