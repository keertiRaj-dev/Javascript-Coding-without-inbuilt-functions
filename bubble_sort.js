//Bubble sort

var arr = [1,3,4,5,6,3,4,5,2,7,89,0, 8, 22]

var newArr = [];
for(j=0; j<arr.length; j++) {
for(i=0; i<arr.length; i++) {
    if(arr[i+1]<arr[i]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    else{
    continue
    }
}
}

console.log(arr);
