import React from 'react';
import Example from './Example';
import { Container, Row, Column, Section, Heading, Button, FAB, Icon } from 'react-magnitude';

export default () => (
    <Example title='Buttons'>
        <Heading weight='3' className='header'>
            Raised
        </Heading>
        <Section>
            <Button waves='light'>
                button
            </Button>
            { ' ' }
            <Button waves='light'>
                <Icon placement='left'>
                    cloud
                </Icon>
                button
            </Button>
            { ' ' }
            <Button waves='light'>
                <Icon placement='right'>
                    cloud
                </Icon>
                button
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Floating
        </Heading>
        <Section>
            <Button waves='light' color='red' floating size='large'>
                <Icon>
                    add
                </Icon>
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Pulse
        </Heading>
        <Section>
            <Row>
                <Column size='s12 m4' align='center'>
                    <Button waves='light' pulse floating>
                        <Icon>
                            menu
                        </Icon>
                    </Button>
                </Column>
                <Column size='s12 m4' align='center'>
                    <Button waves='light' pulse floating size='large'>
                        <Icon>
                            cloud
                        </Icon>
                    </Button>
                </Column>
                <Column size='s12 m4' align='center'>
                    <Button waves='light' color='cyan' pulse floating size='large'>
                        <Icon>
                            edit
                        </Icon>
                    </Button>
                </Column>
            </Row>
        </Section>
        <Heading weight='3' className='header'>
            Flat
        </Heading>
        <Section>
            <Button waves='teal' flat>
                button
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Submit
        </Heading>
        <Section>
            <Button waves='light' type='submit' name='action'>
                Submit
                <Icon placement='right'>
                    send
                </Icon>
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Large
        </Heading>
        <Section>
            <Button waves='light' size='large'>
                button
            </Button>
            { ' ' }
            <Button waves='light' size='large'>
                <Icon placement='left'>
                    cloud
                </Icon>
                button
            </Button>
            { ' ' }
            <Button waves='light' size='large'>
                <Icon placement='right'>
                    cloud
                </Icon>
                button
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Disabled
        </Heading>
        <Section>
            <Button size='large' disabled>
                button
            </Button>
            { ' ' }
            <Button disabled>
                button
            </Button>
            { ' ' }
            <Button disabled flat>
                button
            </Button>
            { ' ' }
            <Button disabled floating>
                <Icon>
                    add
                </Icon>
            </Button>
        </Section>
        <Heading weight='3' className='header'>
            Fixed Action Button (FAB)
        </Heading>
        <Section>
            <FAB>
                <Button floating size='large' color='red'>
                    <Icon size='large'>
                        mode_edit
                    </Icon>
                </Button>
                <FAB.Actions>
                    <FAB.Action color='red'>
                        <Icon>
                            insert_chart
                        </Icon>
                    </FAB.Action>
                    <FAB.Action color='yellow darken-1'>
                        <Icon>
                            format_quote
                        </Icon>
                    </FAB.Action>
                    <FAB.Action color='green'>
                        <Icon>
                            publish
                        </Icon>
                    </FAB.Action>
                    <FAB.Action color='blue'>
                        <Icon>
                            attach_file
                        </Icon>
                    </FAB.Action>
                </FAB.Actions>
            </FAB>
        </Section>
        <Heading weight='3' className='header'>
            Horizontal FAB
        </Heading>
        <Section>
            <Section style={ { position: 'relative', height: "70px" } }>
                <FAB horizontal style={ { position: 'absolute', display: 'inline-block', right: '24px' } }>
                    <Button floating size='large' color='red'>
                        <Icon size='large'>
                            mode_edit
                        </Icon>
                    </Button>
                    <FAB.Actions>
                        <FAB.Action color='red'>
                            <Icon>
                                insert_chart
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='yellow darken-1'>
                            <Icon>
                                format_quote
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='green'>
                            <Icon>
                                publish
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='blue'>
                            <Icon>
                                attach_file
                            </Icon>
                        </FAB.Action>
                    </FAB.Actions>
                </FAB>
            </Section>
        </Section>
        <Heading weight='3' className='header'>
            Click-only FAB
        </Heading>
        <Section>
            <Section style={ { position: 'relative', height: '70px' } }>
                <FAB click horizontal style={ { position: 'absolute', display: 'inline-block', right: '24px' } }>
                    <Button floating size='large' color='red'>
                        <Icon size='large'>
                            menu
                        </Icon>
                    </Button>
                    <FAB.Actions>
                        <FAB.Action color='red'>
                            <Icon>
                                insert_chart
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='yellow darken-1'>
                            <Icon>
                                format_quote
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='green'>
                            <Icon>
                                publish
                            </Icon>
                        </FAB.Action>
                        <FAB.Action color='blue'>
                            <Icon>
                                attach_file
                            </Icon>
                        </FAB.Action>
                    </FAB.Actions>
                </FAB>
            </Section>
        </Section>
        <Heading weight='3' className='header'>
            FAB to Toolbar
        </Heading>
        <Section>
            <Section style={ { position: 'relative', height: '70px' } }>
                <FAB toolbar horizontal style={ { position: 'absolute', display: 'inline-block', right: '24px' } }>
                    <Button floating size='large' color='red'>
                        <Icon size='large'>
                            menu
                        </Icon>
                    </Button>
                    <FAB.Actions>
                        <FAB.Action waves='light'>
                            <Icon>
                                insert_chart
                            </Icon>
                        </FAB.Action>
                        <FAB.Action waves='light'>
                            <Icon>
                                format_quote
                            </Icon>
                        </FAB.Action>
                        <FAB.Action waves='light'>
                            <Icon>
                                publish
                            </Icon>
                        </FAB.Action>
                        <FAB.Action waves='light'>
                            <Icon>
                                attach_file
                            </Icon>
                        </FAB.Action>
                    </FAB.Actions>
                </FAB>
            </Section>
        </Section>
    </Example>
);