$(document).ready(function() {
    //function to load data here from adminuser Api
   // $('#mydata').load("https://shipzy.xyz/Src/Admin/adminpage.html");
   
   
   // password hide show function
   $('#eye').click(function()
   {
      var pass1= $('#password').attr('type');
      if(pass1=='password')
      {
        $('#eye').text('visibility_on');
        $('#eye').css("width","24px");
        $('#password').attr('type','text ');

      }
      else
      {
        $('#eye').text('visibility_off');
        $('#password').attr('type','password');
      }
       
   })

   // data retriever

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
            headers: {'Content-Type':'application/json'},
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
