import React from "react";
import Example from "./Example";
import { Section, Heading, Badge, Collection, CollectionItem } from "react-magnitude";

export default () =>
    <Example title="Badges">
        <Heading weight="3" className="header">
            Basic
        </Heading>
        <Section>
            <Collection node="div">
                <CollectionItem node="a" href="#!">
                    Alvin
                    <Badge>1</Badge>
                </CollectionItem>
                <CollectionItem node="a" href="#!">
                    Alvin
                    <Badge caption="new">4</Badge>
                </CollectionItem>
                <CollectionItem node="a" href="#!">
                    Custom Badge Captions
                    <Badge caption="custom caption">4</Badge>
                </CollectionItem>
            </Collection>
        </Section>
        <Heading weight="3" className="header">
            Colors
        </Heading>
        <Section>
            <Collection node="div">
                <CollectionItem node="a" href="#!">
                    Red
                    <Badge color="red" caption="red">
                        4
                    </Badge>
                </CollectionItem>
                <CollectionItem node="a" href="#!">
                    Blue
                    <Badge color="blue" caption="blue">
                        4
                    </Badge>
                </CollectionItem>
            </Collection>
        </Section>
    </Example>;
