export class Utils {

    /**
     * @description
     * Divide the range of 16 characters into multiple ranges
     * based on the index(JOB_COMPLETION_INDEX) and total(spec.parallelism).
     * 
     * @param index 
     * @param total 
     * @returns [start, end]
     */
    static getPrefixRange(index: number, total: number): string[] {
        if (index >= total || index < 0) {
            throw new Error(`Index out of bounds. Index must be between 0 and ${total - 1}.`);
        }
        const rangeSize = 16 / total;
        const start = Math.floor(index * rangeSize).toString(16).toLowerCase();
        const end = (Math.floor((index + 1) * rangeSize) - 1).toString(16).toLowerCase();
        return [start, end];
    }
}

