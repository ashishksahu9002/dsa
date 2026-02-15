// JavaScript solution
var longestMountain = function(arr) {
    const n = arr.length;
    if(n < 3) return 0;
    let longest = 0;

    for (let i = 1; i < n - 1; i++) {
        // Check if arr[i] is a peak
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i - 1;
            let right = i + 1;
            
            // Expand leftwards
            while(left > 0 && arr[left] > arr[left - 1]) {
                left--;
            }
            
            // Expand rightwards
            while(right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }
            
            longest = Math.max(longest, right - left + 1);
        }
    }
    return longest;
};

// For testing purposes
console.log(longestMountain([2,1,4,7,3,2,5])); // Expected output: 5
console.log(longestMountain([2,2,2])); // Expected output: 0
console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0])); // Expected output: 11
