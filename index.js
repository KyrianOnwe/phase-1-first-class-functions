/*function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}
Tuesday();
*/

/*function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

/*function Monday() {
  runFiveMiles();
  liftWeights();
}*/

//Monday();
/*function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}*/

/*function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}*/

//Monday();
/*exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});*/

/*exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});*/

//exerciseRoutine(() => console.log("Stretch! Work that core!"));

/*function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);*/

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
 /* return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

morningRoutine()*/

function callback() {
  return "Hello World!";
}

function receivesAFunction(callback){
  callback();  
}

function returnsANamedFunction(){
  return function namedFunction(){
    console.log("Hello World");
  }
}

function  returnsAnAnonymousFunction(){
  return () => console.log("Hello World")
}