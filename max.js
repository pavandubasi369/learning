const findMaxNo = function (n1, n2, n3)  {

    let maxNo = 0;

    if(n1 > n2){
        maxNo =n1;
    }
    else {
        maxNo = n2;
    }
    if(n3 > maxNo)
    maxNo=n3;
    return maxNo;
}


console.log(findMaxNo(9,21,14));