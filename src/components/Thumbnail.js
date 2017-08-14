import Image from "./Image";
import cn from "classnames";

class Thumbnail extends Image {
    constructor(props) {
        super(props);
        let { width = "256", height, className, ...remainingProps } = props;
        this._props = {
            width,
            height,
            className: cn("materialboxed", className),
            ...remainingProps
        };
    }
    componentDidMount() {
        if (typeof $ !== "undefined" && $.fn.materialbox) {
            $(this.component.el).materialbox();
        }
    }
}

export default Thumbnail;
