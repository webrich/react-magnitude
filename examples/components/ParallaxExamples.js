import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Button, Parallax, Modal, Image, Paragraph } from "react-magnitude";

export default () =>
    <Example title="Parallax" container={false}>
        <Section>
            <Parallax height={600}>
                <Image src="http://materializecss.com/images/parallax1.jpg" />
            </Parallax>
            <Section color="white">
                <Container>
                    <Row>
                        <Heading weight="2">Parallax</Heading>
                        <Paragraph textColor="grey darken-3" color="lighten-3">
                            Parallax is an effect where the background content or image in this case, is moved at a different speed than the
                            foreground content while scrolling.
                        </Paragraph>
                        <Paragraph textColor="grey darken-3" color="lighten-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Paragraph>
                        <Paragraph textColor="grey darken-3" color="lighten-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Paragraph>
                    </Row>
                </Container>
            </Section>
            <Parallax height={600}>
                <Image src="http://materializecss.com/images/parallax2.jpg" />
            </Parallax>
        </Section>
    </Example>;
