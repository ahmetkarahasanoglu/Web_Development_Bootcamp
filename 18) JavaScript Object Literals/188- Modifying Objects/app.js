const midtermScores = {
    danielle    : 96 ,
    thomas      : 78
};

// Modifying a property of an object:
midtermScores.thomas = 79;
console.log(midtermScores.thomas); // 79

midtermScores.thomas = "C+";
console.log(midtermScores.thomas); // C+

// Adding new property to an object:
midtermScores.ezra = "B+";
midtermScores["antonio"] = "A-";

console.log(midtermScores);  /*     antonio:    "A-" 
                                    danielle:   96
                                    ezra:       B+
                                    thomas:     C+     */