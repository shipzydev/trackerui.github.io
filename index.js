$(document).ready(function() {
    //function to load data here from adminuser Api
   // $('#mydata').load("https://shipzy.xyz/Src/Admin/adminpage.html");
    $('#btnUser').click(function(){
        var email=$('username').val();
        var password=$('password').val();
        var arr={
            username:email,
            password:password
        }
        var dataj=JSON.stringify(arr);
        $.ajax({
            url:"https://shipzy.site/api/adminapi.php",
            type:'POST',
            data:dataj,
            success:function(data)
            {
                $('#mydata').html(JSON.stringify(data));
            }
        });
    });

    // btnadmin call that and find session
    $('#btnAdmin').click(function(){
        $('#mydata').load('https://shipzy.site/other/test.php');
    });
});
