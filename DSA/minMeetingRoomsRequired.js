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