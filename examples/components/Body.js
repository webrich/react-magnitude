import React from 'react';
import navigations from '../navigations';
import { Route, Switch } from 'react-router-dom';
import { Node, Container } from 'react-magnitude';

export default () => (
    <Node node='main' className='page-main'>
        { navigations.map((navigation) => {
              if (navigation.path) {
                  return <Route key={ navigation.path } {...navigation} />;
              } else if (navigation.components) {
                  return navigation.components.map((component) => {
                      return <Route key={ component.path } {...component} />;
                  });
              }
          }) }
    </Node>
);