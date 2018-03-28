$("document").ready(function(){
    
    var winHight = $(window).height();
    var hight = winHight - 50;
    
    $(".codeContainer").css("height",hight+"px");
    
    $("iframe").css("height",hight+"px");
    $(".jsContainer").css("height",hight+"px");
    $(".cssContainer").css("height",hight+"px");
    
    
    $(".toggle").click(function(){
        
        $(this).toggleClass("selected");
        
        var activeDiv = $(this).html();
        
        $("#"+activeDiv+"Container").toggle();
        
        $("#"+activeDiv+"Container").toggleClass("selectedDiv");
   
       /*----------------------------*/
        
        var showing = 0;
        if($(".cssContainer").css("display")=="block")
            {
                showing++;
            }
        if($(".jsContainer").css("display")=="block")
            {
                showing++;
            }
        if($(".codeContainer").css("display")=="block")
            {
                showing++;
            }
        if($(".resultContainer").css("display")=="block")
            {
                showing++;
            }

        	var width=100/showing;
        	$(".selectedDiv").css("width",width+"%");
        
    });
    
    $("#runBtn").click(function(){
        var htmlCode = $("#htmlCode").val();
        var csslCode = $("#cssCode").val();
        var jsCode = $("#jsCode").val();
        $("iframe").contents().find("html").html('<style>'+csslCode+'</style>'+htmlCode);
        
        document.getElementById("resultIframe").contentWindow.eval(jsCode);
    })
});