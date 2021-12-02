import { SortAlgorithm } from "../common";
import swap from "../swap";

const insertionSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    // Your code here
    const outputList = [...items]
    for (let i = 1; i < outputList.length; i++) {
        const itemToPlace = outputList[i]
        while (i > 0) {
            const lower = i - 1
            const upper = i
            if (outputList[lower] > itemToPlace) {
                swap(outputList, lower, upper)
            } else {
                i = upper;
                break;
            }
            i -= 1;
        }
        outputList[i] = itemToPlace
    }

    return outputList;
}

export default insertionSort;
