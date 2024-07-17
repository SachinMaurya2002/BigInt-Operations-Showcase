document.addEventListener('DOMContentLoaded', function() {
    // Output examples of BigInt operations
    const outputDiv = document.getElementById('output');
    
    function addOutput(text) {
        const pre = document.createElement('pre');
        pre.textContent = text;
        outputDiv.appendChild(pre);
        pre.classList.add('animation');
    }
    
    // Example BigInt operations
    addOutput("BigInt Operations Showcase");
    addOutput("-----------------------------------------------------------------------------------------");

    // Example operations (similar to the C++ program)
    addOutput("Factorials:");
    for (let i = 0; i <= 50; i++) {
        addOutput(`Factorial of ${i} = ${Factorial(i)}`);
    }

    addOutput("------------------------------------------------------------------------------------------");

    addOutput("Fibonacci Numbers:");
    for (let i = 0; i <= 50; i++) {
        addOutput(`Fibonacci ${i} = ${NthFibonacci(i)}`);
    }

    addOutput("------------------------------------------------------------------------------------------");

    addOutput("Catalan Numbers:");
    for (let i = 0; i <= 50; i++) {
        addOutput(`Catalan ${i} = ${NthCatalan(i)}`);
    }

    addOutput("----------------------Thanks!-Contribute By Sachin Maurya---------------------------------");

    // JavaScript equivalent of BigInt class operations
    function Factorial(n) {
        let result = BigInt(1);
        for (let i = 2; i <= n; i++) {
            result *= BigInt(i);
        }
        return result;
    }

    function NthFibonacci(n) {
        let a = BigInt(1), b = BigInt(1), c = BigInt(0);
        if (n === 0) return c;
        n--;
        while (n--) {
            c = a + b;
            b = a;
            a = c;
        }
        return b;
    }

    function NthCatalan(n) {
        let a = BigInt(1), b = BigInt(1), result = BigInt(1);
        for (let i = 2; i <= n; i++) {
            a *= BigInt(i);
        }
        b = a;
        for (let i = n + 1; i <= 2 * n; i++) {
            b *= BigInt(i);
        }
        a *= a;
        a *= BigInt(n + 1);
        b /= a;
        return b;
    }
});
