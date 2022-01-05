
/* 
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!"); */
        /* document.form1.text1.focus(); */
     //   return true;
   /*  }
    else
    {

        if(inputText==undefined)
        {
            document.getElementById('lab').innerText="Enter Email ID!";
        }

        else if(inputText.value.match(mailformat))
        {
            document.getElementById('lab').innerText="Valid Email ID!";

        }
        else
        {
            document.getElementById('lab').innerText="You have entered an invalid email address!";
           
        }*/


        /* document.form1.text1.focus(); */
  /*       return false;
    }
}  */


$(document).ready(function(){
    $("#btnUser").click(function(){
        $('#loginForm').submit(function(e){   
            e.preventDefault();
        })
        var username = $("#username").val();//value get
    
        var password = $("#password").val();

        if(username=="" || password=="")
        {
            window.alert("pls fill all details");
        }
        else
        {
           var arr ={
               email:username,
               password:password
           }
           var jsond=JSON.stringify(arr);
           console.log(jsond);

            //     ajaxRequest= $.ajax({
            //     url: "https://shipzy.site/Api/AdminApi.php",
            //     contentType:"application/json",
            //     type: "POST",
            //     data:jsond
            // });

            // ajaxRequest.always(function(e)
            // {
            //     console.log(e.data.token);
            // });
         
            //  fetch data ----------------------------------------------------------------------------------------//
            // var request = {};
            // request.type = 'GET';
            // request.contentType = 'application/json; charset=utf-8';
            // request.dataType = 'json';
            // request.data = JSON.stringify(arr);
            // request.url = "https://shipzy.site/Api/AduserApi.php";
            // request.beforeSend = function (xhr) {
            //     xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJuYW1lIjoic2FjaGluIiwiZW1haWwiOiJzYWNoaW5AZ21haWwuY29tIiwidGltZSI6IjAyXC8wMVwvMjIgMDE6NTQgNzE0MyJ9.0-FQtfcmCSgU-RO5q7pQQD7GJpwFPIfCTnFip3iiTdQ");
            // };
    
            // request.processData = false;
            // req=$.ajax(request);
        

            // req.always(function(e)
            // {
            //     console.log(e);
            // });

            //------------------------------------------------------------------------------------------------//

                ajaxRequest= $.ajax({
                url: "https://shipzy.site/Api/AduserApi.php",
                contentType:"application/json",
                headers:{
                    'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJuYW1lIjoic2FjaGluIiwiZW1haWwiOiJzYWNoaW5AZ21haWwuY29tIiwidGltZSI6IjAyXC8wMVwvMjIgMDI6NTIgNjcxNiJ9.n2epYBN14e2Z0O6-QU8z2GPCUKeRbZeHyNsWlUM1W9M'
                },
                type: "GET",
                // data:jsond
            });

            ajaxRequest.always(function(e)
            {
                console.log(e);
            });

            

        }

    });
});