// cadena, valorABuscar: boolean

import { isString } from "@src/check";

export const includes = (stringValue: string, value: string): boolean => {
  if (isString(stringValue) && isString(value)) {
    const normalizedStringValue = stringValue.trim().toLowerCase();
    const normalizedValue = value.trim().toLocaleLowerCase();
    return normalizedStringValue.includes(normalizedValue);
  }
  return false;
};
