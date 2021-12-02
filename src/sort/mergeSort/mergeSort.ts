import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    if (items.length === 0) return items

    return mergeSortRecurse<T>(items, 0, items.length - 1);
}

const mergeSortRecurse = <T>(inputArr: T[], leftPointer: number, rightPointer: number) => {
    if (leftPointer === rightPointer) return [inputArr[leftPointer]]

    const middle = Math.floor((leftPointer + rightPointer) / 2)

    const firstHalf: T[] = mergeSortRecurse(inputArr, leftPointer, middle)
    const secondHalf: T[] = mergeSortRecurse(inputArr, middle + 1, rightPointer)

    const outputList = []

    while (firstHalf.length > 0 && secondHalf.length > 0) {
        if (firstHalf[0] > secondHalf[0]) {
            outputList.push(secondHalf.shift())
        } else {
            outputList.push(firstHalf.shift())
        }
    }

    outputList.push(...firstHalf, ...secondHalf)

    return outputList as T[]
}

export default mergeSort;
