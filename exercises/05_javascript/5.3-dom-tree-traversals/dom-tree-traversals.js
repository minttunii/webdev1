const first_ul = document.querySelector('ul');

function isLeaf(elem){
    if(elem.children.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

function countDescendants(elem) {
    if(isLeaf(elem)){
        return 0;
    }
    else {
        console.log(elem);
        let children = elem.firstElementChild.children;
        let count = 0;
        for(let child of children) {
            if(isLeaf(child)) {
                   count++;
            }
            else {
                count = count + 1 + countDescendants(child);
            }
        }
        return count;
    }
}

function insertCount(elem) {
    let count = countDescendants(elem);
    let text = elem.firstChild.textContent;
    text = text + " (" + count + ")";
    elem.firstChild.textContent = text;
}

function traverseDOM(root) {
    let children = root.children;
    for(let child of children) {
        if(!isLeaf(child)) {
            if(child.tagName === "LI") {
                insertCount(child);
            }
            traverseDOM(child);
        }
    }
}

traverseDOM(first_ul);

