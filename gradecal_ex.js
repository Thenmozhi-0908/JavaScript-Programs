function findGrade(studentScore) {
    switch (studentScore) {
        case "A":
            console.log("Student grade is A" );   
        break;
        case "B":
            console.log("Student grade is B" );
        break;
        case "C":
            console.log("Student grade is C" );
        break;
        case "U":
            console.log("Student grade is U" );
        break;
        default:
            break;
    }
}
findGrade("B");