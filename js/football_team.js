const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let teams = [[], [], []];
    let restStudents = [];
    arr.sort();
    console.log(arr);
    let i = 0, nt = 0, nm = 0;
    for (; i < arr.length; i++) {
        teams[nt][nm++] = arr[i];
        if (nm === 3) {
            nt++;
            nm = 0;
        }
        if (nt === 3) {
            break;
        }
    }

    for (i = i + 1; i < arr.length; i++) {
        restStudents.push(arr[i]);
    }

    teams[3] = `Оставшиеся студенты: ${(restStudents.length === 0 ? "-" : restStudents.join(", "))}`;

    return teams;
}

console.log(sortStudentsByGroups(students));