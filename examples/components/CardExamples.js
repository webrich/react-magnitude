import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Divider, Card, Paragraph, Anchor, Image, Button, Icon } from "react-magnitude";

export default () =>
    <Example title="Cards">
        <Heading weight="3" className="header">
            Basic Card
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m8 l6">
                    <Card color="blue-grey darken-1" textColor="white">
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Image Card
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m9 l7">
                    <Card>
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Card.Title>Card Title</Card.Title>
                        </Card.Image>
                        <Card.Content>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            FABs in Card
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m9 l7">
                    <Card>
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Card.Title>Card Title</Card.Title>
                            <Button className="halfway-fab" waves="light" color="red" floating>
                                <Icon>add</Icon>
                            </Button>
                        </Card.Image>
                        <Card.Content>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
            <Row>
                <Column size="s12 m9 l7">
                    <Card>
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Button className="halfway-fab" waves="light" color="red" floating size="large">
                                <Icon>add</Icon>
                            </Button>
                        </Card.Image>
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Horizontal Card
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m9 l7">
                    <Card horizontal>
                        <Card.Image>
                            <Image src="https://lorempixel.com/100/190/nature/6" />
                        </Card.Image>
                        <Card.Stacked>
                            <Card.Content>
                                <Paragraph>I am a very simple card. I am good at containing small bits of information.</Paragraph>
                            </Card.Content>
                            <Card.Action>
                                <Anchor href="javascript:void(0);">This is a link</Anchor>
                            </Card.Action>
                        </Card.Stacked>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Card Reveal
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m9 l7">
                    <Card>
                        <Card.Image waves="light">
                            <Image className="activator" src="http://materializecss.com/images/office.jpg" />
                        </Card.Image>
                        <Card.Content>
                            <Card.Title className="activator" textColor="grey darken-4">
                                Card Title
                                <Icon placement="right">more_vert</Icon>
                            </Card.Title>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Content>
                        <Card.Reveal>
                            <Card.Title className="activator" textColor="grey darken-4">
                                Card Title
                                <Icon placement="right">close</Icon>
                            </Card.Title>
                            <Paragraph>Here is some more information about this product that is only revealed once clicked on.</Paragraph>
                        </Card.Reveal>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Card Reveal - Sticky Actions
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m9 l7">
                    <Card stickyAction>
                        <Card.Image waves="light">
                            <Image className="activator" src="http://materializecss.com/images/office.jpg" />
                        </Card.Image>
                        <Card.Content>
                            <Card.Title className="activator" textColor="grey darken-4">
                                Card Title
                                <Icon placement="right">more_vert</Icon>
                            </Card.Title>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Content>
                        <Card.Reveal>
                            <Card.Title className="activator" textColor="grey darken-4">
                                Card Title
                                <Icon placement="right">close</Icon>
                            </Card.Title>
                            <Paragraph>Here is some more information about this product that is only revealed once clicked on.</Paragraph>
                        </Card.Reveal>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Card Sizes
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m8 l6">
                    <Heading weight="4">Small</Heading>
                    <Card size="small">
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Card.Title>Card Title</Card.Title>
                        </Card.Image>
                        <Card.Content>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
            <Row>
                <Column size="s12 m9 l7">
                    <Heading weight="4">Medium</Heading>
                    <Card size="medium">
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Card.Title>Card Title</Card.Title>
                        </Card.Image>
                        <Card.Content>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
            <Row>
                <Column size="s12 m10 l8">
                    <Heading weight="4">Large</Heading>
                    <Card size="large">
                        <Card.Image>
                            <Image src="http://materializecss.com/images/sample-1.jpg" />
                            <Card.Title>Card Title</Card.Title>
                        </Card.Image>
                        <Card.Content>
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively.
                            </Paragraph>
                        </Card.Content>
                        <Card.Action>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                            <Anchor href="javascript:void(0);">This is a link</Anchor>
                        </Card.Action>
                    </Card>
                </Column>
            </Row>
        </Section>
        <Divider />
        <Heading weight="3" className="header">
            Card Panel
        </Heading>
        <Section>
            <Row>
                <Column size="s12 m8 l6">
                    <Card>
                        <Card.Panel color="teal" textColor="white">
                            <Paragraph>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
                                markup to use effectively. I am similar to what is called a panel in other frameworks.
                            </Paragraph>
                        </Card.Panel>
                    </Card>
                </Column>
            </Row>
        </Section>
    </Example>;
