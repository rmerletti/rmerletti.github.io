$(document).ready(function() {
    $("div.rm-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.rm-tab>div.rm-tab-content").removeClass("active");
        $("div.rm-tab>div.rm-tab-content").eq(index).addClass("active");
    });
});
