import React from 'react';
import Example from './Example';
import { Container, Row, Column, Section, Heading, Navbar, Brand, Navs, Icon, Nav, Blockquote, Button } from 'react-magnitude';

export default () => (
    <Example title='Navbar'>
        <Heading weight='3' className='header'>
            Right Aligned Links
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);'>
                    Logo
                </Brand>
                <Navs placement='right'>
                    <Nav href='javascript:void(0);'>
                        Badges
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Buttons
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Collection
                    </Nav>
                </Navs>
            </Navbar>
        </Section>
        <Heading weight='3' className='header'>
            Left Aligned Links
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);' placement='right'>
                    Logo
                </Brand>
                <Navs placement='left'>
                    <Nav href='javascript:void(0);'>
                        Badges
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Buttons
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Collection
                    </Nav>
                </Navs>
            </Navbar>
        </Section>
        <Heading weight='3' className='header'>
            Centering the logo
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);' placement='center'>
                    Logo
                </Brand>
                <Navs placement='left'>
                    <Nav href='javascript:void(0);'>
                        Badges
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Buttons
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Collection
                    </Nav>
                </Navs>
            </Navbar>
        </Section>
        <Heading weight='3' className='header'>
            Active Items
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);' placement='center'>
                    Logo
                </Brand>
                <Navs placement='left'>
                    <Nav href='javascript:void(0);'>
                        Badges
                    </Nav>
                    <Nav href='javascript:void(0);' active>
                        Buttons
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        Collection
                    </Nav>
                </Navs>
            </Navbar>
        </Section>
        <Heading weight='3' className='header'>
            Fixed Navbar
        </Heading>
        <Section>
            <Blockquote>
                Refer the site's Navbar for Fixed Navbar Example.
            </Blockquote>
        </Section>
        <Heading weight='3' className='header'>
            Icon Links
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);' placement='left'>
                    <Icon>
                        cloud
                    </Icon>Logo
                </Brand>
                <Navs placement='right'>
                    <Nav href='javascript:void(0);'>
                        <Icon>
                            search
                        </Icon>
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        <Icon>
                            view_module
                        </Icon>
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        <Icon>
                            refresh
                        </Icon>
                    </Nav>
                    <Nav href='javascript:void(0);'>
                        <Icon>
                            more_vert
                        </Icon>
                    </Nav>
                </Navs>
            </Navbar>
            <Section>
                <Navbar>
                    <Brand href='javascript:void(0);' placement='left'>
                        <Icon>
                            cloud
                        </Icon>Logo
                    </Brand>
                    <Navs placement='right'>
                        <Nav href='javascript:void(0);'>
                            <Icon placement='left'>
                                search
                            </Icon>Link with Left Icon
                        </Nav>
                        <Nav href='javascript:void(0);'>
                            <Icon placement='right'>
                                view_module
                            </Icon>Link with Right Icon
                        </Nav>
                    </Navs>
                </Navbar>
            </Section>
        </Section>
        <Heading weight='3' className='header'>
            Buttons
        </Heading>
        <Section>
            <Navbar>
                <Brand href='javascript:void(0);' placement='left'>
                    Logo
                </Brand>
                <Navs placement='right'>
                    <Button href='javascript:void(0);'>
                        Button
                    </Button>
                    <Button href='javascript:void(0);'>
                        Button
                        <Icon placement='right'>
                            cloud
                        </Icon>
                    </Button>
                    <Button href='javascript:void(0);' size='large'>
                        Large Button
                    </Button>
                </Navs>
            </Navbar>
        </Section>
    </Example>
);