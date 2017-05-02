/**
 * Created by forli on 2017/4/21.
 */

var app = new Vue({
    router:rConfig
}).$mount('#app');

document.addEventListener("deviceready",function(){
    var scanBth = document.querySelector(".search .btn");
    scanBth.onclick = function(){
        QRScanner.prepare(onDone);
        function onDone(err, status){
            if (err) {
            }
            if (status.authorized) {
            } else if (status.denied) {
            } else {
            }
        }
    };
});

