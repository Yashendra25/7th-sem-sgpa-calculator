function calculateSGPA() {
    const subjects = document.querySelectorAll('.grade-dropdown');
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
        const selectedGrade = subject.value;
        const creditsElement = subject.parentElement.querySelector('.credits');
        const credits = parseFloat(creditsElement.innerText);

        console.log(`Subject: ${subject.parentElement.querySelector('label').innerText}`);
        console.log(`Selected Grade: ${selectedGrade}`);
        console.log(`Credits: ${credits}`);

        if (selectedGrade !== 'Qualified' && selectedGrade !== 'Disqualified' && !isNaN(credits)) {
            totalCredits += credits;
            totalGradePoints += getGradePoint(selectedGrade) * credits;
        }
    });

    console.log(`Total Credits: ${totalCredits}`);
    console.log(`Total Grade Points: ${totalGradePoints}`);

    const sgpa = totalCredits !== 0 ? totalGradePoints / totalCredits : NaN;

    const resultElement = document.getElementById('result');
    resultElement.innerText = `SGPA: ${isNaN(sgpa) ? 'N/A' : sgpa.toFixed(2)}`;
}

function getGradePoint(grade) {
    const gradePoints = {
        'A+': 10,
        'A': 9,
        'B+': 8,
        'B': 7,
        'C+': 6,
        'C': 5,
        'D': 4,
        'E': 0
    };

    return gradePoints[grade] || 0;
}
