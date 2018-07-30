$(document).ready(function () {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1NXuyAENsOGf_vzHJNfL37bQOlB2CjQqMWAne6BTfmPA/od6/public/values?alt=json",
        function (data) {
            data = data['feed']['entry'];
            console.log(data);
            showGoods(data);

        });

    function showGoods(data) {
        var out = '';

        for (var i = 0; i < data.length; i++) {
if (data[i]['gsx$show']['$t']!=0){
    
} 
            out += '<div class="col-lg-3 col-md-3 col-sm-2 text-center">';
            out += '<div class="goods">';
            out += '<h5>${data[i]['gsx$name']['$t']}</h5>';
            out += '<img src="${data[i]['gsx$image']['$t']}" alt="">';
            out += '<p class="cost">Цена: ${data[i]['gsx$cost']['$t']}</p>';

            out += '</div>';

            out += '</div>';
        }

        $('.shop-field').html(out);
    }
})
