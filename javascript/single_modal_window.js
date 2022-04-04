$(function () {
    $(".js_modal_opne").on("click", function () {
        $(".js_modal").fadeIn();

        return false;
    });
    $(".js_modal_close").on("click", function () {
        $(".js_modal").fadeOut();

        return false;
    });
});
