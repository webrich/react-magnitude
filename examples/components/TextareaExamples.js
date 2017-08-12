import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Textarea, Icon } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Textarea
        </Heading>
        <Section>
            <form>
                <Row>
                    <Textarea label="Textarea" size="s12" id="first_name" validate />
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Icon Prefixes
        </Heading>
        <Section>
            <form>
                <Row>
                    <Textarea label="Message" maxLength="10" size="s12" id="message" validate>
                        <Icon prefix>mode_edit</Icon>
                    </Textarea>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Character Counter
        </Heading>
        <Section>
            <form>
                <Row>
                    <Textarea label="Textarea" size="s12" id="textarea1" data-length="120" />
                </Row>
            </form>
        </Section>
    </Example>;
