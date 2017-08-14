import React from "react";
import PropTypes from "prop-types";
import { Node, Heading, Container, Row, Column } from "react-magnitude";

const Example = ({ title, container = true, children }) =>
    <Node>
        <Heading weight="1" className="pageHeader">
            <Container>
                {title}
            </Container>
        </Heading>
        {container
            ? <Container>
                  <Row>
                      <Column size="s12 m9 l10">
                          {children}
                      </Column>
                  </Row>
              </Container>
            : <Node>
                  {children}
              </Node>}
    </Node>;

Example.propTypes = {
    title: PropTypes.string,
    container: PropTypes.bool,
    children: PropTypes.node
};

export default Example;
