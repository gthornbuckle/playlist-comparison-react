const ShuffleThemes = () =>{
    const colourList = [
        ["#0d5ffd", "#024ad4", "#003cae", "#ff9a00"], //Blue
        ["#51ec6d", "#49d462", "#3aaa4e", "#ff3ce7"], //Green
        ["#f92046", "#e01d3f", "#b31732", "#00ffc4"], //Red
        ["#9921f7", "#7a1ac6", "#62159e", "#17ff00"], //Purple
        ["#ff7100", "#e16300", "#bf5400", "#3eff40"], //Orange
        ["#f1309c", "#f459b0", "#c3478d", "#00ec98"], //Pink
        ["#f0e247", "#ddd039", "#b7ab1f", "#0077ff"] //Yellow
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
