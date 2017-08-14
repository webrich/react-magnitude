import React from "react";
import Example from "./Example";
import { Row, Column, Section, Heading, Thumbnail, Slider, Slide, Caption, Image } from "react-magnitude";

export default () =>
    <Example title="Media">
        <Heading weight="3" className="header">
            Thumbnails
        </Heading>
        <Section>
            <Row>
                <Column size="s12 l6">
                    <Thumbnail src="http://materializecss.com/images/sample-1.jpg" />
                </Column>
                <Column size="s12 l6">
                    <Thumbnail data-caption="A beautiful lake surrounded by mountains." src="http://materializecss.com/images/sample-1.jpg" />
                </Column>
            </Row>
        </Section>
        <Heading weight="3" className="header">
            Slider
        </Heading>
        <Section>
            <Slider>
                <Slide>
                    <Image src="https://lorempixel.com/580/250/nature/1" />
                    <Caption align="center">
                        <Heading weight="3">This is our big Tagline!</Heading>
                        <Heading weight="5" className="light grey-text text-lighten-3">
                            Here is our small slogan.
                        </Heading>
                    </Caption>
                </Slide>
                <Slide>
                    <Image src="https://lorempixel.com/580/250/nature/2" />
                    <Caption align="left">
                        <Heading weight="3">This is our big Tagline!</Heading>
                        <Heading weight="5" className="light grey-text text-lighten-3">
                            Here is our small slogan.
                        </Heading>
                    </Caption>
                </Slide>
                <Slide>
                    <Image src="https://lorempixel.com/580/250/nature/3" />
                    <Caption align="right">
                        <Heading weight="3">This is our big Tagline!</Heading>
                        <Heading weight="5" className="light grey-text text-lighten-3">
                            Here is our small slogan.
                        </Heading>
                    </Caption>
                </Slide>
                <Slide>
                    <Image src="https://lorempixel.com/580/250/nature/4" />
                    <Caption align="center">
                        <Heading weight="3">This is our big Tagline!</Heading>
                        <Heading weight="5" className="light grey-text text-lighten-3">
                            Here is our small slogan.
                        </Heading>
                    </Caption>
                </Slide>
            </Slider>
        </Section>
    </Example>;
