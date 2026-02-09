var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map.hasOwnProperty(need)) {
            return [map[need], i];
        }
        map[nums[i]] = i;
    }
};

/*

  - Since original indices are to be given as output
    - Map is valid 
      - maintain original index
      - order of n 
    - Two pointer approach is not valid as for this we need to sort the array which changes the element position in the array

*/