// For loop

for (let i = 1; i <= 5; i++) {
    const element = i;
    console.log(element);
    
}
// nested for loop

for (let i = 1; i <= 29; i++) {
    console.log(`Outer loops value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loops value : ${j} and Outer loop value : ${i}`);
        console.log(i + " * " + j + " = " + i*j);
    }

}


