import {useContext} from "react";
import {DataContext} from "../hoc/DataContext";

export function useData(){
    return useContext(DataContext)
}