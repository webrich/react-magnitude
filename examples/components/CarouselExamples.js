import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Button, Image, Carousel, Paragraph } from "react-magnitude";

export default () =>
    <Example title="Carousel">
        <Heading weight="3" className="header">
            Basic
        </Heading>
        <Section>
            <Carousel>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/250/250/nature/1" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/250/250/nature/2" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/250/250/nature/3" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/250/250/nature/4" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/250/250/nature/5" />
                </Carousel.Item>
            </Carousel>
        </Section>
        <Heading weight="3" className="header">
            Full Width Slider
        </Heading>
        <Section>
            <Carousel slider fullWidth indicators>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/800/400/food/1" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/800/400/food/2" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/800/400/food/3" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/800/400/food/4" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://lorempixel.com/800/400/food/5" />
                </Carousel.Item>
            </Carousel>
        </Section>
        <Heading weight="3" className="header">
            Special Options
        </Heading>
        <Section>
            <Carousel slider indicators fullWidth style={{ height: "400px" }}>
                <Carousel.Item fixed>
                    <Button waves="light" color="white" textColor="grey darken-2">
                        button
                    </Button>
                </Carousel.Item>
                <Carousel.Item color="red" textColor="white" href="#one!">
                    <Heading weight="2">First Panel</Heading>
                    <Paragraph>This is your First panel.</Paragraph>
                </Carousel.Item>
                <Carousel.Item color="amber" textColor="white" href="#two!">
                    <Heading weight="2">Second Panel</Heading>
                    <Paragraph>This is your Second panel.</Paragraph>
                </Carousel.Item>
                <Carousel.Item color="green" textColor="white" href="#three!">
                    <Heading weight="2">Third Panel</Heading>
                    <Paragraph>This is your Third panel.</Paragraph>
                </Carousel.Item>
                <Carousel.Item color="blue" textColor="white" href="#four!">
                    <Heading weight="2">Fourth Panel</Heading>
                    <Paragraph>This is your Fourth panel.</Paragraph>
                </Carousel.Item>
            </Carousel>
        </Section>
    </Example>;
