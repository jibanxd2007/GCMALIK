$(function(){jQuery.validator.addMethod("noSpace",function(e,r){return!!e.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)}),jQuery.validator.addMethod("noSpaceAllowDigit",function(e,r){return!!e.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/)}),jQuery.validator.addMethod("emailValid",function(e,r){return!!e.match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)}),jQuery.validator.addMethod("zeroSpace",function(e,r){return e.indexOf(" ")<0&&""!=e},"No space please and don't leave it empty"),jQuery.validator.addMethod("pincodeValid",function(e,r){return!!e.match(/^[1-9][0-9]{5}$/)}),jQuery.validator.addMethod("mobileValid",function(e,r){return!!e.match(/^(6|7|8|9)\d{9}$/)}),$("#prodenq_form").validate({rules:{errorClass:"Error",errorElement:"label",full_name:{required:!0},mobile:{required:!0,mobileValid:!0},city:{required:!0},email:{required:!0}},messages:{full_name:{required:"Please Enter Full Name"},mobile:{required:"Please Enter 10-digit Mobile Number",mobileValid:"Please Input Valid Mobile Number"},city:{required:"Please Enter City Name"},email:{required:"Please Enter Email-id"}}}),$("#enq_form").validate({rules:{errorClass:"Error",errorElement:"label",full_name:{required:!0},email:{required:!0},mobile:{required:!0,mobileValid:!0}},messages:{full_name:{required:"Please Enter Name"},email:{required:"Please Enter Email Address"},mobile:{required:"Please Enter 10-digit Mobile Number",mobileValid:"Please Input Valid Mobile Number"}}})});