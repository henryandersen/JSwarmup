function isOldEnoughToDrink(age) {
    if(age>=21){
        return true;
    }
    return false;
}

function addProperty(obj, key) {
    obj.myProperty = true;
}

function removeProperty(obj, key) {
    delete obj.key;
}

function isEven(num) {
    var e = num % 2
    if(e == 1){
        return false;
    }
    return true;
}
function isOdd(num) {
    var e = num % 2
    if(e == 1){
        return true;
    }
    return false;
}
function addToBack(arr, element) {
    arr[arr.length] = element;
    return arr;
}
function addToFront(arr, element) {
    var e = [element];
    for(var i = 0; i < arr.length;i++){
        e.push(arr[i]);
    }

    return e;
}
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
function getAllWords(str) {
    if(str.length == 0) {
        return [];
    }
    return str.split(" ");
}
function extend(obj1, obj2) {
    var e=[];
    var r=[];
    for(var key in obj1){
        e.push(key);
    }
    for(var key2 in obj2){
        r.push(key2);
    }
    for(var i = 0; i<r.length;i++){
        if(e.includes(r[i])=== false){
            obj1[r[i]] = obj2[r[i]];
        }
    }
}
function removeStringValues(obj) {
    for(var key in obj){
        if(typeof(obj[key])== "string" ){
            delete obj[key];
        }
    }
    return obj;
}
function getIndexOf(char, str) {
    for(var i =0; i<str.length;i++){
        if(str[i]=== char){
            return i;
        }
    }
    return -1;
}
function keep(array, keeper) {
    var e = [];
    for(var i =0; i<array.length; i++){
        if(array[i]== keeper){
            e.push(array[i]);
        }
    }
    return e;
}
function getLargestElementAtProperty(obj, key) {
    if(typeof obj[key] == "object"){
        if(obj[key].length < 1){
            return undefined;
        }
        return Math.max(...obj[key]);
    }
    return undefined;
}
function calculateBillTotal(preTaxAndTipAmount) {
    return preTaxAndTipAmount * 1.15 + preTaxAndTipAmount * 0.095;
}
function sumDigits(num) {
    var n = num.toString();
    var output= 0;
    for(var i =0; i<n.length; i++){
        if(n[i] == "-"){
            output -= parseInt(n[i+1]);
            i++;
        }else{
            output += parseInt(n[i]);

        }
    }
    return output;
}
function listAllValues(obj) {
    var e =[];
    for(var key in obj){
        e.push(obj[key]);
    }
    return e;
}
function detectOutlierValue(string){
    var array = string.split(" ");
    var evens = 0;
    var odds = 0;
    for(var i = 0; i< array.length; i++){
        if(parseInt(array[i]) % 2 ==0){
            evens++;
        }else{
            odds++;
        }
    }
    if(odds > evens){
        for(var j = 0; j< array.length; j++){
            if(parseInt(array[j]) % 2 ==0){
                return j + 1;
            }
        }
    }
    if(odds < evens){
        for(var h = 0; h< array.length; h++){
            if(parseInt(array[h]) % 2 ==1){
                return h + 1;
            }
        }
    }
}

function search(array, value) {
    var start = 0;
    var end = array.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(array[middle] !== value && start < end){
        if(value < array[middle]){
            end = middlße - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(array[middle] !== value){
        return null;
    }
    return middle;
}