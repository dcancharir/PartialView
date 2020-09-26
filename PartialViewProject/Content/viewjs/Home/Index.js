
var Index = function () {
    var _inicio = function () {
        $(document).on('click', '#cargarModal', function (e) {
            e.preventDefault();
            var url = $('#exampleModal').data('url');

            $.ajax({
                url: url,
                type: "GET",
                //contentType: "application/json",
                beforeSend: function () {
                    console.log('Index before');
                },
                complete: function () {
                    console.log('Index complete');
                },
                success: function (data) {
                    $('#exampleModal').html(data);
                    $('#exampleModal').modal('show');
                },
                error: function (xmlHttpRequest, textStatus, errorThrow) {
                    console.warn('Message :', errorThrow);
                }
            });

        })
    }
    return {
        init: function () {
            _inicio();
        },
    }
}();
// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    Index.init();
});