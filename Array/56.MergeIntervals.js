var merge = function(intervals) {
    if (!intervals || intervals.length === 0) return [];
    
    // Sort intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];
        
        // If intervals overlap
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    
    return merged;
};