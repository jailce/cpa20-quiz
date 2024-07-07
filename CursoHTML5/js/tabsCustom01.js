$.fn.tabbing = function (options) {
    var opts = {delayTime : 300};
    options = options || {};
    opts = $.extend(opts,options);    
    return this.each(function () {
        $(this).on('click', function (event) {
            event.preventDefault();
            var sum = 0;
            $(this).prevAll().each(function(){  sum += $(this).width();});
          var get = document.getElementById('tabs').scrollWidth
            var dist = sum - ( $(this).parent().width() - $(this).width()) / 2;
          if(dist < 0){
            dist = 0;
          }
          /* else if(dist+sum > get){
            dist = get-sum+dist+dist;
          } */
            $(this).parent().animate({
                scrollLeft: dist
            },opts['delayTime']);
        });
    });
};
$('#tabs li').tabbing();


$('#tabs li').click(function(){
  var  hashit = $(this).find('a').attr('href')
  var autoHeight = $(hashit).height() + 30;
$('.tab-content').animate({height: autoHeight}, 100);
});