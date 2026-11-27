// Exercise B1: if / else

function decision(marks) {
    if (marks >= 70) {
        return "Competent";
    } else {
        return "Not yet competent";
    }
}

console.log(decision(70));
console.log(decision(69));