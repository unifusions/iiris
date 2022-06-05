import flatpickr from "flatpickr";

import jquery from 'jquery';

require("flatpickr/dist/themes/light.css");
require("flatpickr/dist/plugins/monthSelect/style.css");

const monthSelect = require("flatpickr/dist/plugins/monthSelect/index");

flatpickr(".calendar", {
  altInput: true,
  altFormat: 'd/m/Y',
  dateFormat: 'Y-m-d',
  maxDate: 'today',
});


var $ = jquery;


var height, weight;
$("#height").change(function () {
  height = $('#height').val();


});

$("#weight").change(function () {
  weight = $('#weight').val();

});

$('#bsa').focus(function () {
  var bsa = (height * weight) / 3600
  $(this).val(Math.sqrt(bsa).toFixed(2))
})


//Operative Symptoms


$('#symptoms').click(function () {
  if ($(this).is(":checked")) {
    $('#angina').attr('disabled', false);
    $('#dyspnea').attr('disabled', false);
    $('#syncope').attr('disabled', false);
    $('#palpitation').attr('disabled', false);
    $('#giddiness').attr('disabled', false);
    $('#fever').attr('disabled', false);
    $('#heart_failure_admission').attr('disabled', false);
    $('#others').attr('disabled', false);
  }
  else {
    $('#angina').attr('disabled', true).prop('checked', false).change();
    $('#dyspnea').attr('disabled', true).prop('checked', false).change();;
    $('#syncope').attr('disabled', true).prop('checked', false).change();
    $('#palpitation').attr('disabled', true).prop('checked', false).change();
    $('#giddiness').attr('disabled', true).prop('checked', false).change();
    $('#fever').attr('disabled', true).prop('checked', false).change();
    $('#heart_failure_admission').attr('disabled', true).prop('checked', false).change();
    $('#others').attr('disabled', true).prop('checked', false).change();

  }
})

$('#angina').change(function () {
  if ($(this).is(":checked")) {
    $('#angina_class').addClass('show').removeClass('hide');
    $('#angina_duration').addClass('show').removeClass('hide');

  }
  else {
    $('#angina_class').addClass('hide').removeClass('show');
    $('#angina_duration').addClass('hide').removeClass('show');
  }
});

$('#dyspnea').change(function () {
  if ($(this).is(":checked")) {
    $('#dyspnea_class').addClass('show').removeClass('hide');
    $('#dyspnea_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#dyspnea_class').addClass('hide').removeClass('show');
    $('#dyspnea_duration').addClass('hide').removeClass('show');
  }
});

$('#syncope').change(function () {
  if ($(this).is(":checked")) {
    $('#syncope_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#syncope_duration').addClass('hide').removeClass('show');
  }
});

$('#palpitation').change(function () {
  if ($(this).is(":checked")) {
    $('#palpitation_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#palpitation_duration').addClass('hide').removeClass('show');
  }
});

$('#giddiness').change(function () {
  if ($(this).is(":checked")) {
    $('#giddiness_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#giddiness_duration').addClass('hide').removeClass('show');
  }
});

$('#fever').change(function () {
  if ($(this).is(":checked")) {
    $('#fever_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#fever_duration').addClass('hide').removeClass('show');
  }
});

$('#heart_failure_admission').change(function () {
  if ($(this).is(":checked")) {
    $('#heart_failure_admission_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#heart_failure_admission_duration').addClass('hide').removeClass('show');
  }
});

$('#others').change(function () {
  if ($(this).is(":checked")) {
    $('#others_text').addClass('show').removeClass('hide');
    $('#others_duration').addClass('show').removeClass('hide');
  }
  else {
    $('#others_text').addClass('hide').removeClass('show');
    $('#others_duration').addClass('hide').removeClass('show');
  }
});


$('input[name="rhythm"]').change(function () {
  if ($('#rhythmothers').is(":checked")) {
    $('#rhythmothers_text').addClass('show').removeClass('hide');
  }
  else {
    $('#rhythmothers_text').addClass('hide').removeClass('show');
  }
});


//Electrocardiogram

//Personal History

$('input[name ="smoking"]').change(function () {
  var smokingStatus = $('input[name = "smoking"]:checked').val();
  if (smokingStatus === 'Never') {
    $('#smoking_wrapper').hide('fast');
  }
  else if (smokingStatus === 'Used To') {
    $('#smoking_wrapper').show('fast');
    flatpickr("#smokingSince", {
      maxDate: 'today',
      allowInput: true,
      plugins: [
        new monthSelect({
          theme: 'light'
        })
      ]
    });
    $('#smokingStoppedSince').removeAttr('disabled')

  }
  else {
    $('#smoking_wrapper').show('fast');
    flatpickr('#smokingStoppedSince').destroy();
    $('#smokingStoppedSince').val('');
    $('#smokingStoppedSince').attr('disabled', true)
    flatpickr("#smokingSince", {
      maxDate: 'today',
      altInput: 'm.Y',
      dateFormat: 'Y-m',
      allowInput: true,
      plugins: [
        new monthSelect({

          theme: 'light'
        })
      ]
    });
  }
});

