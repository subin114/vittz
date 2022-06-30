$.ajax({

    url: "./json/main5.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {
           
                $(".m5_imgbox").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

                $(".m5_textbox").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");

                $(".m5_textbox").eq(i).append('<span>' + data[i].price + '</span> ' + '<del>' + data[i].sale + '</del><h5>');

                //review random count

                var count = Math.floor(Math.random() * 100);
                $(".m5_textbox").eq(i).append("<button>"+count+" REVIEWS"+"</button>");

                $(".m5_textbox").eq(i).append('<a href="#">' + "<img src='img/cart.png'/>" + '</a> <a href="#">' + "<img src='img/pick.png'/>" + '</a>');

            }

        }

    }

});
