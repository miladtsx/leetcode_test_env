export function merge_sort(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): number[] {

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    nums1.sort((a, b) => a - b)

    return nums1
}
