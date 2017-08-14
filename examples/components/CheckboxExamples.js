import React from "react";
import Example from "./Example";
import { Row, Section, Heading, Checkbox } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Checkboxes - Stacked
        </Heading>
        <Section>
            <form>
                <Checkbox id="test1" label="Red" />
                <Checkbox id="test2" label="Yellow" checked />
                <Checkbox id="test3" label="Filled In" filled />
                <Checkbox id="test4" label="Green" checked disabled />
                <Checkbox id="test5" label="Brown" disabled />
            </form>
        </Section>
        <Heading weight="3" className="header">
            Checkboxes - Inline
        </Heading>
        <Section>
            <form>
                <Row>
                    <Checkbox size="s6 l2" id="test6" label="Red" />
                    <Checkbox size="s6 l2" id="test7" label="Yellow" checked />
                    <Checkbox size="s6 l2" id="test8" label="Filled In" filled />
                    <Checkbox size="s6 l2" id="test9" label="Green" checked disabled />
                    <Checkbox size="s6 l2" id="test10" label="Brown" disabled />
                </Row>
            </form>
        </Section>
    </Example>;
