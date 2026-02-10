// var removeDuplicates = function (nums) {
//   let k = 0;
//   const n = nums.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (nums[i] === nums[k]) {
//       count++;
//     }
//     if (nums[k] != nums[i]) {
//       if (count >= 2) {
//         nums[k + 1] = nums[k];
//         k += 2;
//       } else {
//         k++;
//       }
//       nums[k] = nums[i];
//       count = 0;
//     }
//   }
//   return k + 1;
// };

// const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// const k = removeDuplicates(nums);
// console.log("outside of func : k ", k);
// console.log(nums);

/*
  - Why the above solution is not suitable
    - Unstable comparison source
      - You compare nums[i] with nums[k]
      - k is a write pointer, its value keeps changing
      - This breaks correct duplicate detection
      - You should never compare against a pointer that mutates for writes
    - Incorrect duplicate counting
      - count is increased based on a moving target (nums[k])
      - count does NOT reliably represent occurrences of the same value
      - Leads to incorrect decisions for when to allow or skip elements
    - Overcomplicated state management
      - Uses i, k, and count
      - Multiple branches update k differently
      - More state = higher bug probability
      - The optimal solution needs only two pointers, no counters.
    - Constraint is implicit, not enforced
      - The rule “at most two duplicates” is buried inside logic
      - Hard to prove correctness
      - Hard for interviewers to verify mentally
      - Best solution encodes the rule directly: nums[i] !== nums[k - 2]
    - Risk of overwriting valid data
      - nums[k + 1] = nums[k];
      - k += 2;
      - Writes before confirming correctness
      - Can overwrite future valid values
      - Fragile and unsafe
    - Poor scalability to edge cases
      - Special handling needed for:
      - First group
      - Transition between numbers
      - Edge cases increase exponentially with complexity
      - Best solution handles all cases uniformly.
    - Not leveraging sorted-array invariant
      - Sorted array guarantees duplicates are adjacent
      - Your solution treats it like an unsorted problem
      - Misses the strongest optimization opportunity
    - Hard to reason & explain
      - Requires line-by-line simulation to understand
      - Interviewers prefer invariant-based logic
      - Hard to justify correctness formally

  - Final verdict :-
    - Your code :-
      - Tries to solve the problem
      - Violates clean two-pointer principles
      - Is fragile and hard to maintain
      - Sends a weak interview signal
    - One-line summary
      - Your solution manages duplicates procedurally, while the correct solution encodes the constraint declaratively using pointer invariants.
*/

// Best solution

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const k = removeDuplicates(nums);
console.log("outside of func : k ", k);
console.log(nums);
