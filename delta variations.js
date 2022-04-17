var n = parseInt(readline());
var system = [];
var childArr = []; //first name per line
var parentArr = []; //second name per line
var parentArrCopy = [];
var obj = {};
var versions = [];
function isAncestor(a, b, verNum) {
    var tState = versions[verNum];
    
    if (a === b) {
        return true;
    }
    
    var parentOfA;
    parentOfA = tState.parent[tState.child.indexOf(a)];
    if (typeof parentOfA === "undefined") {
        return false;
    }
    
    if (parentOfA === b) {
        return true;
    }
    
    return isAncestor(parentOfA, b, verNum);
}
 
for (var i = 0; i < n; i++) {
    var r = readline().split(" ");
    childArr[i] = r[0];
    parentArr[i] = r[1];
    parentArrCopy[i] = parentArr[i];
}
 
versions[0] = {
    "child": [...childArr],
    "parent": [...parentArr]
};
 
 
 
 
var e = parseInt(readline());
 
for (var j = 0; j < e; j++) {
    var s = readline().split(" ");
    //make copies of the array
    //record
    parentArrCopy[j] = s[1];
    parentArr[childArr.indexOf(s[0])] = s[1];
    versions.push({
        "child": [...childArr],
        "parent": [...parentArr]
    });
}
 
/*
for (var k = 0; k < versions.length; k++) {
    print(k);
    print(versions[k].child);
    print(versions[k].parent);
}
*/
 
var q = parseInt(readline());
for (var k = 0; k < q; k++) {
    var qArr = readline().split(" ");
    var question = isAncestor(qArr[1], qArr[2], parseInt(qArr[0]));
    if (question === true) {
        print("Yes");
    } else {
        print("No");
    }
}
 