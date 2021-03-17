import { camelCase, startCase } from "lodash";

export const titleize = (string: string) => {
    return startCase(camelCase(string));
}