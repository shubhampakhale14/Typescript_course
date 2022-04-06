var product=function(...nums)     //...num any no of parametes
{ 
    var result=1;
for(var i=0;i<nums.length;i++)
{
    console.log(nums[i]);
    result+=nums[i];
}
}
 console.log(product(2,3,4,5));