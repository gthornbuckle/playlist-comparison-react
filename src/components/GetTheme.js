const colourList = [
    ["#1f94ff", "#1c85e6", "#166ab8"],
    ["#51ec6d", "#49d462", "#3aaa4e"],
    ["#f92046", "#e01d3f", "#b31732"],
    ["#9921f7", "#7a1ac6", "#62159e"],
    ["#f78518", "#f9973a", "#c7792e"],
    ["#f1309c", "#f459b0", "#c3478d"]
];

function GetTheme() {
    let arr = colourList.slice(0);

    if (arr.length < 1){ 
        arr = colourList.slice(0);
    }

    let i = Math.floor(Math.random() * arr.length);
    let e = arr[i];
    arr.splice(i, 1);
    return e;

}
 
  export default GetTheme;
