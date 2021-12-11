$.ajax({
    method: 'GET',
    // type: "method",
    url: "http://zuzo.xyz/api/v1/regions",
    // data: "data",
    // dataType: "dataType",
    success: function(response) {
        response.data.forEach(function(item) {
            // console.log(item.name);
            let option = `<option value="${item.id}">${item.name}</option>`;
            $("select[name='province']").append(option);
        });
    }
});

$("select[name='province']").change(function() {
    let province_id = $(this).val();
    $("select[name='ward']").empty();
    $("select[name='ward']").append('<option value="">Chọn xã</option>');
    $.ajax({
        method: 'GET',
        url: "http://zuzo.xyz/api/v1/regions/" + province_id + "/cities",

        success: function(response) {
            $("select[name='town']").empty();
            $("select[name='town']").append('<option value="">Chọn huyện</option>');
            response.data.forEach(function(item) {
                let option = `<option value="${item.id}">${item.name}</option>`;
                $("select[name='town']").append(option);
            });
        }
    });
});


$("select[name='town']").change(function() {
    let town_id = $(this).val();
    $.ajax({
        method: 'GET',
        url: "http://zuzo.xyz/api/v1/cities/" + town_id + "/wards",

        success: function(response) {
            $("select[name='ward']").empty();
            $("select[name='ward']").append('<option value="">Chọn xã</option>');
            response.data.forEach(function(item) {
                let option = `<option value="${item.id}">${item.name}</option>`;
                $("select[name='ward']").append(option);
            });
        }
    });
});