
$('#openModal').on('click', function () {
    $('.modal').removeClass('none')
});
$('#close').on('click', function () {
    $('.modal').addClass('none')
});
$('#last').on('click', function () {
    $('#last').toggleClass('activ');
    $('#week').removeClass('activ');
    $('#month').removeClass('activ');
});
$('#week').on('click', function () {
    $('#week').toggleClass('activ');
    $('#last').removeClass('activ');
    $('#month').removeClass('activ');
});
$('#month').on('click', function () {
    $('#month').toggleClass('activ');
    $('#last').removeClass('activ');
    $('#week').removeClass('activ');
});
$('#notification').on('click', function () {
    $('.window').removeClass('none')
});
$('#closeWindow').on('click', function () {
    $('.window').addClass('none')
});
$('#search').on('click', function () {
    $('.input').removeClass('none')
});
$('#closeInput').on('click', function () {
    $('.input').addClass('none')
});

$('#send').on('click', function () {
    var lastResFind="";
    var copy_page="";
    function TrimStr(s) {
        s = s.replace( /^\s+/g, '');
        return s.replace( /\s+$/g, '');
    }
    function FindOnPage() {
        var obj = $('#inputId').val();
        var textToFind;

        if (obj) {
            textToFind = TrimStr(obj);
        } else {
            alert("Введенная фраза не найдена");
            return;
        }
        if (textToFind == "") {
            alert("Вы ничего не ввели");
            return;
        }

        if(document.body.innerHTML.indexOf(textToFind)=="-1")
            alert("Ничего не найдено, проверьте правильность ввода!");

      //  if(copy_page.length>0)
        //    document.body.innerHTML=copy_page;
       // else copy_page=document.body.innerHTML;


     //document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
        document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<span  style='background:red'>"+textToFind+"</span>");
       //lastResFind=textToFind;

    }
    FindOnPage(inputId);
});


