window.onload=function()
{
    var submit = document.getElementById("submit");
    var subjet = document.getElementById("subjet");
    var studentNumber = document.getElementById("studentNumber");
    var shenfenid = document.getElementById("shenfenid");
    var name = document.getElementById("name");
    var score;
    var haveTwoBut = false;
    var contentOfPrompt;
    submit.onclick=function()
    {
        if (subjet.value == "choice")
        {
            haveTwoBut = false;
            contentOfPrompt = "请选择考试科目";
            show(true);
        }
        else if (studentNumber.value == "")
        {
            haveTwoBut = false;
            contentOfPrompt = "请输入学号";
            show(true);
        }
        else if(shenfenid.value == ""){
            haveTwoBut = false;
            contentOfPrompt = "请输入身份证号";
            show(true);
        }
        else
        {
            switch (subjet.value){
                case "analyse":
                    score = 94;
                    break;
                case "algebra":
                    score = 97;
                    break;
                case "software":
                    score = 95;
                    break;
                case "xijinping":
                    score = 89;
                    break;
                case "law":
                    score = 91;
                    break;
            }
            if (studentNumber.value != "20241029")
            {
                haveTwoBut = false;
                contentOfPrompt = "请输入正确的学号";
                show(true);
            }
            else if(shenfenid.value.length != 18)
            {
                haveTwoBut = false;
                contentOfPrompt = "请输入正确的身份证号";
                show(true);
            }
            else if (name.value != "徐天行"){
                haveTwoBut = false;
                contentOfPrompt = "请输入正确的姓名";
                show(true);
            }
            else{
                haveTwoBut = false;
                contentOfPrompt = "你的成绩为："+score+"分，要继续努力哦！";
                show(false);
            }
            
        }
    }
    var messageDialog = {
        showMessage: function(options, autoHide) {
        this.timers = [];
        this.options = options || {};
        this.autoHide = autoHide || false;
        var isShow = this.options.isShow || false;
        var width = this.options.width || 86;
        var topDistance = this.options.topDistance || 50;
        var leftDistance = this.options.leftDistance || 93;
        var btn_width = this.options.btnWidth || 10;
        var sure = this.options.isSure || false;
        var html = '<div class="message-dialog-conver"></div>\
                            <div class="message-dialog-main">\
                                <div class="message-dialog-header">' + this.options.title + '</div>\
                                <div class="message-dialog-content">' + this.options.content + '</div>\
                                <div class="message-dialog-footer">\
                                        <div class="message-dialog-btn">\
                                            <!--<a class="message-dialog-sure">确定</a>-->\
                                            <!--<a class="message-dialog-cancel">取消</a>-->\
                                        </div>\
                                </div>\
                            </div>';
        //1.0 创建元素
        var element = document.createElement('div');
        element.setAttribute('class', "message-dialog");
        //2.0 插入元素
        element.innerHTML = html;
        //2.1 设置弹出框的大小
        element.querySelector(".message-dialog-main").style.width = width + '%';
        element.querySelector(".message-dialog-main").style.top = topDistance + '%';
        element.querySelector(".message-dialog-main").style.left = leftDistance + '%';
        //2.2 是否需要插入确认或关闭按钮
        if (sure) {
            var sureElement = document.createElement('a');
            sureElement.setAttribute('class', 'message-dialog-sure');
            // sureElement.setAttribute('href', '#');
            sureElement.innerHTML = '确定';
            element.querySelector(".message-dialog-btn").appendChild(sureElement);
            var cancelElement = document.createElement('a');
            cancelElement.setAttribute('class', 'message-dialog-cancel');
            cancelElement.innerHTML = '取消';
            element.querySelector(".message-dialog-btn").appendChild(cancelElement);
        } 
        else{
            var closeElment = document.createElement('a');
            closeElment.setAttribute('class', 'message-dialog-close');
            closeElment.innerHTML = '关闭';
            element.querySelector(".message-dialog-btn").appendChild(closeElment);
        }
        //2.3 设置按钮的长度
        var array = element.querySelectorAll(".message-dialog-btn a");
        for (var key in array) {
            if (!array.hasOwnProperty(key)) {
                continue;
            }
            var item = array[key];
            item.style.width = btn_width + '%';
        }
        //3.0 插入到页面并显示
        if (this.options.el) {
            var ele = document.getElementById(this.options.el);
            if (ele) {
                document.getElementById(this.options.el).appendChild(element);
            }
            else{
                document.getElementsByTagName("body")[0].appendChild(element);
            }
        }
        else{
            document.getElementsByTagName("body")[0].appendChild(element);
        }
        //4.0 是否显示
        if (!isShow) {
            element.style.display = "none";
        }
        //5.0 绑定事件
        if (element.querySelector('.message-dialog-sure') && element.querySelector('.message-dialog-cancel')) {
            element.querySelector('.message-dialog-sure').onclick = element.querySelector('.message-dialog-cancel').onclick = this.enventsFunc.bind("", this, element);
        } 
            else{
                element.querySelector('.message-dialog-close').onclick = this.enventsFunc.bind("", this, element);
            }
            return this;
        },
        show: function() {
            this.cleartimers();
            this.options.isShow = true;
            document.querySelector('.message-dialog').style.display = 'block';
            if (this.autoHide) {
                var t = setTimeout(() => {
                    this.hide();
                }, this.options.timeout || 3000);
                this.timers.push(t);
            }
            return this;
        },
        hide: function() {
            this.cleartimers();
            this.options.isShow = false;
            document.querySelector('.message-dialog').style.display = 'none';
            if (this.options.el) {
                var ele = document.getElementById(this.options.el);
                if (ele) {
                    document.getElementById(this.options.el).removeChild(document.querySelector('.message-dialog'));
                } 
                else{
                    document.getElementsByTagName("body")[0].removeChild(document.querySelector('.message-dialog'));
                }
            } 
            else{
                document.getElementsByTagName("body")[0].removeChild(document.querySelector('.message-dialog'));
            }
        },
        enventsFunc: function(e, doc, target) {
            var thisEvent = target.target;
            if (thisEvent.classList.contains("message-dialog-sure")) {
                e.options.confirm();
            }
            if (thisEvent.classList.contains("message-dialog-cancel")) {
                e.options.cancel();
            }
            e.hide();
            return false;
        },
        cleartimers: function() {
            if (this.timers && this.timers.length > 0) {
                for (var index = 0; index < this.timers.length; index++) {
                    var timer = this.timers[index];
                    if (timer){
                        window.clearTimeout(timer);
                    }
                }
            }
        }
    };
    function show(auto) {
        messageDialog.showMessage({
            el: "message",
            title: "提示",
            content: contentOfPrompt,
            btnWidth: 30,
            width: 30,
            topDistance: 50,
            leftDistance: 65,
            isSure: haveTwoBut,
            timeout: 2000,
            confirm: function() {
            },
            cancel: function() {},
        }, auto).show();
    };
    var reset = document.getElementById("reset");
    reset.onclick=function(){
        subjet.value = "choice";
        studentNumber.value = "";
        shenfenid.value = "";
        name.value = "";
    }
}