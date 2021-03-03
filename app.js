const students = [
    "Murad",
    "Kənan",
    "Qəzənfər",
    "Qələndər",
    "Elşad",
    "Kamran",
    "Əlimərdan",
    "Mərdan",
    "İsmayıl",
    "Orxan",
    "Cavid",
    "Famil",
    "Elvin",
    "Musa",
    "Pərvin",
    "Anar",
    "Aytən",
    "Ayşən"
];
const LikeName = (name) =>{
    if(name.length <= 2){
        return "...Not Found...";
        
    }
   name = name.toLowerCase();
   const studs = students.map(name=>name.toLowerCase());
    let objNames = {};
    studs.forEach(elem => {
    let lettcnt = 0;
    for (const nameLetter of name) {
        for (const elemLetter of elem) {
            if (nameLetter == elemLetter) {
                lettcnt++;
                break;
            }
             
        }
        
    }
   
    
    objNames[elem] = lettcnt;  
});
if (findMaxValObject(objNames) < 3) {
    return "...Not Found...";
}
return getKeyByValue(objNames,findMaxValObject(objNames)).toUpperCase();
}

function getKeyByValue(object, value) {
    let res = "";
    for (const key in object) {
        if (object[key] == value) {
            const length = key.length;
            if (res.length == 0 && res.length < length) {
                res =  key;
            }else if(res.length > length){
                res =  key;
            }
                      
        }
    }
    return res;
    // return Object.keys(object).find(key => object[key] === value);
  }

  function findMaxValObject(obj){
    var keys = Object.keys(obj);
    var min = obj[keys[0]]; // ignoring case of empty list for conciseness
    var max = obj[keys[0]];
    var i;
    
    for (i = 1; i < keys.length; i++) {
        var value = obj[keys[i]];
        if (value < min) min = value;
        if (value > max) max = value;
    }
    return max;
  }



//Array
//["Murad","Kənan","Qəzənfər","Kamran","İsmayıl","Orxan",
//"Cavid","Famil","Elvin","Musa","Pərvin","Anar","Aytən","Ayşən"]
console.clear();
console.log("Tapılan Oxşar Ad: " + LikeName(""));
