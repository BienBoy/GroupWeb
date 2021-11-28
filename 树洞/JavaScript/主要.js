window.onload=function()
{
    var open = document.getElementById("publish");
    var close = document.getElementsByClassName("close");
    var nowWeb = document.getElementsByClassName("now");
    var nowWebClass = nowWeb[0].getAttribute("webClass");
    var ids;
    if (ids = JSON.parse(localStorage.getItem("id")))
    {
        for (var i = 0; i<ids.length; i++)
        {
            var oldData = JSON.parse(localStorage.getItem(ids[i]));  //存储的数据，顺序为：id，昵称，类别，年月日时分，文本内容
            var oldContain = "<a href=''>\
                        <h2>"+oldData[1]+"</h2>\
                        <span id='con_class'>"+oldData[2]+"</span>\
                        <span id='time'>"+oldData[3]+"年"+oldData[4]+"月"+oldData[5]+"日"+oldData[6]+":"+oldData[7]+"</span>\
                        <p>"+oldData[8]+"</p>\
                    </a>";
            if (nowWebClass == oldData[2] || nowWebClass == "全部")
            {
                var oldContainEle = document.createElement('li');
                oldContainEle.innerHTML = oldContain;
                var oulOld = document.getElementById("contain_ul")
                oulOld.insertBefore(oldContainEle, oulOld.firstElementChild);
            }
            
        }
    }
    else{
        var arr = ["20211172019", "2021117235454", "202111091034", "202111001313", "202111110034", "202111121547", "201116130808", "20211112122525", "202111180926", "202111202133", "20211120231717", "20211121041111", "202111210841441", "20211121125454", "20211120213333", "20211122140808", "20211125131313", "20211127193103"];
        localStorage.setItem("id",JSON.stringify(arr)); //存储的数据的id
        var oldarr = [["20211127193103", "滑稽", "疑惑解答", 2021, 11, 27, 19, 31, "捞一个在北航校医院和北医三院看过牙熟悉报销流程的同学，想咨询点问题，有奶茶钱🐧"], ["20211125131313", "局外人", "寻人寻物", 2021, 11, 25, 13, 13, "寻找一下今天上午四级口语10:00到10:30场2号机房40号的同学，难得遇到老乡，qq：2415256659"], ["20211122140808", "且听风铃", "心意表白", 2021, 11, 22, 14, 8, "想问问19级街舞社（应该是吧）的cc小哥有没有npy"] , ["20211121193333", "呆蠢萌", "心意表白", 2021, 11, 21, 19, 33, "周四晚上六点左右偶遇一位xjj，她抬头的那一刻眼神正好撞进我的眼中，是心动的感觉♥"],["20211121125454", "凉栀", "寻人寻物", 2021, 11, 21, 16, 54, "请问学院路校区有贝斯弹得比较好的同学想兼职上小课吗？有的话请评论留下联系方式，谢谢！"],["20211121084141", "白拜", "疑惑解答", 2021, 11, 21, 8, 41, "想问经管20级的cyf小哥哥有没有npy啊"],["20211121041111", "独玖", "寻人寻物", 2021, 11, 21, 4, 11, "我想找个pencil！今天下午4:30左右的校车从学院路到沙河！<br>上面刻着Isn't it delicate"],["20211120231717", "渲染", "疑惑解答", 2021, 11, 20, 23, 17, "想问一下大家有没有自己搭过云服务器+shadowsocksR连接的，遇到了一点问题，求指导"],["20211120213333", "指忘", "寻人寻物", 2021, 11, 20, 21, 33, "学院路篮球场11月20日下午4点半左右丢失漫步者耳机壳，希望拿错的同学能联系我感谢🙇‍<br> QQ 2637079436"],["202111180926", "休思", "寻人寻物", 2021, 11, 18, 9, 26, "想问一下 我们学校有没有管弦乐的表演或者排练<br>不是乐队的成员可以去看吗"],["20211112122525", "尐懒蟲", "寻人寻物", 2021, 11, 17, 17, 25, "卡丢了，挂失一下。<br>学号是：20261009 捡到的兄弟姐妹联系我：285617394 请喝奶茶！！！！"],["201116130808", "不想起名", "不满吐槽", 2021, 11, 16, 13, 8, "今天取快递的时候，有个穿黑色羽绒服的男生插队，看排队的人不让插，直接抢着报快递号。<br>把我人看傻了。希望你好好反省……"],["202111121547", "负智商", "其他", 2021, 11, 12, 15, 47, "六点来三教，走楼梯进门时，一个小姐姐帮我扶着门，我当时很小声地说了句谢谢，她应该没有听到吧<br>谢谢小姐姐的善举，让我心情愉悦起来了"],["202111110034", "蒟蒻", "寻人寻物", 2021, 11, 11, 0, 34, "刚刚在二、四公寓之间捡到一张理发店的会员卡 2533189802"],["202111001313", "距离感", "不满吐槽", 2021, 11, 11, 0, 13, "就是说怎么会有人天天拿别人外卖呢？孩子的外卖都丢了好几次了😭"],["202111091034", "水", "疑惑解答", 2021, 11, 9, 10, 34, "想问一下沙河心理咨询怎么预约啊"],["2021117235454", "无名氏", "其他", 2021, 11, 7, 23, 54, "我今天在新北门眼睛一花 看错了一个外卖 拿错了 实在不好意思 是一位姓郭同学的 我给您放回去了 如果您去了没有 联系我 我赔偿给您吧 实在不好意思<br>+v 15887753566"],["20211172019", "饕餮少女", "其他", 2021, 11, 7, 20, 19, "问一下学院路大一的uu们有谁想参加一下子心理剧嘛<br>现在我们还少四五个人<br>我QQ：2096749518"]];
        oldarr.reverse();
        for (var i = 0; i<arr.length; i++)
        {
            localStorage.setItem(arr[i], JSON.stringify(oldarr[i]));
        }
        for (var i = 0; i<arr.length; i++)
        {
            var oldData = JSON.parse(localStorage.getItem(arr[i]));  //存储的数据，顺序为：id，昵称，类别，年月日时分，文本内容
            var oldContain = "<a href=''>\
                        <h2>"+oldData[1]+"</h2>\
                        <span id='con_class'>"+oldData[2]+"</span>\
                        <span id='time'>"+oldData[3]+"年"+oldData[4]+"月"+oldData[5]+"日"+oldData[6]+":"+oldData[7]+"</span>\
                        <p>"+oldData[8]+"</p>\
                    </a>";
            if (nowWebClass == oldData[2] || nowWebClass == "全部")
            {
                var oldContainEle = document.createElement('li');
                oldContainEle.innerHTML = oldContain;
                var oulOld = document.getElementById("contain_ul")
                oulOld.insertBefore(oldContainEle, oulOld.firstElementChild);
            }
            
        }
    }
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
                
                if (nowWebClass == whichClass || nowWebClass == "全部")
                {
                    var newContain = "<a href=''>\
                        <h2>"+nickname.value+"</h2>\
                        <span id='con_class'>"+whichClass+"</span>\
                        <span id='time'>"+year+"年"+month+"月"+day+"日"+hour+":"+minute+"</span>\
                        <p>"+content.value+"</p>\
                    </a>";
                    var newContainEle = document.createElement('li');
                    newContainEle.innerHTML = newContain;
                    var oul = document.getElementById("contain_ul")
                    oul.insertBefore(newContainEle, oul.firstElementChild);
                }
                nickname.value = "";
                choice.value = "choice";
                content.value = "";
                closewindow();
            },
            cancel: function() {},
        }, auto).show();
    }
}