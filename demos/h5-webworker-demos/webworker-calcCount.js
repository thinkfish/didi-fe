/**
 * Web Worker Demo
 */
var i = 0;

(function calcCount() {
    i = i + 1;
    postMessage(i);
    setTimeout(calcCount, 500);
})();