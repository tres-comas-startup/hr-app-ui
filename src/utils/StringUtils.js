function isString(value) {
    return typeof value === 'string';
}

function isEmpty(value) {
    if (!isString(value)) {
        throw new Error('Given param is not a string type');
    }

    return value.length === 0 || value.trim() === '';
}

export {
    isEmpty,
    isString
}