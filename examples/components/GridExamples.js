import React from "react";
import Example from "./Example";
import { Row, Column, Divider, Section } from "react-magnitude";

export default () =>
    <Example title="Grid">
        <Section>
            <Row>
                <Column size="s1">1</Column>
                <Column size="s1">2</Column>
                <Column size="s1">3</Column>
                <Column size="s1">4</Column>
                <Column size="s1">5</Column>
                <Column size="s1">6</Column>
                <Column size="s1">7</Column>
                <Column size="s1">8</Column>
                <Column size="s1">9</Column>
                <Column size="s1">10</Column>
                <Column size="s1">11</Column>
                <Column size="s1">12</Column>
            </Row>
        </Section>
        <Divider />
        <Section>
            <Row>
                <Column size="s12">This div is 12-columns wide on all screen sizes</Column>
            </Row>
        </Section>
        <Divider />
        <Section>
            <Row>
                <Column size="s6">6-columns (one-half)</Column>
                <Column size="s6">6-columns (one-half)</Column>
            </Row>
        </Section>
        <Divider />
        <Section>
            <Row>
                <Column size="s6" offset="s6">
                    6-columns (offset-by-6)
                </Column>
            </Row>
        </Section>
        <Divider />
        <Section>
            <Row>
                <Column size="s7" push="s5">
                    This div is 7-columns wide on pushed to the right by 5-columns.
                </Column>
                <Column size="s5" pull="s7">
                    5-columns wide pulled to the left by 7-columns.
                </Column>
            </Row>
        </Section>
        <Divider />
        <Section>
            <Row node="h5">&lt;h5&gt; node as a Row</Row>
        </Section>
    </Example>;
