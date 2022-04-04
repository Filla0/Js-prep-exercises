
const trafficLight = {
    state: "green",
  };
  
  let rotations = 0;
  while (rotations < 2) {
    for (let index = 0; index < 3; index++){
      console.log("The traffic light is on", trafficLight.state);

      switch (trafficLight.state) {
        case "green":
          trafficLight.state = "orange";
          break;
        case "orange":
          trafficLight.state = "red";
          break;
        case "red":
          trafficLight.state = "green";
          break;
      }
    }
    rotations++;
    /**
    const currentState = trafficLight.state;
    console.log("The traffic light is on", currentState);
    if (currentState=='green'){
      trafficLight.state='orange';
    }
    else if (currentState=='orange'){
      trafficLight.state='red';
    }
    else {
      rotations++;
      trafficLight.state='green';
    }
     */
  }

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green