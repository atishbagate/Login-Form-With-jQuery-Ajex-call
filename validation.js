    $(function() {

        $.validator.setDefaults({
          errorClass: 'help-block', //this is Bootstraps custom error handling block
          highlight: function(element) {
            $(element)
              .closest('.form-group')
              .addClass('has-error');
          },
          unhighlight: function(element) { //canceling custom error handling by validator.
            $(element)
              .closest('.form-group')
              .removeClass('has-error');
          },
          errorPlacement: function (error, element) { //custom placements of error messages 
            if (element.prop('type') === 'checkbox') {
              error.insertAfter(element.parent());
            } else {
              error.insertAfter(element);
            }
          }
        });
      
        //this are custom validation created.
        $.validator.addMethod('strongPassword', function(value, element) {
          return this.optional(element) || value.length >= 6 && /\d/.test(value) && /[a-z]/i.test(value);
        }, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')
      
      //validation for Indian Mobile Number
      $.validator.addMethod('IndianNumber', function(value, element,regexp){
         if (regexp.constructor != RegExp)
                        regexp = new RegExp(regexp);
                    else if (regexp.global)
                        regexp.lastIndex = 0;
                    return this.optional(element) || regexp.test(value);
                },"Please enter 10 digit number with +91 in starting. and remove spaces");
      
      //custom method for checking the valid emails
    $.validator.addMethod(
      "customEmail",
      function (value, element) {
        return (
          this.optional(element) ||
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            value
          )
        );
      },
      "Please enter valid email address!"
    );
    
      
        $("#form").validate({
          rules:{
            inputFname: {
                required: true,
                nowhitespace: true,
                lettersonly: true
              },
              inputLname: {
                required: true,
                nowhitespace: true,
                lettersonly: true
              },
              inputEmail: {
              required: true,
              email: true,
              customEmail:true
            },
            inputPassword: {
              required: true,
              
            },
            address1:{
              required:true
            },
            address2:{
              required:true
            },
            city:{
              required:true
            },
            state:{
              required:true
            },
            Zip:{
              required: true,
              number: true
            },
            terms: {
              required: true
            }
          },
          messages: {
            inputEmail: {
              required: 'Please enter an email address.',
              email: 'Please enter a <em>valid</em> email address.',
            },
            inputFname: {
              required: 'Please enter first name',
              fname: 'only alphabets allowed',
            },
            inputLname:{
              required: 'Please enter last name',
              lname: 'only alphabets allowed',
            },
            inputPassword:{
              required: 'Please enter Password',
            },
            address1:{
              required:"enter address"
            },
            address2:{
              required:"add near by landmark"
            },
            city:{
              required:"enter city name"
            },
            state:{
              required:"state reqired"
            },
            Zip:{
              required:"Zip code required",
              number: "numbers only"
            },
            terms:{
              required:"term must aggree"
            }

          }
        });
      
      });
