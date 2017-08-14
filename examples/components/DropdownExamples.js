import React from "react";
import Example from "./Example";
import { Section, Button, Dropdown, Icon } from "react-magnitude";

export default () =>
    <Example title="Dropdown">
        <Section>
            <form>
                <Button waves="light" id="dropdown-target-1">
                    Drop Me !
                </Button>
                <Dropdown
                    target="#dropdown-target-1"
                    inDuration={300}
                    outDuration={225}
                    constrainWidth={true}
                    hover={false}
                    gutter={0}
                    belowOrigin={true}
                    alignment="left"
                    stopPropagation={false}
                >
                    <Dropdown.Item href="#dropdown">one</Dropdown.Item>
                    <Dropdown.Item href="#dropdown">two</Dropdown.Item>
                    <Dropdown.Item className="divider" />
                    <Dropdown.Item href="#dropdown">three</Dropdown.Item>
                    <Dropdown.Item href="#dropdown">
                        <Icon>view_module</Icon>four
                    </Dropdown.Item>
                    <Dropdown.Item href="#dropdown">
                        <Icon>cloud</Icon>five
                    </Dropdown.Item>
                </Dropdown>
            </form>
        </Section>
    </Example>;
