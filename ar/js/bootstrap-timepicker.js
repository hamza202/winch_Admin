var BootstrapTimepicker = {
    init: function () {
        $(".m_timepicker_1").timepicker({
            rtl:true,
            minuteStep: 5,
            defaultTime: "",
        })
    }
};
jQuery(document).ready(function () {
    BootstrapTimepicker.init()
});


