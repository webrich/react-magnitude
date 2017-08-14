import React from "react";
import Node from "./Node";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this._props = props;
    }
    render() {
        return <Node ref={ref => (this.component = ref)} node="img" {...this._props} />;
    }
}

export default Image;
