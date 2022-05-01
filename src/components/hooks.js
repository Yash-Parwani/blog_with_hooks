import { useState } from "react";


// this custom hook will handle everything for us  
export function useFormInput (initialValue){
    const [value,setValue] = useState(initialValue);

    // function to handle change whenever there is any change in input i.e we set the value of 'value' on change

    function handleChange(event){
        setValue(event.target.value);
    }

    // returning like useState returns an array, we will return an object with some vallue
    return {
        value,
        // function is triggered onChange
        onChange : handleChange
    }
}