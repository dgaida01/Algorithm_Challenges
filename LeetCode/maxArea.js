/*You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.*/
let maxArea= function(height){
    let area=0;
    let result=0;
    let pt1=0;
    let pt2= height.length;
    let distance=0;

    while(pt1<pt2){   
        distance = pt2-pt1;
        if(height[pt1]<height[pt2]){
            area = height[pt1]*distance;
            pt1++;
        }
        else{
            area = height[pt2]*distance;
            pt2--;
        }
        
        if(area>result){
            result=area;
        }
        
        }

    
    return result;
}

console.log(maxArea([1,8,6,2,200,5,4,8,3,7]));