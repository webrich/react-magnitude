import React from 'react';
import Example from './Example';
import { Container, Row, Column, Section, Heading, Button, Tooltip, Badge, Icon, Node, Divider } from 'react-magnitude';

export default () => (
    <Example title='Tooltips'>
        <Heading weight='3' className='header'>
            Text
        </Heading>
        <Section>
            <Row>
                <Column size='s3' align='center'>
                    <Tooltip target='#bottom-tooltip-target-1' position='bottom'>
                        I am Tooltip
                    </Tooltip>
                    <Button waves='light' id='bottom-tooltip-target-1'>
                        Bottom
                    </Button>
                </Column>
                <Column size='s3' align='center'>
                    <Tooltip target='#top-tooltip-target-1' position='top'>
                        I am a tooltip
                    </Tooltip>
                    <Button waves='light' id='top-tooltip-target-1'>
                        Top
                    </Button>
                </Column>
                <Column size='s3' align='center'>
                    <Tooltip target='#left-tooltip-target-1' position='left'>
                        I am Tooltip
                    </Tooltip>
                    <Button waves='light' id='left-tooltip-target-1'>
                        Left
                    </Button>
                </Column>
                <Column size='s3' align='center'>
                    <Tooltip target='#right-tooltip-target-1' position='right'>
                        I am a tooltip
                    </Tooltip>
                    <Button waves='light' id='right-tooltip-target-1'>
                        Right
                    </Button>
                </Column>
            </Row>
        </Section>
        <Heading weight='3' className='header'>
            HTML
        </Heading>
        <Section>
            <Column size='s3' align='center'>
                <Tooltip target='#bottom-tooltip-target-2' position='bottom' html>
                    <Node textColor='teal'>
                        I am an HTML tooltip
                    </Node>
                    <Divider/>
                </Tooltip>
                <Button waves='light' id='bottom-tooltip-target-2'>
                    Bottom
                </Button>
            </Column>
            <Column size='s3' align='center'>
                <Tooltip target='#top-tooltip-target-2' position='top' html>
                    <Badge color='red' caption='red'>
                        4
                    </Badge>I am an HTML tooltip
                </Tooltip>
                <Button waves='light' id='top-tooltip-target-2'>
                    Top
                </Button>
            </Column>
            <Column size='s3' align='center'>
                <Tooltip target='#left-tooltip-target-2' position='left' html>
                    <Node textColor='teal'>
                        I am an HTML tooltip
                    </Node>
                </Tooltip>
                <Button waves='light' id='left-tooltip-target-2'>
                    Left
                </Button>
            </Column>
            <Column size='s3' align='center'>
                <Tooltip target='#right-tooltip-target-2' position='right' html>
                    <Icon placement='right'>
                        send
                    </Icon>I am an HTML tooltip
                </Tooltip>
                <Button waves='light' id='right-tooltip-target-2'>
                    Right
                </Button>
            </Column>
        </Section>
    </Example>
);