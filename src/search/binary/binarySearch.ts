import { NO_MATCH } from "../common"

const binarySearch = <T>(items: T[], item: T): number => {

    let lowestPtr = 0;
    let highestPtr = items.length - 1

    while (true) {
        const middlePtr = Math.floor((lowestPtr + highestPtr) / 2)
        if (item === items[middlePtr]) {
            return middlePtr;
        } else if (lowestPtr === highestPtr) {
            return NO_MATCH;
        } else if (item < items[middlePtr]) {
            if (middlePtr === 0) return NO_MATCH
            highestPtr = middlePtr - 1
        } else if (item > items[middlePtr]) {
            if (middlePtr === items.length - 1) return NO_MATCH
            lowestPtr = middlePtr + 1
        }
    }
}

export default binarySearch;
