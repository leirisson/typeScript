let n1: number = 100
let n2: number = 250
let n3: number = 150

/*
se n1 > n2 e n1 > n3 então
    print n1
senão se  n2 > n1 e n2 > n3
    print n2
senão
    print n3
*/

if(n1 > n2 && n1 > n3){
    console.log(n1)
} else if (n2 > n1 && n2 > n3){
    console.log(n2)
} else {
    console.log(n3)
}