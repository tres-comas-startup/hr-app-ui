const handleInputChange = (event, sourceObject, setter) => {
    const {target} = event;
    const {name, value} = target;

    if (sourceObject.hasOwnProperty(name)) {
        setter({...sourceObject, [name]: value});
    } else {
        console.error('Unsupported propName:', name, 'for object:', sourceObject);
    }
}

export default handleInputChange;