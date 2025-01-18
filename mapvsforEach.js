const arr = [1,2,3,4];

const mapResult = arr.map((arr) => {
    return arr + 2;
});

const forEachResult = arr.forEach((arr, i) => {
    arr[i] =  arr + 3;
});

//console.log(mapResult, forEachResult, arr);

let students = [
    {name: "Piyush", rollNumber: 10, marks: 80},
    {name: "Aditya", rollNumber: 15, marks: 90},
    {name: "Sarang", rollNumber: 20, marks: 45},
    {name: "Punnet", rollNumber: 25, marks: 23}
];


const modifyNames = students.map((stu => stu.name.toUpperCase()));

const scoreMoreThanSixty = students.filter((stu => stu.marks > 60));

const details = students.filter((stu => stu.marks > 60 && stu.rollNumber > 15));

const sum = students.reduce((acc, stu) => {
    acc + stu.marks;
}, 0);


const names = students.filter((stu) => stu.marks > 60).map(curr => curr.name);

//console.log(names);

const totalMarks = students.filter((stu) => stu.marks < 60).reduce((stu) => stu.marks + 20, 0);

console.log(totalMarks);