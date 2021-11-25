import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {

    for (const [i, val] of items.entries()) {
        if (val === item) return i
    }
    return NO_MATCH;
}

export default linearSearch;
