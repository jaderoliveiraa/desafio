var courses;
if (localStorage.getItem("seach_courses") === null) {
    request();
} else {
    var dataLocal = localStorage.getItem("date");
    var data = dateSystem();
    if (dataLocal === data) {
        courses = $.parseJSON(localStorage.getItem("seach_courses"));
    } else {
        request();
    }

}
function request() {
    var data = dateSystem();
    $.ajax({
        url: base_url + 'ava/controle.php?listCoursesAutoComplete=true',
        async: false,
        success: function (response) {
            localStorage.setItem("seach_courses", response);
            courses = $.parseJSON(response);
            localStorage.setItem("date", data);
        }
    });
}
function dateSystem(){
    var now = new Date();
    var dia = now.getDate();
    var mes = now.getMonth();
    var ano = now.getFullYear();
    return  dia+"/"+mes+"/"+ano;
}