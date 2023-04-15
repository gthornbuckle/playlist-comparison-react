const ShuffleThemes = () =>{
    const colourList = [
        ["#1f94ff", "#1c85e6", "#166ab8"],
        ["#51ec6d", "#49d462", "#3aaa4e"],
        ["#f92046", "#e01d3f", "#b31732"],
        ["#9921f7", "#7a1ac6", "#62159e"],
        ["#f78518", "#f9973a", "#c7792e"],
        ["#f1309c", "#f459b0", "#c3478d"]
    ];

    // const colourList = [
    //     ["#67e8f9", "#22d3ee", "#0891b2"],
    //     ["#86efac", "#4ade80", "#16a34a"],
    //     ["#fda4af", "#fb7185", "#e11d48"],
    //     ["#9921f7", "#7a1ac6", "#62159e"],
    //     ["#fdba74", "#fb923c", "#ea580c"],
    //     ["#f9a8d4", "#f472b6", "#db2777"]
    // ];

    let i = colourList.length, randi;

    while (i !== 0){
        randi = Math.floor(Math.random() * i);
        i--;
        [colourList[i], colourList[randi]] = [colourList[randi], colourList[i]];
    }

    return colourList;
}
 
  export default ShuffleThemes;
