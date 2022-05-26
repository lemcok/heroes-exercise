import { FormElement } from "@nextui-org/react";
import { ChangeEvent, useState } from "react"

export const useForm = <T extends object>( initState:T ) => {
// export function useForm<T>(initState: T){ //OTRA FORMA

    const [values, setValues] = useState(initState)

    const handleInputChange = ({ target }:ChangeEvent<FormElement>) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }
    
    const reset = () => {
        setValues( initState );
    }

    return {
       values,
       handleInputChange,
       reset,
       ...values
    };
}
