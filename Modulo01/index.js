const classA = [
    {
        name: 'Ian',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Mayk',
        grade: 2
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 4
    },
    {
        name: 'Robson',
        grade: 3
    },
    {
        name: 'Joana',
        grade: 6
    },
    {
        name: 'New student',
        grade: 5
    },
    {
        name: 'Other student',
        grade: 10
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`Congratulations! The class avarege ${turma} was ${average}`)
    } else {
        console.log(`Unfortunately the class avarege ${turma} was ${average}`)
    }
}

function markAssFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true;
    }

}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} was flunked`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAssFlunked(student)
        sendMessageflunked(student)
    }
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)