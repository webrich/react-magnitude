import React from "react";
import Example from "./Example";
import { Section, Heading, Tags, Tag } from "react-magnitude";

export default () =>
    <Example title="Tags">
        <Heading weight="3" className="header">
            Tag
        </Heading>
        <Section>
            <Tag src="http://materializecss.com/images/yuna.jpg" alt="Contact Person">
                John Doe
            </Tag>
            <Tag dismissable>Dismissable Tag</Tag>
        </Section>
        <Heading weight="3" className="header">
            Tags
        </Heading>
        <Section>
            <Tags
                placeholder="Enter a tag"
                onAdd={function(e, tag) {
                    console.log("Tag Added");
                    console.log(tag);
                }}
                onRemove={function(e, tag) {
                    console.log("Tag Removed");
                    console.log(tag);
                }}
                onSelect={function(e, tag) {
                    console.log("Tag Selected");
                    console.log(tag);
                }}
            />
        </Section>
        <Heading weight="3" className="header">
            Tags - Initial Data
        </Heading>
        <Section>
            <Tags>
                <Tag id="1">Apple</Tag>
                <Tag id="2">Microsoft</Tag>
                <Tag id="3">Google</Tag>
            </Tags>
        </Section>
        <Heading weight="3" className="header">
            Tags - Autocomplete
        </Heading>
        <Section>
            <Tags
                data={{
                    Apple: null,
                    Microsoft: null,
                    Google: null
                }}
                limit={Infinity}
                minLength={1}
            />
        </Section>
    </Example>;
