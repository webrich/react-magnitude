import React from "react";
import Example from "./Example";
import { Section, Heading, Breadcrumbs, Breadcrumb } from "react-magnitude";

export default () =>
    <Example title="Breadcrumbs">
        <Heading weight="3" className="header">
            Basic
        </Heading>
        <Section>
            <Breadcrumbs>
                <Breadcrumb href="javascript:void(0);">First</Breadcrumb>
                <Breadcrumb href="javascript:void(0);">Second</Breadcrumb>
                <Breadcrumb href="javascript:void(0);">Thrid</Breadcrumb>
            </Breadcrumbs>
        </Section>
    </Example>;
