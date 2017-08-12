import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Input, Icon } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Input fields
        </Heading>
        <Section>
            <form>
                <Row>
                    <Input label="First Name" size="s6" placeholder="Placeholder" id="first_name" type="text" validate />
                    <Input label="Last Name" size="s6" id="last_name" type="text" validate />
                    <Input label="Disabled" value="I am not editable" disabled size="s12" id="disabled" type="text" validate />
                    <Input label="Password" size="s12" id="password" type="password" validate />
                    <Input label="Email" size="s12" id="email" type="email" validate />
                    <Column size="s12">
                        This is an inline input field:
                        <Input inline label="Email" error="Wrong" success="right" id="email" type="email" validate />
                    </Column>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Prefilling Text Inputs
        </Heading>
        <Section>
            <form>
                <Row>
                    <Input
                        label="First Name"
                        defaultValue="Alvin"
                        offset="s6"
                        pull="s6"
                        size="s6"
                        placeholder="Placeholder"
                        id="first_name_2"
                        type="text"
                        validate
                    />
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Icon Prefixes
        </Heading>
        <Section>
            <form>
                <Row>
                    <Input label="First Name" size="s6" id="first_name_3" type="text" validate>
                        <Icon prefix>account_circle</Icon>
                    </Input>
                    <Input label="Telephone" maxLength="10" size="s6" id="telephone" type="tel" validate>
                        <Icon prefix>phone</Icon>
                    </Input>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Custom Error or Success Messages
        </Heading>
        <Section>
            <form>
                <Row>
                    <Input inline size="s12" label="Email" error="Please Enter Valid Email." success="Valid" id="email" type="email" validate />
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Character Counter
        </Heading>
        <Section>
            <form>
                <Row>
                    <Input size="s12" label="Input Text" id="input_text" data-length="10" />
                </Row>
            </form>
        </Section>
    </Example>;
