function fib(n) {
    var a = 0
    var b = 1

    if(n === 1) {
       console.log(a)
    }
    else{
        console.log(a)
        console.log(b)
        for (var i = 0;i<=n;i++) {
            var c= a + b
            a = b
            b = c
            console.log(c)
        }
    }
}
fib(50)
