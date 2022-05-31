import flatpickr from "flatpickr";
import jquery from 'jquery';

require("flatpickr/dist/themes/dark.css");


flatpickr(".calendar", {
  altInput: true,
  altFormat: 'd/m/Y',
  dateFormat: 'Y-m-d',
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