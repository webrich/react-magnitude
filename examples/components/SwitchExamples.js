import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Switch } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Switch - Stacked
        </Heading>
        <Section>
            <form>
                <Switch id="test1">
                    <label>Off</label>
                    <label>On</label>
                </Switch>
                <Switch id="test2" checked>
                    <label>Off</label>
                    <label>On</label>
                </Switch>
                <Switch id="test3" disabled>
                    <label>Off</label>
                    <label>On</label>
                </Switch>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Switch - Inline
        </Heading>
        <Section>
            <form>
                <Row>
                    <Switch id="test4" size="s4">
                        <label>Off</label>
                        <label>On</label>
                    </Switch>
                    <Switch id="test5" checked size="s4">
                        <label>Off</label>
                        <label>On</label>
                    </Switch>
                    <Switch id="test6" disabled size="s4">
                        <label>Off</label>
                        <label>On</label>
                    </Switch>
                </Row>
            </form>
        </Section>
    </Example>;
