let i


for (i = 0; i < 5; i++) {
    console.log(i)
}
for (i = 10; i >= 1; i--) {
    console.log(i)
}
i = 10;
while (i >= 1) { //while
    console.log(i);
    i--;
}
do { //do-while
    console.log(i)
    i--;
} while (i >= 1)
//example of while loop
//while (true) {
//let num = Number(prompt('enter a number'));
//if (!isNaN(num))
//break;
//}
//example of continue
for (i = 1; i <= 10; i++) {
    if (i % 3 == 0)
        continue;
    console.log(i)

}