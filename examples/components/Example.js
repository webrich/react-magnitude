import React from "react";
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

export default Example;
