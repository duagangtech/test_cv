$('.ic-Login .support_url.help_dialog_trigger').hide();
$(document).ready(function() {
  if (($.inArray('student', ENV['current_user_roles']) == 1 || $.inArray('teacher', ENV['current_user_roles']) == 1) && $.inArray('admin', ENV['current_user_roles']) == -1) {
    $('.help_dialog_trigger').click(function() {
      var timeoutSeconds = 5;
      var date = new Date();
      var startTime = date.getTime();
      var link_to_hide, timerid;

      var checkForLink = function() {
        var diff = date.getTime() - startTime;

        link_to_hide = $('#help-dialog-options a[href=#create_ticket]').parent();
        link_to_mod = $('#help-dialog-options a[href="https://community.canvaslms.com/community/answers/guides/"]');

        if (diff >= timeoutSeconds * 1000 || (link_to_hide && link_to_hide.length !== 0)) {
          link_to_mod.show();
          if ($.inArray('teacher', ENV['current_user_roles']) == 0) {
            link_to_mod.attr('href', 'https://community.canvaslms.com/docs/DOC-4121');
          }
          clearInterval(timerid);
        }
      };

      timerid = setInterval(checkForLink, 100);
    });
  }

  // Set the date to August 26
  var date = new Date();
  date.setMonth(7); // August is 7 since months are 0-based
  date.setDate(26);
  
  // Format the date and time to your desired format
  var formattedDate = date.toDateString() + " " + date.toLocaleTimeString();

  // Update the content of the specified element with the formatted date and time
  $("#datetime_display").text(formattedDate);

});

window.ALLY_CFG = {
  'baseUrl': 'https://prod.ally.ac',
  'clientId': 5256
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');

if ($.inArray("admin", ENV.current_user_roles) == 0) {
  $("#course_visibility").show();
  // $("#course_visibility").prop("disabled", true);
  // window.alert("debug in if statement");
}
