/**
 * Given an array of meeting time intervals, where each interval is represented as [start, end] which represents a meeting starting at time start and
 *  ending at time end, determine the minimum number of meeting rooms required to accommodate all the meetings without any overlap.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export default function minMeetingRoomsNeeded(intervals) {
  if(intervals.length === 0){
    return 0;
  }

  const allocator = new MinPriorityQueue();

  intervals.sort((a, b) => a[0] - b[0]);

  allocator.enqueue(intervals[0][1]);

  for(let i=1; i<intervals.length; i++){
    if(intervals[i][0] >= allocator.front()){
      allocator.dequeue();
    }
    allocator.enqueue(intervals[i][1]);
  }
  return allocator.size();

}


//

export default function minMeetingRoomsNeeded(intervals) {
    // Check for the base case. If there are no intervals, return 0
    if (intervals.length === 0) {
      return 0;
    }
  
    // Separate start and end times into their own arrays
    const start = new Array(intervals.length);
    const end = new Array(intervals.length);
  
    for (let i = 0; i < intervals.length; i++) {
      start[i] = intervals[i][0];
      end[i] = intervals[i][1];
    }
  
    // Sort the start and end times
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
  
    // The two pointers in the algorithm: endPointer and startPointer
    let startPointer = 0,
      endPointer = 0;
  
    // Variable to keep track of the maximum number of rooms used
    let usedRooms = 0;
  
    // Iterate over the intervals
    while (startPointer < intervals.length) {
      // If there is a meeting that has ended by the time the meeting at startPointer starts
      if (start[startPointer] >= end[endPointer]) {
        usedRooms -= 1;
        endPointer += 1;
      }
  
      // Regardless of whether a room frees up or not, we allocate a room for the current meeting
      usedRooms += 1;
      startPointer += 1;
    }
  
    return usedRooms;
  }
  