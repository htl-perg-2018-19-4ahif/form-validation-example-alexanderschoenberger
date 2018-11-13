$(document).ready(function () {
    let bool: any = {
        email: true,
        firstname: false,
        lastname: false
    };
    $('#emailMandatory').hide();
    $('#otherMediaChannel').hide();
    checkSubmit();

    $('#newsletter').change(function () {
        if ($('#newsletter').is(':checked') && $('#email').val() == '') {
            $('#emailMandatory').show();
            bool.email = false;
        } else {
            $('#emailMandatory').hide();
            bool.email = true;
            
        }
        checkSubmit();
    });
    
    onOrOff('#firstName', '#firstNameMandatory');
    onOrOff('#lastName', '#lastNameMandatory');
    onOrOff('#email', '#emailMandatory');
    onOrOff('#mediaChannelSelect', '#otherMediaChannel');

    function onOrOff(InputId: String,id:String){
        $(InputId).change(function () {
            if ($(InputId).val() == 'Other') {
                $(id).show();
                bool[InputId.slice(1,InputId.length)]=false;
            } else {
                $(id).hide();
                bool[InputId.slice(1,InputId.length)]=true;
            }
            checkSubmit();
        });
    }
    
    function checkSubmit(){
        if(bool.email && bool.firstName && bool.lastName){
            $('.btn-primary').prop('disabled',false);
        } else {
            $('.btn-primary').prop('disabled',true);
        }
    }
});