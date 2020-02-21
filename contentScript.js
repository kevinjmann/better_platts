
window.addEventListener(
    'load',
    function () {
        if ($('[name="searchhws"]').get()) {

            //default entry word search to true
            $('[name="searchhws"]').get()[0].checked = true

            //convert extended arabic script chars
            $("#autocomplete-1").on("input", function () {
                if ($('#autocomplete-1').val().includes('ٹ')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ٹ', 'ٿ')
                    )
                }

                if ($('#autocomplete-1').val().includes('ڈ')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ڈ', 'ڐ')
                    )
                }

                if ($('#autocomplete-1').val().includes('ڑ')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ڑ', 'ڙ')
                    )
                }

                if ($('#autocomplete-1').val().includes('ھ')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ھ', 'ه')
                    )
                }

                if ($('#autocomplete-1').val().includes('ی')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ی','ي')
                    )
                }

                if ($('#autocomplete-1').val().includes('ہ')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ہ', 'ه')
                    )
                }

                if ($('#autocomplete-1').val().includes('ں')) {
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().replace('ں', 'ن')
                    )
                }


            });

            $("#autocomplete-1").on('focusout', function() {
                if ($('#autocomplete-1').val().endsWith('ک')){
                    $('#autocomplete-1').val(
                        $('#autocomplete-1').val().substring(0, $('#autocomplete-1').val().length-1)+'ك'
                    )
                }
            });
        }
    },
    false)
