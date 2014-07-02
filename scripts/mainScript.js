
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
        $("nav li").removeClass("selectedItem");
        $("#openVideos").addClass("selectedItem");
    });
    $("#openMusic").on("click", function () {
        $("nav li").removeClass("selectedItem");
        $("#openMusic").addClass("selectedItem");
        $("main").load("music.html");
    });

    $("#openIndex").on("click", function () {
        $("nav li").removeClass("selectedItem");
        $("main").load("indexContent.html");
    });

    $("#openBloopers").on("click", function () {
        $("nav li").removeClass("selectedItem");
        $("#openBloopers").addClass("selectedItem");
        $("main").load("bloopers.html");
    });

    $("#openPictures").on("click", function () {
        $("nav li").removeClass("selectedItem");
        $("#openPictures").addClass("selectedItem");
        $("main").load("pictures.html");
    });

    $("#openWords").on("click", function () {
        $("nav li").removeClass("selectedItem");
        $("#openWords").addClass("selectedItem");
        $("main").load("words.html");
    });


}