/*
2215. Find the Difference of Two Arrays
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 */
 var findDifference = function(nums1, nums2) {
    let answer1 = [];
    let answer2 = [];

    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);

    let i = 0 ;
    let j = 0 ; 
    let idxA1 = 0;
    let idxA2 =0;

    while (i<nums1.length || j<nums2.length){

        

        if(nums1[i] == nums2[j]){
            i++;
            j++;

            while(nums1[i]==nums1[i-1] && i<nums1.length){
                i++;
            }
            while(nums2[j]==nums2[j-1] && j<nums2.length){
                j++;
            }

        }
        if(nums1[i]<nums2[j] || (j>=nums2.length && i<nums1.length)){
            answer1[idxA1] = nums1[i];
            i++;
            while(nums1[i]==nums1[i-1] && i<nums1.length){
                i++;
            }
            idxA1++;
        }
        if(nums1[i]>nums2[j] || ( i>=nums1.length && j<nums2.length)){
            answer2[idxA2] = nums2[j];
            j++;
            while(nums2[j]==nums2[j-1] && j<nums2.length){
                j++;
            }
            idxA2++;
        }
    }

    return [answer1,answer2]

};

let num1=[1,2,3,3]
let num2=[1,1,2,2]
let answer=[]
answer = findDifference(num1,num2);

console.log(answer[0]);
console.log(answer[1]);
console.log(answer);