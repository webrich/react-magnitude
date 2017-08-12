/**
 * Prefix the provided vlaues.
 * 
 * @param {string} token - Prefix token.
 * @param {string | array} values - Values.
 */
const AllOfTypes = (props, propName, componentName, types, checkedTypes) => {
    if (types && Array.isArray(types)) {
        if (!checkedTypes) {
            checkedTypes = [];
        }
        if (props) {
            if (!Array.isArray(props)) {
                props = [props];
            }
            for (let i = 0; i < props.length; i++) {
                if (Array.isArray(props[i])) {
                    AllOfTypes(props[i], propName, componentName, types, checkedTypes);
                } else {
                    let propType = (props[i].type && props[i].type.name) || 'unknown';
                    if (types.indexOf(propType) === -1) {
                        throw new Error('Component ' + componentName + ' does not allow ' + propType + ' component as its ' + propName + ' prop.');
                    } else if (checkedTypes.indexOf(propType) === -1) {
                        checkedTypes.push(propType);
                    }
                }
            }
        }
        if (checkedTypes.length !== types.length) {
            let difference = [...types].filter(x => checkedTypes.indexOf(x) === -1);
            throw new Error('Component ' + componentName + ' must have [' + difference + '] components as one of its ' + propName + ' props.');
        }
    }
}
export default {
    AllOfTypes: AllOfTypes
}