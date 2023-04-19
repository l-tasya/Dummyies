import {ActionCreatorsMapObject, bindActionCreators} from "@reduxjs/toolkit"
import {useMemo} from "react";
import {useDispatch} from "react-redux";


export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [actions, dispatch])
}