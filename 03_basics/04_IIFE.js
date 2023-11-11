// Immediately invoked function express

(function chai() {
    //this is named iife
    console.log(`DB Connected`);
})();

( function chaiaur() {
    //this is named iife
    console.log(`DB Connected2`);
})();

( () => {
    //this is unnamed iife
    console.log(`DB Connected3`);
})();