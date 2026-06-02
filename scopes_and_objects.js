// TODO: Create a global variable called globalCount 
let globalCount = 0;

// TODO: Create a function that demonstrates local scope 
function demonstrateLocalScope() {
    let localCount = 5;
    console.log(localCount); // 5
}

// TODO: Create a function that tries to modify both variables 
function modifyVariables() {
    globalCount = 10; // Modifies the global variable
    let localCount = 15; // Creates a new local variable
    console.log(localCount); // 15
}


// TODO: Create a Student constructor function 
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// TODO: Create several student instances 
let student1 = new Student("Alice", 20);
let student2 = new Student("Bob", 22);

// TODO: Create an object literal with nested properties 
let person = {
    name: "Charlie",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
