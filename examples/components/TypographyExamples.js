import React from "react";
import Example from "./Example";
import { Section, Heading, Divider, Blockquote, FlowText } from "react-magnitude";

export default () =>
    <Example title="Typography">
        <Heading weight="3" className="header">
            Headers
        </Heading>
        <Section>
            <Heading weight="1">Heading h1</Heading>
            <Heading weight="2">Heading h2</Heading>
            <Heading weight="3">Heading h3</Heading>
            <Heading weight="4">Heading h4</Heading>
            <Heading weight="5">Heading h5</Heading>
            <Heading weight="6">Heading h6</Heading>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Blockquotes
        </Heading>
        <Section>
            <Blockquote>
                This is an example quotation that uses the blockquote tag.
                <br />Here is another line to make it look bigger.
            </Blockquote>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Flow Text
        </Heading>
        <Section>
            <FlowText>
                One common flaw we have seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize
                fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we have created a class that fluidly
                scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height
                scales to be larger on smaller screens.
            </FlowText>
            <FlowText>To see Flow Text in action, slowly resize your browser and watch the size of this text body change!</FlowText>
        </Section>
    </Example>;
