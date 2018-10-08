$(function(){
    function slide(num){
        $(".list2").eq(num).mouseenter(function(){
            $(".cx").eq(num).slideDown();
        })
        $(".list2").eq(num).mouseleave(function(){
            $(".cx").eq(num).slideUp();
        })
    }
   slide(0);
   slide(1);
   slide(2);
   slide(3);
   slide(4);
   slide(5);
})