import React from "react";
import Example from "./Example";
import { Row, Section, Heading, File } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            File Input
        </Heading>
        <Section>
            <form>
                <Row>
                    <File size="s6" label="File" accept=".csv" id="file_input" validate />
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Multiple File Inputs
        </Heading>
        <Section>
            <form>
                <Row>
                    <File
                        size="s12"
                        label="Multiple Files"
                        accept=".csv"
                        id="multiple_file_input"
                        validate
                        multiple
                        placeholder="Upload one or more files"
                    />
                </Row>
            </form>
        </Section>
    </Example>;
