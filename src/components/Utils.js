/**
 * Prefix the provided vlaues.
 * 
 * @param {string} token - Prefix token.
 * @param {string | array} values - Values.
 */
export const prefix = (token, values) => {
    let results = [];
    if (token && typeof values === 'string' && values.trim().length > 0) {
        values = values.replace(/\s\s/g, ' ').split(' ');
        values.forEach(function(value) {
            if (typeof token === 'function') {
                results.push(token(value));
            } else if (typeof token === 'string' && token.trim().length > 0) {
                results.push(token + value);
            } else {
                throw new Error('This type of token is not supported.');
            }
        });
    }
    return results;
}