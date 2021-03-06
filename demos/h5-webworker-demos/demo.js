window.addEventListener("load", function(ev) {
    var worker = null,
        btnStart = document.getElementById("btn-start"),
        btnStop = document.getElementById("btn-stop"),
        btnClickMe = document.getElementById("btn-clickme"),
        spanCount = document.getElementById("span-count");

    /**
     * startWork
     * @return {[type]} [description]
     */
    var startWork = function() {
        if (typeof Worker !== undefined) {
            if (!worker) {
                worker = new Worker("webworker-calcCount.js");
            }
            worker.onmessage = function(ev) {
                spanCount.innerHTML = ev.data;
            };
        } else {
            spanCount.innerHTML = "Does't support";
        }
    };

    /**
     * stopWork
     * @return {[type]} [description]
     */
    var stopWork = function() {
        if (worker) {
            worker.terminate();
        }
    };

    /**
     * 开始计数
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    btnStart.addEventListener("click", function(ev) {
        startWork();
    }, false);

    /**
     * 结束计数
     * @return {[type]} [description]
     */
    btnStop.addEventListener("click", function() {
        stopWork();
    }, false);

    /**
     * [description]
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    btnClickMe.addEventListener("click",function(ev){
        var p = document.createElement("p");
        p.innerHTML = "Clicked me. <br/>";
        document.body.appendChild(p);
    },false);

}, false);