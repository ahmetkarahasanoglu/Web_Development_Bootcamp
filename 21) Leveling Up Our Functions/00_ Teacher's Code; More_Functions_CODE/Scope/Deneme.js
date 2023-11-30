let deadlyAnimal = "Blue-Ringed Octopus";
     
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";        // If I delete "let", then line 9's result will be "Scorpionfish"
    console.log(deadlyAnimal);
}
 
handleAnimal();             // Scorpionfish
console.log(deadlyAnimal);  // Blue-Ringed Octopus