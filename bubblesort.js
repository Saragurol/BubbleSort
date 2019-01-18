function bubbleSort(array) {
    let tempArray = [];
    if(array.length === 1){
        return array;
    }
    for(let i = 0; i <array.length; i++){
        for(let j = i+1; j <array.length; j++){
            if(array[i] > array[j]){
                tempArray.push(array[i])
            }
            else{
                tempArray.push(array[j])
            }
        }
    }
    return tempArray

    /* your code here */
  
  }