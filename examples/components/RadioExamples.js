import React from "react";
import Example from "./Example";
import { Row, Section, Heading, Radio } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Radio Buttons - Stacked
        </Heading>
        <Section>
            <form>
                <Radio name="group1" id="test1" label="Red" />
                <Radio name="group1" id="test2" label="Yellow" checked />
                <Radio name="group1" id="test3" label="Green" withgap />
                <Radio name="group1" id="test4" label="Brown" disabled />
            </form>
        </Section>
        <Heading weight="3" className="header">
            Radio Buttons - Inline
        </Heading>
        <Section>
            <form>
                <Row>
                    <Radio size="s6 l3" name="group2" id="test5" label="Red" />
                    <Radio size="s6 l3" name="group2" id="test6" label="Yellow" />
                    <Radio size="s6 l3" name="group2" id="test7" label="Green" withgap />
                    <Radio size="s6 l3" name="group2" id="test8" label="Brown" disabled />
                </Row>
            </form>
        </Section>
    </Example>;
