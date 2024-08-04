'use strict'

function getLastElementMeta(array) {
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
    return [lastIndex, lastElement];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))