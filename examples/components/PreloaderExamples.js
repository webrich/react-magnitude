import React from "react";
import Example from "./Example";
import { Row, Column, Section, Heading, Divider, Preloader, Progress, Spinner } from "react-magnitude";

export default () =>
    <Example title="Preloaders">
        <Heading weight="3" className="header">
            Determinate
        </Heading>
        <Section>
            <Row>
                <Column size="s8" offset="s2">
                    <Progress width={70} />
                </Column>
            </Row>
        </Section>
        <Heading weight="3" className="header">
            Indeterminate
        </Heading>
        <Section>
            <Row>
                <Column size="s8" offset="s2">
                    <Progress indeterminate />
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Spinners
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m4" align="center">
                    ``
                    <Preloader size="big">
                        <Spinner color="blue-only" />
                    </Preloader>
                </Column>
                <Column size="s12 m4" align="center">
                    <Preloader>
                        <Spinner color="red-only" />
                    </Preloader>
                </Column>
                <Column size="s12 m4" align="center">
                    <Preloader size="small">
                        <Spinner color="green-only" />
                    </Preloader>
                </Column>
            </Row>
        </Section>
        <Heading weight="3" className="header">
            Flashing Colors Spinners
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m4" align="center">
                    <Preloader size="big">
                        <Spinner color="blue" />
                        <Spinner color="red" />
                        <Spinner color="yellow" />
                        <Spinner color="green" />
                    </Preloader>
                </Column>
                <Column size="s12 m4" align="center">
                    <Preloader>
                        <Spinner color="blue" />
                        <Spinner color="red" />
                        <Spinner color="yellow" />
                        <Spinner color="green" />
                    </Preloader>
                </Column>
                <Column size="s12 m4" align="center">
                    <Preloader size="small">
                        <Spinner color="blue" />
                        <Spinner color="red" />
                        <Spinner color="yellow" />
                        <Spinner color="green" />
                    </Preloader>
                </Column>
            </Row>
        </Section>
    </Example>;
