$(function () {
    /*.more_btn a를 클릭하면, .popup이 나타난다.
    .close를 클릭하면 .popup이 사라진다.
    */
   
    $(".close").click(function () {
        $(".popup").fadeOut();
    });
});