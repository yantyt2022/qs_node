// 12 35 99 18 75
// 排序  从大到小
//35 12 99 18 75
//35 99 12 18 75
//35 99 18 12 75
//35 99 18 75 12
//99 35 18 75 12
//99 35 75 18 12
//99 75 35 18 12
//冒泡  邻居，每移一下就换位，一次将一个数换到它该在的位置，一次一个轮回
//如果有n个数，就移动n-1次

function bubleSort(arr){
    let length = arr.length;
    let temp = null;
    // 每个数都要有一次轮回
    for(let i = 0; i < length; i++){
        for(let l = 0; l < length-i-1; l++){
            if(arr[l] > arr[l+1]) {
                temp = arr[l];
                arr[l] = arr[l+1];
                arr[l+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubleSort([12,35,99,18,75]));