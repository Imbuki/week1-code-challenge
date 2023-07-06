const marksBtn = document.getElementById("submitmarks");
const inputMarks = document.getElementById("marks")
const gradeScore = document.getElementById("grade");
const gradeD = document.getElementById("gradeDisplay");

marksBtn.addEventListener("click", function(){
    const score = inputMarks.value;
    let gradescored; 
    switch(true) {
        case (score <= 100 && score >= 79):
           gradescored = 'A';
            break;
        case (score < 79 && score >= 60):
            gradescored = 'B';
             break;
        case (score <= 59 && score >= 49):
            gradescored = 'C';
             break;
           case (score < 49 && score >= 40):
            gradescored = 'D';
             break;
        case (score < 40 && score >= 0):
            gradescored = 'E';
            break;
    
        case (score > 100 || score < 0):
            gradescored = 'INVALID SCORE';
            break; 

        default:
          return 'INVALID SCORE';

    }
    alert(gradescored);
    
})

