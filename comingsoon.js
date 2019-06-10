var deadline = new Date("june 1, 2020 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000); 

$("form").submit(function(e){
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function(response){
            if(response.status == "success"){
                $("form").html("<h1>NOW HERE IS THE SPAM</h1><img id='spam' src='https://www.spam.com/images/5/f/5/5f57337cd256de4e1ad3bb9d1c8409e1c1ec8bc2/spam-classic-455.png'>")
                $('h3').remove()
          
            }else{
                alert("An error occured: " + response.message);
            }
        }
    });
});