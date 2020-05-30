function generationPass(length, charset) {
    let password = "";
    let i = 0;
    for (; i < length; ++i) {
           password += charset[
               Math.floor(
                   Math.random() * charset.length
               )
           ];
    }
    alert(`password is ${password}, please repeat to generate new`);
}
 
generationPass(10, 'abcdefg123456789');
