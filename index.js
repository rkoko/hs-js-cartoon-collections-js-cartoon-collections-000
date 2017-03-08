function dwarfRollCall(dwarves){
  var array = [];
  for (var i=0; i<dwarves.length; i++){
    var count = i+1;
    array.push(`${count}. ${dwarves[i]}`);
  }
  var string = array.join(" ")+" ";
  return string;
}

function summonCaptainPlanet(veggies){
  var string = veggies.toString();
  var caps = string.toUpperCase();
  var newArray = caps.split(',');
  var array=[];
  for (var i=0; i<newArray.length; i++){
    array.push(`${newArray[i]}!`)
  }
  return array;
}

function longPlaneteerCalls(words) {
  for(var i=0; i<words.length; i++){
    if(words[i].length>4){
      return true
    }else{
      return false
    }
  }
}

function findTheCheese(foods){
  for(var i =0; i<foods.length; i++){
    if(foods[i]==="cheddar"|| foods[i]==="gouda"||foods[i]==="camembert"){
      return foods[i]
    } }
    return ("no cheese!")}
  
