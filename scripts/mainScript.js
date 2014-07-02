
$(document).ready(init);

function init() {
    openTheSite();
    attachEvents();
    $("main").load("indexContent.html");
}

function openTheSite() {
    $("#btnOpenSite").on("click", function () {
        $("#btnOpenSiteContainer").css("display", "none");
        var topElementHeight = $("#topImageContainer").height();
        var bottomElementHeight = $("#bottomImageContainer").height();
        $("#topImageContainer").animate({ top: -topElementHeight * 0.4, opacity: "show" }, 1500);
        $("#bottomImageContainer").animate({ top: bottomElementHeight* 0.45, opacity: "show" }, 1500, function () {
            $("#startScreen").css("display", "none");
            $("#siteBody").css("display", "block");
            $("body").css("overflow", "scroll");
        });
        
    });
}

function attachEvents() {
    $("#openVideos").on("click", function () {
        $("main").load("videos.html");
    });
    $("#openMusic").on("click", function () {
        $("main").load("music.html");
    });

    $("#openIndex").on("click", function () {
        $("main").load("indexContent.html");
    });

    $("#openBloopers").on("click", function () {
        $("main").load("bloopers.html");
    });
}