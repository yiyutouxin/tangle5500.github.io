$(function() {
    var pres = $("pre");
    if (pres.length) {
        pres.each(function() {
            var t = $(this)
                .children("code")
                .text();
            var btn = $('<span class="copy">复制</span>').attr(
                "data-clipboard-text",
                t
            );
            $(this).prepend(btn);
            var c = new ClipboardJS(btn[0]);
            c.on("success", function() {
                btn.addClass("copyed").text("复制成功");
            });
            c.on("error", function() {
                btn.text("复制失败");
            });
            btn.mouseleave(function() {
                btn.text("复制").removeClass("copyed");
            });
        });
    }
});
