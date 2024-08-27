function curriedAdd(total = 0) {
    return function next(num) {
        if (num !== undefined) {
            return curriedAdd(total + num);
        } else {
            return total;
        }
    };
}

module.exports = { curriedAdd };
