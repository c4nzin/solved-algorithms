/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m === 0) {
    nums1.forEach((el, idx) => {
      nums1[idx] = nums2[idx];
    })
  } else {
    // 10 ms runtime
    // nums1.forEach((el, idx) => {
    //   if (idx >= m) {
    //     nums1[idx] = nums2[idx - m]
    //   }
    // });

    // 7 ms runtime
    if (n !== 0) {
      for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
      }
    }

    nums1.sort((a, b) => a - b);
  }

  console.log(nums1);
};
