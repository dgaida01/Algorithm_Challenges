

import java.util.ArrayList;
import java.util.Arrays;

class TheTwoSums {
    public static void main(String [] args){

        TheTwoSums solve = new TheTwoSums();
        int [] nums = {3,2,4};
        int target = 6; 
       int[] result =  solve.twoSum(nums, target);
       System.out.println(Arrays.toString(result));
    }


    public int[] twoSum(int[] nums, int target) {
        
        int [] result = new int [2];
        for(int i =0; i<nums.length;i++){
        
            for(int j =i+1; j< nums.length ;j++){
                    if(nums[i]+nums[j] == target){
                        result[0]=i;
                        result[1]=j;
                    }
            }
        }
        System.out.println(Arrays.toString(result));
        return result;
    }
}