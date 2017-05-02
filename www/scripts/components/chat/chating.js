/**
 * Created by forli on 2017/4/28.
 */
var chatingComponent = {
    mounted:function(){
    },
    data:function(){
        return {
            records:[
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"对方是对方的手",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-vrwfe",
                        nickName:"绿水水",
                        icon:"./images/user-icon/user-icon2.jpg"
                    },
                    content:"对方是对方的手",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-vrwfe",
                        nickName:"绿水水",
                        icon:"./images/user-icon/user-icon2.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"对方是对方的手",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-vrwfe",
                        nickName:"绿水水",
                        icon:"./images/user-icon/user-icon2.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                },
                {
                    sender:{
                        id:"oadds-fwefe-asrerfre",
                        nickName:"白云云",
                        icon:"./images/user-icon/user-icon1.jpg"
                    },
                    content:"水电费接收到史莱克实力空大减肥收到了",
                    time:new Date('2016-04-28')
                }
            ],
            currentUser:{
                id:"oadds-fwefe-asrerfre",
                nickName:"白云云",
                icon:"./images/user-icon/user-icon1.jpg"
            }
        }
    },
    template:
        '<div class="chating content-panel">\
            <div class="records-panel">\
                <div v-for="record in records"\
                    v-bind:class="{sender:currentUser.id !== record.sender.id}"\
                 class="record-wrapper">\
                    <div class="user">\
                        <img v-bind:src="record.sender.icon" alt="">\
                    </div>\
                    <div v-text="record.content" class="chat-content">\
                    </div>\
                </div>\
            </div>\
            <div class="chating-input">\
                <input type="text">\
                <input type="button" value="发送">\
            </div>\
        </div>'
};