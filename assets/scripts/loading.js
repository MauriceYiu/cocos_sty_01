// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        myLoadingItem: {
            type: cc.Node,
            default: null
        },
        mySpeed: {
            type: cc.Integer,
            default: 100
        }
    },
    setLoadingItemWidth: function (widthVal) {
        if (widthVal > 1 || widthVal < 0) {
            return
        }
        this.loadingWidth = this.maxLoadingWidth * widthVal;
        this.myLoadingItem.width = 0;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.maxLoadingWidth = this.myLoadingItem.width;
    },
    start() {

    },

    update(dt) {
        if (this.myLoadingItem.width < this.loadingWidth) {
            this.myLoadingItem.width += dt * this.mySpeed;
        } else {
            if (this.finalFun) {
                this.finalFun();
            }
        }
    },
});