import {ChangeEvent, useState} from "react";
import {type} from "os";
import {instanceOf} from "prop-types";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (value: string) => {

   setValue(value)
  }

  return {
    value, onChange
  }
}