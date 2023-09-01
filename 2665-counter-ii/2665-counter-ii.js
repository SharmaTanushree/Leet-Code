/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var initial = init;
    return {
        increment(){return ++initial},
        decrement(){return --initial},
        reset(){
                    initial = init;
                    return initial;
                }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */