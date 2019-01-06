// Code your solution in this file!


function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num)
}

function distanceFromHqInFeet(num) {
  let feetTotal = distanceFromHqInBlocks(num) * 264
  return feetTotal
}

function distanceTravelledInFeet(num1, num2) {
  let totalFeet = Math.abs(num1 - num2) * 264
  return totalFeet
}

// function calculatesFarePrice(start, destination) {
//   let distanceInFeet = distanceTravelledInFeet(start, destination)
//   let critera = distanceInFeet - 400
//   switch (distanceInFeet) {
//     case distanceInFeet < 400 :
//       return 0;
//       break;
//     case distanceInFeet > 400 && distanceInFeet <= 2000:
//       return distanceInFeet
//       break;
//     default:
//       return "cannot travel that far";
//       break;
//   }
// }

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination)
  // let critera = distanceInFeet - 400
  if (distanceInFeet < 400) {
    return 0;
  } else if (distanceInFeet >= 400 && distanceInFeet <= 2000 ) {
    let farePrice = ((distanceInFeet - 400) * .02);
    return farePrice;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  }else {
    return "cannot travel that far";
  }
}
