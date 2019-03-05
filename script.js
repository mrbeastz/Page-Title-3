$("img").dblclick(
    function(){
        $(".shoots").text("messi shoot");  
        $("body").css("background-color","aqua "); 
    }
);



$(".is-me").hover(function(){
    $(".is-me").text("go and mouseenter the title ");
     $(".is-me").css("background-color","yellow ");
   $(".mess").attr("src" , "https://cdn.vox-cdn.com/thumbor/MRWUIC_K2N3olJbqhwLXWbFqv1w=/0x0:4500x3001/1200x800/filters:focal(1930x526:2650x1246)/cdn.vox-cdn.com/uploads/chorus_image/image/60938603/1018932882.jpg.0.jpg");
     });
     
     
     $(".messi").click(
    function(){
        $("#shoots").text("you reach your goal");
        $("body").css("background-color","aqua "); 
         $(".messi").attr("src" , "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F73f9587e-3db7-11e8-b8eb-a2b1e54e4e88.jpg?crop=2840%2C1597%2C86%2C379&resize=685");
    }
);

$(".trophy").mouseenter(
    function(){
    $(".messi").attr("src" , "https://images.homedepot-static.com/productImages/b582ce97-baf9-4e91-a8a3-6f3e7f91af9b/svn/brown-vintiquewise-storage-baskets-qi003032-64_1000.jpg");
    $(".is-me").hide();
});

$(".trophy").mouseleave(
    function(){
    $(".messi").attr("src" , "http://guideimg.alibaba.com/images/shop/73/08/21/0/2014-fifa-world-cup-brasil-resin-gold-soccer-mini-replica-trophy-futbol-2-75-tall-7-cm_3325540.jpg");
    $(".is-me").hide();
});
