window.onload=function()
{
    //添加已有信息
    var ids;
    if (ids = JSON.parse(localStorage.getItem("id")))
    {
    }
    else{
        var arr = [];
        localStorage.setItem("id",JSON.stringify(arr)); //存储的数据的id
    }
    //添加已有评论
    var idsTalk;
    if (idsTalk = JSON.parse(localStorage.getItem("idTalk")))
    {
        for (var i = 0; i<idsTalk.length; i++)
        {
            var oldData = JSON.parse(localStorage.getItem(idsTalk[i]));  //存储的数据，顺序为：id，昵称，年月日时分，文本内容
            var oldContain = '<div class="userOfTalk">'+oldData[1]+'\
                                </div>\
                                <div>'+oldData[7]+'\
                                <img src="">\
                                </div>\
                                <div class="timeOfTalk">\
                                    '+oldData[2]+'年'+oldData[3]+'月'+oldData[4]+'日'+oldData[5]+'：'+oldData[6]+'\
                                </div>';
            var oldContainEle = document.createElement('div');
            oldContainEle.setAttribute("class", "talk");
            oldContainEle.innerHTML = oldContain;
            var odivOld = document.getElementById("talkText")
            odivOld.insertBefore(oldContainEle, odivOld.firstElementChild);
        }
        
    }
    else{
        var arr2 = [];
        localStorage.setItem("idTalk",JSON.stringify(arr2)); //存储的数据的id
    }

    var open = document.getElementById("publish");
    var close = document.getElementsByClassName("close");
    open.onclick=function()
    {
        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block';
        document.body.style.overflow='hidden';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    close[0].onclick=function(){
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    close[1].onclick=function(){
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    function closewindow(){
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    var submit = document.getElementById("submit");
    var choice = document.getElementById("themes");
    var nickname = document.getElementById("nickname");
    var content = document.getElementById("content");
    var whichClass;
    var haveTwoBut = false;
    var contentOfPrompt;
    submit.onclick=function()
    {
        if (nickname.value == "")
        {
            haveTwoBut = false;
            contentOfPrompt = "请输入昵称";
            show(true);
        }
        else if (choice.value == "choice")
        {
            haveTwoBut = false;
            contentOfPrompt = "请选择要发表的类别";
            show(true);
        }
        else if(content.value == ""){
            haveTwoBut = false;
            contentOfPrompt = "请输入要发表的内容";
            show(true);
        }
        else
        {
            switch (choice.value){
                case "puzzle":
                    whichClass = "疑惑解答";
                    break;
                case "love":
                    whichClass = "心意表白";
                    break;
                case "dissatisfied":
                    whichClass = "不满吐槽";
                    break;
                case "find":
                    whichClass = "寻人寻物";
                    break;
                case "else":
                    whichClass = "其他";
                    break;
            }
            haveTwoBut = true;
            contentOfPrompt = "你确定要发表吗？一旦发表，无法撤回";
            show(false);
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
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth()+1;
                var day = now.getDate();
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();
                var newId = ""+year+month+day+hour+minute+second;
                content.value = content.value.replace("\n","<br>");
                var storeData = JSON.parse(localStorage.getItem("id"));
                var newData = [newId, nickname.value, whichClass, year, month, day, hour, minute, content.value];
                storeData.push(newId);
                localStorage.setItem("id",JSON.stringify(storeData));
                localStorage.setItem(newId, JSON.stringify(newData));
                nickname.value = "";
                choice.value = "choice";
                content.value = "";
                closewindow();
            },
            cancel: function() {},
        }, auto).show();
    }
    // 评论窗口的打开与关闭
    var openTalk = document.getElementById("submitTalk");
    openTalk.onclick=function()
    {
        document.getElementById('talkWin').style.display='block';
        document.getElementById('fade').style.display='block';
        document.body.style.overflow='hidden';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    close[2].onclick=function(){
        document.getElementById('talkWin').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    close[3].onclick=function(){
        document.getElementById('talkWin').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    function closewindowTalk(){
        document.getElementById('talkWin').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
        document.body.style.overflow='auto';
    }
    // 发表评论
    var submit_talk = document.getElementById("submit_talk");
    var nicknameTalk = document.getElementById("nickname_talk");
    var contentTalk = document.getElementById("content_talk");
    var haveTwoBut_talk;
    var contentOfPrompt_talk;

    submit_talk.onclick=function()
    {
        if (nicknameTalk.value == "")
        {
            haveTwoBut_talk = false;
            contentOfPrompt_talk = "请输入昵称";
            showTalk(true);
        }
        else if(contentTalk.value == ""){
            haveTwoBut_talk = false;
            contentOfPrompt_talk = "请输入要发表的评论";
            showTalk(true);
        }
        else
        {
            haveTwoBut_talk = true;
            contentOfPrompt_talk = "你确定要发表吗？一旦发表，无法撤回";
            showTalk(false);
        }
    }
    function showTalk(auto) {
        messageDialog.showMessage({
            el: "message",
            title: "提示",
            content: contentOfPrompt_talk,
            btnWidth: 30,
            width: 30,
            topDistance: 50,
            leftDistance: 65,
            isSure: haveTwoBut_talk,
            timeout: 2000,
            confirm: function() {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth()+1;
                var day = now.getDate();
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();
                var newTalkId = ""+year+month+day+hour+minute+"talk";
                contentTalk.value = contentTalk.value.replace("\n","<br>");
                var newContain = '<div class="userOfTalk">'+nicknameTalk.value+'\
                                </div>\
                                <div>'+contentTalk.value+'\
                                <img src="">\
                                </div>\
                                <div class="timeOfTalk">\
                                    '+year+'年'+month+'月'+day+'日'+hour+'：'+minute+'\
                                </div>';
                var newContainEle = document.createElement('div');
                newContainEle.setAttribute("class", "talk");
                newContainEle.innerHTML = newContain;
                var odiv = document.getElementById("talkText")
                odiv.insertBefore(newContainEle, odiv.firstElementChild);
                var storeData = JSON.parse(localStorage.getItem("idTalk"));
                var newData = [newTalkId, nicknameTalk.value, year, month, day, hour, minute, contentTalk.value];
                storeData.push(newTalkId);
                localStorage.setItem("idTalk",JSON.stringify(storeData));
                localStorage.setItem(newTalkId, JSON.stringify(newData));
                nicknameTalk.value = "";
                contentTalk.value = "";
                closewindowTalk();
            },
            cancel: function() {},
        }, auto).show();
    }
}