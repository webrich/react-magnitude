import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Button, Paragraph, Modal, Icon } from "react-magnitude";

export default () =>
    <Example title="Modals">
        <Section>
            <Button waves="light" id="modal-target-1">
                Modal
            </Button>
            {"  "}
            <Button waves="light" id="modal-target-2">
                Modal With Fixed Footer
            </Button>
            {"  "}
            <Button waves="light" id="modal-target-3">
                Modal Bottom Sheet Style
            </Button>
            <Modal
                target="#modal-target-1"
                dismissible={true}
                opacity={0.5}
                inDuration={300}
                outDuration={200}
                startingTop={4}
                endingTop={10}
                ready={function(modal, trigger) {
                    console.log("ready");
                }}
                complete={function() {
                    console.log("closed");
                }}
            >
                <Modal.Content>
                    <Heading weight="4">Modal Header</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                </Modal.Content>
                <Modal.Footer>
                    <Button waves="red" flat className="modal-action modal-close">
                        Disagree
                    </Button>
                    <Button waves="red" flat className="modal-action modal-close">
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                target="#modal-target-2"
                dismissible={true}
                opacity={0.5}
                inDuration={300}
                outDuration={200}
                startingTop={4}
                endingTop={10}
                fixedFooter
                ready={function(modal, trigger) {
                    console.log("ready");
                }}
                complete={function() {
                    console.log("closed");
                }}
            >
                <Modal.Content>
                    <Heading weight="4">Modal Header</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                </Modal.Content>
                <Modal.Footer>
                    <Button waves="red" flat className="modal-action modal-close">
                        Disagree
                    </Button>
                    <Button waves="red" flat className="modal-action modal-close">
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                target="#modal-target-3"
                dismissible={true}
                opacity={0.5}
                inDuration={300}
                outDuration={200}
                startingTop={4}
                endingTop={10}
                bottomSheet
                ready={function(modal, trigger) {
                    console.log("ready");
                }}
                complete={function() {
                    console.log("closed");
                }}
            >
                <Modal.Content>
                    <Heading weight="4">Modal Header</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                </Modal.Content>
                <Modal.Footer>
                    <Button waves="red" flat className="modal-action modal-close">
                        Disagree
                    </Button>
                    <Button waves="red" flat className="modal-action modal-close">
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
        </Section>
    </Example>;