$("#smokingSince").change(function () {
  var smokingSinceMY = $('#smokingSince').val();
  console.log(new Date(smokingSinceMY));
  flatpickr("#smokingStoppedSince", {
    maxDate: 'today',
    minDate: new Date(smokingSinceMY),
    allowInput: true,
    plugins: [
      new monthSelect({

        theme: 'light'
      })
    ]
  });

});

$('input[name ="alcohol"]').change(function () {
  var alcoholStatus = $('input[name = "alcohol"]:checked').val();
  if (alcoholStatus == 'Never') {
    $('#alcohol_wrapper').hide('fast');
  }
  else if (alcoholStatus == 'Used To') {
    $('#alcohol_wrapper').show('fast');
    flatpickr("#alcoholSince", {
      maxDate: 'today',
      allowInput: true,
      plugins: [
        new monthSelect({
          theme: 'light'
        })
      ]
    });
    $('#alcoholStoppedSince').removeAttr('disabled')

  }
  else {
    $('#alcohol_wrapper').show('fast');
    flatpickr('#alcoholStoppedSince').destroy();
    $('#alcoholStoppedSince').val('');
    $('#alcoholStoppedSince').attr('disabled', true)
    flatpickr("#alcoholSince", {
      maxDate: 'today',
      altInput: 'm.Y',
      dateFormat: 'Y-m',
      allowInput: true,
      plugins: [
        new monthSelect({

          theme: 'light'
        })
      ]
    });

  }
});


$("#alcoholSince").change(function () {
  var alcoholSince = $('#alcoholSince').val();
  console.log(new Date(alcoholSince));
  flatpickr("#alcoholStoppedSince", {
    maxDate: 'today',
    minDate: new Date(alcoholSince),
    allowInput: true,
    plugins: [new monthSelect({ theme: 'light' })]
  });

});

$('input[name ="tobacco"]').change(function () {
  var tobaccoStatus = $('input[name = "tobacco"]:checked').val();
  if (tobaccoStatus === 'Never') {
    $('#tobacco_wrapper').hide('fast');
  }
  else if(tobaccoStatus === 'Used To') {
    $('#tobacco_wrapper').show('fast');
    flatpickr("#tobaccoSince", {
      maxDate: 'today',
      allowInput: true,
      plugins: [new monthSelect({theme: 'light'})]
    });
    $('#tobaccoStoppedSince').removeAttr('disabled')
  }
  else{
    $('#tobacco_wrapper').show('fast');
    flatpickr('#tobaccoStoppedSince').destroy();
    $('#tobaccoStoppedSince').val('');
    $('#tobaccoStoppedSince').attr('disabled', true)
    flatpickr("#tobaccoSince", {
      maxDate: 'today',
      altInput: 'm.Y',
      dateFormat: 'Y-m',
      allowInput: true,
      plugins: [new monthSelect({theme: 'light'})]
    });
  }
});


$("#tobaccoSince").change(function () {
  var alcoholSince = $('#tobaccoSince').val();
  console.log(new Date(alcoholSince));
  flatpickr("#tobaccoStoppedSince", {
    maxDate: 'today',
    minDate: new Date(alcoholSince),
    allowInput: true,
    plugins: [new monthSelect({ theme: 'light' })]
  });

});

// Medications

$('#medication_status').change(function () {
  var status = $(this).children("option:selected").val();

  if (status === 'ongoing') {

    $('#date_label').text('Start Date');
    $('#discontinuationWrapper').hide('fast');
    flatpickr("#medication_date", {
      mode: 'single',
      allowInput: true,
      maxDate: 'today',
      onChange: [function (selectedDate) {
        const dateArr = selectedDate.map(date => this.formatDate(date, "Y-m-d"));
        $('#mstart_date').val(dateArr[0])
      }]
    });
  }

  else if (status === 'discontinued') {

    $('#discontinuationWrapper').show('fast');
    $('#date_label').text('Start & Stop Date');
    flatpickr("#medication_date", {
      allowInput: true,
      mode: 'range',
      altInput: true,
      altFormat: 'd/m/Y',
      dateFormat: 'Y-m-d',
      maxDate: 'today',
      onChange: [function (selectedDates) {
        const dateArr = selectedDates.map(date => this.formatDate(date, "Y-m-d"));
        $('#mstart_date').val(dateArr[0])
        $('#mstop_date').val(dateArr[1])
      }]

    });
  }
  else {


  }
});
