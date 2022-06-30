$.ajax({

    url: "./json/main3.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {
        
                $(".m3_imgbox").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

                $(".m3_textbox").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");

                $(".m3_textbox").eq(i).append('<span>' + data[i].price + '</span> ' + '<del>' + data[i].sale + '</del><h5>');

                //review random count

                var count = Math.floor(Math.random() * 100);
                $(".m3_textbox").eq(i).append("<button>"+count+" REVIEWS"+"</button>");

                $(".m3_textbox").eq(i).append('<a href="#">' + "<img src='img/cart.png'/>" + '</a> <a href="#">' + "<img src='img/pick.png'/>" + '</a>');

            }

        }

    }

});
