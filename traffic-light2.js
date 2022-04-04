const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  } 
  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];

    trafficLight.possibleStates.forEach(element =>{
      console.log("The traffic light is on", element);
    })
    cycle++;

    /** for (const color of trafficLight.possibleStates){
      console.log("The traffic light is on", color);
    }
    cycle++;
    console.log("The traffic light is on", currentState);
    if (currentState){
      trafficLight.stateIndex++;
    }
    else {
      trafficLight.stateIndex=0;
      cycle++;
    }
    */
  
  }
/** 
my outcome was like this,
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on undefined  "i don't know why i keep getting this?"
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on undefined
*/
  
      // TODO
      // if the color is green, turn it orange
      // if the color is orange, turn it red
      // if the color is red, add 1 to rotations and turn it green