import React from "react";

import {useDispatch} from "react-redux";
import {putData} from "../actions";

export const Button = (props) => {
    const{textButton} = props

    const dispatch = useDispatch();
    const onClick = () => dispatch(putData({}))

    return(
        <button onClick={onClick}>{textButton}</button>
    )
}