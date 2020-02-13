var BootstrapDatepicker = function () {
    var t;
    t = mUtil.isRTL() ? {
        leftArrow: '<i class="la la-angle-right"></i>',
        rightArrow: '<i class="la la-angle-left"></i>'
    } : {leftArrow: '<i class="la la-angle-left"></i>', rightArrow: '<i class="la la-angle-right"></i>'};
    return {
        init: function () {
            $(".m_datepicker_1").datepicker({
                rtl: mUtil.isRTL(),
                todayHighlight: !0,
                orientation: "bottom left",
                templates: t
            })
        }
    }
}();
jQuery(document).ready(function () {
    BootstrapDatepicker.init()
});