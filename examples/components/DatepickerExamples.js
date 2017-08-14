import React from "react";
import Example from "./Example";
import { Row, Section, Heading, Datepicker, Timepicker } from "react-magnitude";

export default () =>
    <Example title="Forms">
        <Heading weight="3" className="header">
            Date Picker
        </Heading>
        <Section>
            <form>
                <Row>
                    <Datepicker
                        size="s12"
                        id="datepicker"
                        name="datepicker"
                        label="Birthdate"
                        options={{
                            selectMonths: true,
                            selectYears: 15,
                            today: "Today",
                            clear: "Clear",
                            close: "Ok",
                            closeOnSelect: false
                        }}
                    />
                </Row>
            </form>
        </Section>
        <Heading weight="3" className="header">
            Time Picker
        </Heading>
        <Section>
            <form>
                <Row>
                    <Timepicker
                        size="s12"
                        id="timepicker"
                        name="timepicker"
                        label="Lunchtime"
                        options={{
                            default: "now", // Set default time: 'now', '1:30AM', '16:30'
                            fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
                            twelvehour: true, // Use AM/PM or 24-hour format
                            donetext: "OK", // text for done-button
                            cleartext: "Clear", // text for clear-button
                            canceltext: "Cancel", // Text for cancel-button
                            autoclose: false, // automatic close timepicker
                            ampmclickable: true, // make AM PM clickable
                            aftershow: function() {} //Function for after opening timepicker
                        }}
                    />
                </Row>
            </form>
        </Section>
    </Example>;
