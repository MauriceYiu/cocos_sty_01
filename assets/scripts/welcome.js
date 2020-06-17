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
        myGround: {
            type: cc.Node,
            default: null
        },
        myLoading: {
            type: cc.Prefab,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.myLoading = cc.instantiate(this.myLoading);
        cc.log(this.myGround);
        this.myGround.addChild(this.myLoading);
        this.myLoading.y = 0;
        var loading = this.myLoading.getComponent("loading");
        loading.setLoadingItemWidth(1);
        loading.finalFun = () => {
            loading.node.active = false;
            this.myGround.getChildByName("logo").active = false;
        }
    },

    start() {

    },

    // update (dt) {},
});