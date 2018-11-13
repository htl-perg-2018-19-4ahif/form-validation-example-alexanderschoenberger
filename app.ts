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

    $('#mediaChannelSelect').change(function () {
        if ($('#mediaChannelSelect').val() == 'Other') {
            $('#otherMediaChannel').show();
        } else {
            $('#otherMediaChannel').hide();
        }
    });
    
    onOrOff('#firstName', '#firstNameMandatory');
    onOrOff('#lastName', '#lastNameMandatory');
    onOrOff('#email', '#emailMandatory');

    function onOrOff(InputId: String, id: String) {
        $(InputId).change(function () {
            if ($(InputId).val() == '') {
                $(id).show();
                bool[InputId.slice(1, InputId.length)] = false;
            } else {
                $(id).hide();
                bool[InputId.slice(1, InputId.length)] = true;
            }
            checkSubmit();
        });
    }

    function checkSubmit() {
        if (bool.email && bool.firstName && bool.lastName) {
            $('.btn-primary').prop('disabled', false);
        } else {
            $('.btn-primary').prop('disabled', true);
        }
    }
});