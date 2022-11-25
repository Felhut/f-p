$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Ach komm schon, du wirst a wohl einen Namen haben?",
                    minlength: "Dein Name muss mindestens 2 Zeichen lang sein"
                },
                subject: {
                    required: "Komm schon, du hast bestimmt ein Thema, nicht?",
                    minlength: "Dein Thema muss mindestens 4 Zeichen lang sein"
                },
                number: {
                    required: "Komm schon, du hast bestimmt eine Handynummer, nicht?",
                    minlength: "Deine Nummer muss mindestens 5 Zeichen lang sein"
                },
                email: {
                    required: "keine E-Mail, keine Nachricht"
                },
                message: {
                    required: "Hmm, Vielleicht solltest du etwas schreiben bevor du das Formular abschickst",
                    minlength: "Das ist alles, wirklich?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})