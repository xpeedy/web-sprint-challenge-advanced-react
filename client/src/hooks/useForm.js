// write your custom hook here to control your checkout form

import { useState } from "react";

const useForm = (key, initialValue) => {

    const[value, setValue] = useState(() => {
        const message = window.localStorage.getItem(key)
        return message ? JSON.parse(message) : initialValue;
    })

    const setNewValue = newValue => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }
    return[value,setNewValue]
}

export default useForm;