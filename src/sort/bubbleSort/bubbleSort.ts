import swap from "../swap";
const bubbleSort = <T>(items: T[]): T[] => {

    // Your code here
    const outputList = [...items]
    outputList.map(() => {
        for (const [j, jVal] of outputList.slice(0, outputList.length - 1).entries()) {
            if (jVal > outputList[j + 1]) {
                swap(outputList, j, j + 1)
            }
        }
    })


    return outputList;
}

export default bubbleSort;
