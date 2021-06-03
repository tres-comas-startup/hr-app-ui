import {isEmpty} from "../index";

/**
 * Creates a new ToolbarItem object
 * @param label {String}
 * @param href {String}
 * @param onClick {function}
 * @returns {Readonly<{label}>}
 * @constructor
 */
const ToolbarItem = (label, href, onClick = () => {}) => {
    const item = {label};

    if (href && !isEmpty(href)) {
        item.href = href;
    } else {
        item.onClick = onClick;
    }

    return Object.freeze(item);
};

export default ToolbarItem;