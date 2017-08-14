import React from "react";
import Example from "./Example";
import { Column, Section, Heading, Divider, Tabs, Tab } from "react-magnitude";

const exampleConfig = [
    {
        id: "test1",
        content: "Test 1",
        disabled: false
    },
    {
        id: "test2",
        content: "Test 2",
        disabled: false,
        active: true
    },
    {
        id: "test3",
        content: "Disabled Tab",
        disabled: true
    },
    {
        id: "test4",
        content: "Test 4",
        disabled: false
    },
    {
        id: "test5",
        content: "Test 5",
        disabled: false
    }
];
export default () =>
    <Example title="Tabs">
        <Heading weight="3" className="header">
            Variable Width Tabs
        </Heading>
        <Section>
            <Tabs depth="1">
                {exampleConfig.map(({ id, content, disabled, active }) => {
                    return (
                        <Tab key={id} href={"#1_" + id} active={active} disabled={disabled}>
                            {content}
                        </Tab>
                    );
                })}
            </Tabs>
            <Section valign="middle">
                {exampleConfig.map(({ id, content }) => {
                    return (
                        <Column key={id} id={"1_" + id}>
                            {content}
                        </Column>
                    );
                })}
            </Section>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Fixed Width Tabs
        </Heading>
        <Section>
            <Tabs depth="1" fixedWidth>
                {exampleConfig.map(({ id, content, disabled }) => {
                    return (
                        <Tab key={id} href={"#2_" + id} disabled={disabled}>
                            {content}
                        </Tab>
                    );
                })}
            </Tabs>
            <Section valign="middle">
                {exampleConfig.map(({ id, content }) => {
                    return (
                        <Column key={id} id={"2_" + id}>
                            {content}
                        </Column>
                    );
                })}
            </Section>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Scrollable Tabs
        </Heading>
        <Section>
            <Tabs depth="1" fixedWidth>
                {exampleConfig.map(({ id, content, disabled }) => {
                    return (
                        <Tab key={id} href={"#3_" + id} disabled={disabled}>
                            {content}
                        </Tab>
                    );
                })}
                {exampleConfig.map(({ id, content, disabled }) => {
                    return (
                        <Tab key={id} href={"#4_" + id} disabled={disabled}>
                            {content}
                        </Tab>
                    );
                })}
            </Tabs>
            <Section valign="middle">
                {exampleConfig.map(({ id, content }) => {
                    return (
                        <Column key={id} id={"3_" + id}>
                            {content}
                        </Column>
                    );
                })}
                {exampleConfig.map(({ id, content }) => {
                    return (
                        <Column key={id} id={"4_" + id}>
                            {content}
                        </Column>
                    );
                })}
            </Section>
        </Section>
    </Example>;
