/**
 * Created by Administrator on 2016/12/14.
 */
function ColorBall(option) {
    this._init(option);
}
ColorBall.prototype = {
    constructor: ColorBall,
    _init: function (option) {
         option = option || {};
         this.x = option.x || 0;
         this.y = option.y || 0;
         this.r = 50;
         this.color = option.color || 'blue';
         this.dX = _.random(-30, 30);
         this.dY = _.random(-20, 20);
         this.dr = _.random(1, 10);
    },
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    },
    update: function () {
        this.x += this.dX;
        this.y += this.dY;
        this.r -= this.dr;
        if(this.r < 0){
            this.r = 0;
        }
    }
}
