module.exports = {
    sum: function () {
        var args = Array.prototype.slice.call(arguments);
        args.reduce(function (a, b) { return a + b; }, 0);
    }
};