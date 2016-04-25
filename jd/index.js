$('.menu').hover(function() {
    $('#am_box').addClass('am_con am_con2');
}, function() {
    $('#am_box').attr('class', 'am_con');
});
$('.c1').hover(function() {
    $('.c1').attr('class','c1_hover');
    $('#am_box').attr('class', 'am_con am_con2 am_c1_1');
}, function() {
    $('.c1_hover').attr('class', 'c1');
});
$('.am_c1').hover(function() {
    $('.c1').attr('class','c1_hover');
}, function() {
    $('.c1_hover').attr('class', 'c1');
});
$('.c2').hover(function() {
    $('.c2').attr('class','c2_hover');
    $('#am_box').attr('class', 'am_con am_con2 am_c2_1');
}, function() {
    $('.c2_hover').attr('class', 'c2');
});
$('.am_c2').hover(function() {
    $('.c2').attr('class','c2_hover');
}, function() {
    $('.c2_hover').attr('class', 'c2');
});
/*--------------以上为全部分类导航栏-------------*/
var co=$('.like_con1>ul');
var ex=0;
$('#btn1').click(function(){
    $(co[ex]).css('display','none');
    ex++;
    if(ex===3){
        ex=0;
    }
    $(co[ex]).css('display','block');


});
/*--------------以上为换一换按钮-------------*/
var butt=$('.slider-nav>li');
var con=$('.slider-main>li');

var selectedI=1;
butt.each(function(i){

    $(butt[i]).mouseenter(function(){
        /*if(i===selectedI){
            return;
        }*/
        if($(butt[i]).hasClass('.slider-item-selected')){
            return;
        }
        var z=$('.slider-item.slider-item-selected');
        if(z[0]===$(butt[i])[0]){
            return;
        }
        selectedI=i;
        var y=$('.slider-panel.slider-panel-selected');
        z.removeClass('slider-item-selected');
        y.removeClass('slider-panel-selected').fadeOut();
        $(butt[i]).addClass('slider-item-selected');
        $(con[i]).addClass('slider-panel-selected').fadeIn();
    });
});
var i=1;
setInterval(function(){
    $(butt[i]).trigger('mouseenter');
    i++;
    if(i===butt.length){
        i=0;
    }
},3000);



/*var butt=$('.slider-nav>li').each(function(i){
    var $this=$(this);
    // this.index=i;
    $this.data('index',i);
}).click(function(){
    var $this=$(this);
    var i=$this.data('index');

    var z=$('.slider-item.slider-item-selected');
    z.removeClass('slider-item-selected');

    var y=$('.slider-panel.slider-panel-selected');
    y.removeClass('slider-panel-selected').fadeOut();
    
    $(butt[i]).addClass('slider-item-selected');
    $(con[i]).addClass('slider-panel-selected').fadeIn();
});
*/
/*--------------以上为轮播图-------------*/
var tabs=$('.clothes_tab>li');
tabs.each(function(t){
    $(tabs[t]).mouseenter(function(){
        if($(tabs[t]).hasClass('clothes_selected')){
        return;
        }
        var s_tab=$('.clothes_tab .clothes_selected');
        $(s_tab).removeClass('clothes_selected');
        $(tabs[t]).addClass('clothes_selected');
        var s_right=$('.clothes_con .con_right_selected');
        $(s_right).removeClass('con_right_selected');
        $('div.con_right'+(t+1)+'').addClass('con_right_selected');
    });
});
/*--------------以上为服装鞋包tab------------*/