let cities = [];
let totalCities = 30;

let popSize = 1000;
let population = [];
let fitness = [];

let recordDistance = Infinity;let bestEver;
let currentBest;

let statusP;

function setup() {
  createCanvas(2000,1500);
  let order = [];
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height / 2));
 
    cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }
  statusP = createP("").style("font-size", "32pt");
}

function draw() {
  background(600);

  // Genetic Algorithm Functions
  calculateFitness();
  normalizeFitness();
  nextGeneration();

  translate(1, height / 4);
  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < currentBest.length; i++) {
    let n = currentBest[i];
    statustext =
    vertex(cities[n].x, cities[n].y);

    ellipse( cities[i].x, cities[i].y,30 , 30);
  }
  endShape();

  displaytextline();
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points, order) {
  let sum = 0;
  for (let i = 0; i < order.length - 1; i++) {
    let cityAIndex = order[i];
    let cityA = points[cityAIndex];
    let cityBIndex = order[i + 1];
    let cityB = points[cityBIndex];
    let d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}

function displaytextline() {

}
