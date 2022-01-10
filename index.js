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
        var email=$('#username').val();
        var password=$('#password').val();
        var arr={
            email:email,
            password:password
        }
        $.ajax({
            url:"https://shipzy.site/api/adminapi.php",
            contentType:'application/json',
            type:'POST',
            data:JSON.stringify(arr),
        }).always(function(res)
        {
            console.log(res);
            $('#mydata').html(JSON.stringify(res));
        })
    });

    // btnadmin call that and find session
    $('#btnAdmin').click(function(){
        $.ajax({
            url:"https://shipzy.site/api/aduserapi.php",
            contentType:'application/json',
            headers:{'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJuYW1lIjoic2FjaGluIiwiZW1haWwiOiJzYWNoaW5AZ21haWwuY29tIiwidGltZSI6IjA4XC8wMVwvMjIgMTE6MzggOTc4MSIsInJlc3VsdCI6InRydWUiLCJQSFBTRVNTSUQiOiJkMm43cHJ0cTJzdXFrYzB2c2ZkbW00NWticyJ9.4ZD2FHFb4SA_S41I06J1EFv4tey0n3k2YhIs0u4fAXM'},
            type:'GET',
        }).always(function(res)
        {
            console.log(res);
            $('#mydata').html(JSON.stringify(res));
        })
    });
});
