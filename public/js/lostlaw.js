$(".openPara").on("click", function() {
    $(this).next("article").toggleClass("divPara");
});

$("#itemBtn1").on("click",function() {
    $("#lawList1").removeClass("displayOff");
    $("#lawList2").removeClass("displayOff");
    $("#lawList2").addClass("displayOff");
    $("#btnName1").removeClass("selectBtn");
    $("#btnName2").removeClass("selectBtn");
    $("#btnName1").addClass("selectBtn");
})
$("#itemBtn2").on("click",function() {
    $("#lawList1").removeClass("displayOff");
    $("#lawList2").removeClass("displayOff");
    $("#lawList1").addClass("displayOff");
    $("#btnName1").removeClass("selectBtn");
    $("#btnName2").removeClass("selectBtn");
    $("#btnName2").addClass("selectBtn");
})