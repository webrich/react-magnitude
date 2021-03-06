import React from "react";
import Node from "./Node";
import PropTypes from "prop-types";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        let {
            placeholder,
            secondaryPlaceholder = placeholder,
            data = {},
            minLength = 1,
            limit = Infinity,
            onAdd,
            onSelect,
            onRemove,
            ...remainingProps
        } = props;
        this.onAdd = onAdd;
        this.onSelect = onSelect;
        this.onRemove = onRemove;
        this._props = remainingProps;
        this.options = {
            placeholder,
            secondaryPlaceholder,
            data: [],
            autocompleteOptions: {
                data,
                minLength,
                limit
            }
        };
        React.Children.forEach(props.children, child => {
            this.options.data.push({
                tag: child.props.children,
                image: child.props.src,
                alt: child.props.alt,
                id: child.props.id
            });
        });
    }

    render() {
        return <Node ref={ref => (this.tags = ref)} className="chips" />;
    }

    componentDidMount() {
        $(document).ready(() => {
            if (typeof $ !== "undefined" && $.fn.material_chip) {
                let $el = $(this.tags.el);
                $el.material_chip(this.options);
                $el.on("chip.add", this.onAdd);
                $el.on("chip.delete", this.onRemove);
                $el.on("chip.select", this.onSelect);
            }
        });
    }
}

Tags.propTypes = {
    children: PropTypes.node,
    placeholder: PropTypes.string,
    secondaryPlaceholder: PropTypes.string,
    data: PropTypes.object,
    limit: PropTypes.number,
    minLength: PropTypes.number,
    onAdd: PropTypes.func,
    onSelect: PropTypes.func,
    onRemove: PropTypes.func
};

export default Tags;
