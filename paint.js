const Paint = function (litres){
this.litres = litres;
};

module.exports = Paint;

Paint.prototype.emptyCheck = function () {
  if (this.lites === 0) {
    return 0;
  };
};
Paint.prototype.emptying = function (amount) {
  return this.litres -= amount
};
