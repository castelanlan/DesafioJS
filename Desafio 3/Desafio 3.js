var num = -1;

while(num <= 10) {
    console.log(num)
    // O erro está presente nessa linha, que não altera
    // a variável null, que leva a um LOOP INFINITO.
    // Letra B.
    num += 0;
}

if (num > 10) {
    console.log(num)
}