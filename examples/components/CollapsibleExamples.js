import React from "react";
import Example from "./Example";
import { Section, Heading, Icon, Collapsible } from "react-magnitude";

export default () =>
    <Example title="Collapsibles">
        <Heading weight="3" className="header">
            Accordion
        </Heading>
        <Section>
            <Collapsible>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>filter_drama</Icon> First
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>place</Icon> Second
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>whatshot</Icon> Third
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
            </Collapsible>
        </Section>
        <Heading weight="3" className="header">
            Popout
        </Heading>
        <Section>
            <Collapsible popout>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>filter_drama</Icon> First
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>place</Icon> Second
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>whatshot</Icon> Third
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
            </Collapsible>
        </Section>
        <Heading weight="3" className="header">
            Preselected Section
        </Heading>
        <Section>
            <Collapsible>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>filter_drama</Icon> First
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header active>
                        <Icon>place</Icon> Second
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>whatshot</Icon> Third
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
            </Collapsible>
        </Section>
        <Heading weight="3" className="header">
            Expandable
        </Heading>
        <Section>
            <Collapsible expandable>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>filter_drama</Icon> First
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>place</Icon> Second
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
                <Collapsible.Item>
                    <Collapsible.Header>
                        <Icon>whatshot</Icon> Third
                    </Collapsible.Header>
                    <Collapsible.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Collapsible.Body>
                </Collapsible.Item>
            </Collapsible>
        </Section>
    </Example>;
