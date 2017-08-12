import React from 'react';
import PropTypes from 'prop-types';
import { Section, SideNav, Heading, Divider, Navs, Nav, Anchor, Node, Collapsible } from 'react-magnitude';
import navigations from '../navigations';

class Navbar extends React.Component {
    render() {
        let pathname = this.context && this.context.router && this.context.router.route.location.pathname;
        return (<SideNav fixed>
                    <Anchor href='#' align='center'>
                        <Heading weight='1' className='logo'>
                            M
                        </Heading>
                    </Anchor>
                    <Divider/>
                    <Collapsible>
                        { navigations.map((navigation) => {
                              if (navigation.components) {
                                  let components = navigation.components.sort(function(a, b) {
                                      return a.title > b.title;
                                  });
                                  let isActive = components.find(x => x.path === pathname) !== undefined;
                                  return (<Collapsible.Item key={ navigation.title }>
                                              <Collapsible.Header waves='teal' active={ isActive }>
                                                  { navigation.title }
                                              </Collapsible.Header>
                                              <Collapsible.Body>
                                                  <Navs>
                                                      { components.map((component) => {
                                                            if (component.title) {
                                                                return <Nav key={ component.path } target={ component.target } to={ component.path }>
                                                                           { component.title }
                                                                       </Nav>;
                                                            }
                                                        }) }
                                                  </Navs>
                                              </Collapsible.Body>
                                          </Collapsible.Item>);
                              }
                          }) }
                    </Collapsible>
                </SideNav>);
    }
}

Navbar.contextTypes = {
    router: PropTypes.object
};

export default Navbar;