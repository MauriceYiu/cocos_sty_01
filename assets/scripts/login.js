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
        myAnimation:{
            type:cc.Animation,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.active = false;
        var node = this.node.getChildByName("Background");
        var nodeLogin = this.node.getChildByName("login");
        nodeLogin = nodeLogin.getChildByName("ui_win_rect");
        node.on("mousedown",function (e) { 
            cc.log(e)
            this.hide();
            e.stopPropagation();
        }.bind(this),this)
        nodeLogin.on("mousedown",function (e) { 
            cc.log(e)
            e.stopPropagation();
        }.bind(this),this)
        this.node.getChildByName("login").getComponent(cc.Animation).toHIde = function(){
            this.node.active = false;
        }.bind(this)
    },
    show:function (e) { 
        this.node.active = true;
        this.myAnimation.play("scalToShow");
    },
    hide:function (e) { 
        this.myAnimation.play("scalTohide");
    },
    start () {

    },
    // update (dt) {},
});
