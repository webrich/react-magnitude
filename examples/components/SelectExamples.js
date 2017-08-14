import React from "react";
import Example from "./Example";
import { Row, Section, Heading, Select } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Select
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Select" defaultValue="">
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Multiple Select
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Multiple Select" defaultValue="" multiple>
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Options Group
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Optgroups" defaultValue="">
                        <optgroup label="team 1">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </optgroup>
                        <optgroup label="team 2">
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </optgroup>
                    </Select>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Images in Select
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Images in Select" defaultValue="" className="icons">
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/sample-1.jpg" className="circle">
                            example 1
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/office.jpg" className="circle">
                            example 2
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/yuna.jpg" className="circle">
                            example 3
                        </option>
                    </Select>
                    <Select size="s12 m9 l6" label="Images in Select" defaultValue="" className="icons">
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/sample-1.jpg" className="left circle">
                            example 1
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/office.jpg" className="left circle">
                            example 2
                        </option>
                        <option value="" data-icon="http://materializecss.com/images/yuna.jpg" className="left circle">
                            example 3
                        </option>
                    </Select>
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Browser Default
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Browser Default" className="browser-default" defaultValue="">
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </Row>
            </form>
        </Section>

        <Heading weight="3" className="header">
            Disabled Select
        </Heading>
        <Section>
            <form>
                <Row>
                    <Select size="s12 m9 l6" label="Matertialize Select" defaultValue="" disabled>
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                    <Select size="s12 m9 l6" label="Browser Default" defaultValue="" disabled className="browser-default">
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </Select>
                </Row>
            </form>
        </Section>
    </Example>;
