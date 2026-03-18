let task = {
    id: 1,
    title: "Aprender Javascript",
    completed: false,
    assignee: {
        name: "Veneno",
        email: "venenohl16@gmail.com"
    }
}

let tasks = [
    {
    id: 1,
    title: "Aprender Javascript",
    completed: false,
    assignee: {
        name: "Veneno",
        email: "venenohl16@gmail.com"
        }
    },
    {
    id: 2,
    title: "Aprender Python",
    completed: true,
    assignee: {
        name: "Veneno",
        email: "venenohl16@gmail.com"
    }
    },
    {
    id: 2,
    title: "Aprender C#",
    completed: false,
    assignee: {
        name: "Veneno",
        email: "venenohl16@gmail.com"
    }
    }
]

console.table(tasks)

let hoje = new Date()
console.log(hoje)

let amanha = new Date("03-25-2026")
console.log(amanha)

let a = 10
let b = 3

console.log(a + b) // 13
console.log(a - b) // 7
console.log(a / b) // 10 dividido por 3 3.333333
console.log(a * b) // 30
console.log(a % b) // divisao com resto 1
console.log(a ** b) // 1000 (elevado)

let x = 10
x += 1
x -= 1
x /= 1
x *= 2
x %= 3
x **= 5

console.log(10 == "10") // true
console.log(10 === "10") // false
console.log(10 != "10") // false (é igual)
console.log(10 !== "10") // true (é diferente)

//
// && and
// || or
// ! not