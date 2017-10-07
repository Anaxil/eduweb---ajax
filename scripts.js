(function ($) {

    $(document).ready(function () {

        var button = $("#button");

        button.on("click", function () {

            $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
                //console.log(data);
                var ul = $("<ul class='my-3'></ul>");

                $(".container").append(ul);

                $.each(data, function (i, val) {
                    var li = $("<li class='mb-2'></li>");
                    li.html("Imię to: " + val.name + "<br/>" + "Nazwa użytkownika: " + val.username + "<br/>" + "Email: " + val.email+ "<br/>" + "Telefon: " + val.phone ) ;
                    ul.append(li);
                });
            });

        });
    });
})(jQuery);
