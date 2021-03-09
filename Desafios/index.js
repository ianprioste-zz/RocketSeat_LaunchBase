const classA = [
    {
        name: "Ian",
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
        name: "João",
        grade: 2
    },
    {
        name: 'Marcelo',
        grade: 5
    },
    {
        name: 'Paulo',
        grade: 2
    },
    {
        name: 'Maria',
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

function sendMessage(average, classtext) {
    if (average > 5) {
        console.log(`${classtext} average: ${average}. Congratulations!`)
    } else {
        console.log(`${classtext} average: ${average}. It's not good enough.`)
    }
}


function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')


studentsReprovado(classA)
studentsReprovado(classB)