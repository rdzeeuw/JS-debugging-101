// Deel A
const addTheWordCool = function(array){
    return array.push("cool");
}
//console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//Deel B
const amountOfElementsInArray = array => {
    return array.length;
}

//console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

//Deel C
const selectBelgiumFromBenelux = (array) => {
    return array[0];
}

//console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 

//Deel D
const lastElementInArray = array => {
    return array[array.length -1];
}

//console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

  //Deel E
  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
    return array.slice(1, array.length);
  }
  const impeachTrumpSplice = function(array) {
        return array.splice(1, array.length);
  }
  
  //console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  //console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  //Deel F
  const stringsTogether = array => {
      return array.join(' ');
  }

  //console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

  //Deel G
  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const combineArrays = (array) => {
      array1.concat(array2);
  }
  combineArrays([1,2,3], [4,5,6]); 
  // resultaat: [1,2,3,4,5,6]