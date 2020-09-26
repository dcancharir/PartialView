var Partial = function () {
    var _llenarData = function () {
        $.ajax({
            url: 'https://api.covid19api.com/countries',
            type: "GET",
            contentType: "application/json",
            beforeSend: function () {
                console.log('Partial View before');
            },
            complete: function () {
                console.log('Partial View complete');
            },
            success: function (data) {
                $('#example').DataTable({
                    "aaData": data,
                    "columns": [
                        { 'data': 'Country', 'title': 'Country' },
                        { 'data': 'Slug', 'title': 'Slug' },
                        { 'data': 'ISO2', 'title': 'ISO' },
                    ],

                });
            },
            error: function (xmlHttpRequest, textStatus, errorThrow) {
                console.warn('Message :', errorThrow);
            }
        });
    }
    var _inicio = function () {
        console.log("prueba");
    }
    return {
        //init: function () {
        //    _inicio2();
        //} (),
        init: _llenarData(),
        init2: _inicio(),
    }
}();
document.addEventListener('DOMContentLoaded', function () {
    Partial.init();
});