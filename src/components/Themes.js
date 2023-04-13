const ShuffleThemes = () =>{
    const colourList = [
        ["#1f94ff", "#1c85e6", "#166ab8"],
        ["#51ec6d", "#49d462", "#3aaa4e"],
        ["#f92046", "#e01d3f", "#b31732"],
        ["#9921f7", "#7a1ac6", "#62159e"],
        ["#f78518", "#f9973a", "#c7792e"],
        ["#f1309c", "#f459b0", "#c3478d"]
    ];

    let i = colourList.length, randi;

    while (i !== 0){
        randi = Math.floor(Math.random() * i);
        i--;
        [colourList[i], colourList[randi]] = [colourList[randi], colourList[i]];
    }

    return colourList;
}
 
  export default ShuffleThemes;
