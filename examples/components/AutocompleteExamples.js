import React from "react";
import Example from "./Example";
import { Container, Row, Column, Section, Heading, Autocomplete, Icon } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Autocomplete
        </Heading>
        <Section>
            <form>
                <Row>
                    <Autocomplete
                        size="s12"
                        id="autocomplete-input"
                        name="autocomplete-input"
                        label="Autocomplete"
                        options={{
                            data: {
                                Apple: null,
                                Microsoft: null,
                                Google: "https://placehold.it/250x250"
                            },
                            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
                            onAutocomplete: function(val) {
                                // Callback function when value is autcompleted.
                            },
                            minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
                        }}
                    >
                        <Icon prefix>textsms</Icon>
                    </Autocomplete>
                </Row>
            </form>
        </Section>
    </Example>;
