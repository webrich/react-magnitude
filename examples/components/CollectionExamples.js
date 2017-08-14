import React from "react";
import Example from "./Example";
import { Section, Heading, Node, Anchor, Icon, Collection, CollectionItem } from "react-magnitude";

export default () =>
    <Example title="Collection">
        <Heading weight="3" className="header">
            Basic
        </Heading>
        <Section>
            <Collection>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
            </Collection>
        </Section>
        <Heading weight="3" className="header">
            Links
        </Heading>
        <Section>
            <Collection node="div">
                <CollectionItem node="a" href="#!">
                    Alvin
                </CollectionItem>
                <CollectionItem node="a" href="#!" active>
                    Alvin
                </CollectionItem>
                <CollectionItem node="a" href="#!">
                    Alvin
                </CollectionItem>
                <CollectionItem node="a" href="#!">
                    Alvin
                </CollectionItem>
            </Collection>
        </Section>
        <Heading weight="3" className="header">
            Headers
        </Heading>
        <Section>
            <Collection withHeader>
                <CollectionItem header>
                    <Heading weight="4">First Names</Heading>
                </CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
            </Collection>
        </Section>
        <Heading weight="3" className="header">
            Secondary content
        </Heading>
        <Section>
            <Collection withHeader>
                <CollectionItem header>
                    <Heading weight="4">First Names</Heading>
                </CollectionItem>
                <CollectionItem>
                    Alvin
                    <Anchor href="#!" className="secondary-content">
                        <Icon>send</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem>
                    Alvin
                    <Anchor href="#!" className="secondary-content">
                        <Icon>send</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem>
                    Alvin
                    <Anchor href="#!" className="secondary-content">
                        <Icon>send</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem>
                    Alvin
                    <Anchor href="#!" className="secondary-content">
                        <Icon>send</Icon>
                    </Anchor>
                </CollectionItem>
            </Collection>
        </Section>
        <Heading weight="3" className="header">
            Avatar content
        </Heading>
        <Section>
            <Collection>
                <CollectionItem avatar>
                    <Icon circle>folder</Icon>
                    <Node node="span" className="title">
                        Title
                    </Node>
                    <Node node="p">
                        First Line
                        <Node node="br" /> Second Line
                    </Node>
                    <Anchor href="#!" className="secondary-content">
                        <Icon>grade</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem avatar>
                    <Icon circle color="orange">
                        videocam
                    </Icon>
                    <Node node="span" className="title">
                        Title
                    </Node>
                    <Node node="p">
                        First Line
                        <Node node="br" /> Second Line
                    </Node>
                    <Anchor href="#!" className="secondary-content">
                        <Icon>grade</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem avatar>
                    <Icon circle color="green">
                        insert_chart
                    </Icon>
                    <Node node="span" className="title">
                        Title
                    </Node>
                    <Node node="p">
                        First Line
                        <Node node="br" /> Second Line
                    </Node>
                    <Anchor href="#!" className="secondary-content">
                        <Icon>grade</Icon>
                    </Anchor>
                </CollectionItem>
                <CollectionItem avatar>
                    <Icon circle color="red">
                        play_arrow
                    </Icon>
                    <Node node="span" className="title">
                        Title
                    </Node>
                    <Node node="p">
                        First Line
                        <Node node="br" /> Second Line
                    </Node>
                    <Anchor href="#!" className="secondary-content">
                        <Icon>grade</Icon>
                    </Anchor>
                </CollectionItem>
            </Collection>
        </Section>
    </Example>;
