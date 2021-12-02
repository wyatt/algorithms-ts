import { SortAlgorithm } from "../common";
import swap from "../swap";

const quickSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    // Your code here
    const outputList = [...items]
    if (items.length < 2) return outputList;

    return quickSortRecurse(outputList, 0 , items.length - 1);
}

const quickSortRecurse = <T>(arr: T[], leftPointer: number, rightPointer: number) => {
    if (leftPointer < rightPointer) {
        const pi = partition(arr, leftPointer, rightPointer)
        quickSortRecurse(arr, leftPointer, pi - 1)
        quickSortRecurse(arr, pi + 1, rightPointer)
    }
    return arr;
}

function partition<T>(array: T[], lPointer: number, rPointer: number) {
    const pivot = array[rPointer];

    let i = lPointer - 1;

    for (let j = lPointer; j < rPointer; j++) {
        if (array[j] < pivot) {
            i += 1;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, rPointer);

    return i + 1;
}

export default quickSort;
