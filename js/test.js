
  function load_pf($id) {
    var pfwrapp = $('#portfolio_ajax'),
    loader = $('#astrum-ajax-loader');

    loader.fadeIn();

    // $.ajax({
    //   url: astrum.ajaxurl,
    //   type:'POST',
    //   data: {
    //     action : 'astrum_ajax_portfolio',
    //     nonce : astrum.nonce,
    //     post: $id
    //   },

    var data = '<div class="added_item" id="post-1376">\n<!-- Container -->\n<!-- Slider -->\n<div class="eleven alpha alt columns">\n<section class="flexslider post-img">\n<div class="media">\n<ul class="slides mediaholder">\n<!-- 960 Container -->\n<li>\n<img src="http://astrum.purethemes.wpengine.com/files/2013/09/single-project-011-775x430.jpg" alt="Conrads Exit From The Lunar Module" />\n</li>\n<!-- 960 Container -->\n<li>\n<img src="http://astrum.purethemes.wpengine.com/files/2013/09/dfg-775x766.jpg" alt="Steps Upon The Moon\'s Surface" />\n</li>\n</ul>\n</div>\n</section>\n</div>\n<!-- Slider / End -->\n<div class="five omega columns">\n<a href="http://astrum.purethemes.wpengine.com/portfolio/moon-surface/">\n<h3 class="ajax_pf_title">Moon Surface</h3>\n</a>\n<div style="margin: -15px 0 0 0"></div>\n<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio curabitur lorem malesuada. Vestibulum a velit eu ante scelerisque vulputate aliquam egestas litora torquent.<br />\n<div class="clear"></div><br />\n<div class="list-3"></p>\n<ul style="margin-top: -20px;margin-bottom: -8px">\n<li>Branding</li>\n<li>HTML5 / CSS3</li>\n<li>Information Architecture</li>\n<li>Programming</li>\n</ul>\n<p></div><br />\n<a class="button medium color " href="#" >Launch Project </a></p>\n</div>\n</div>'

      function fuc(){
        if(data) {
          pfwrapp.slideUp(500,function(){
            $('.added_item').hide();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            pfwrapp.append(data).slideDown(500, function(){
              loader.fadeOut();
              $('.ajaxarrows').fadeIn();
              setTimeout(function() {
                astrumfn.flexinit();
              }, 500);
            });
          });
        } else {
          loader.fadeOut();
        }
      }
    // });
  }

$(document).ready(function(){

$(".portfolio-item-ajax").click(function(e) {
  e.preventDefault();
  var pfwrapp = $('#portfolio_ajax'),
  postid = $(this).attr('id').substring(5);

  $('#portfolio_ajax').append("<h3>booo</h3>");

    //if item was already added, just show it

    if($('#portfolio_ajax #post-'+postid).length>0) {
      pfwrapp.slideUp(500,function(){
        $('.added_item').hide();
        //pfwrapp.css({ display: 'none' })
        $('#portfolio_ajax #post-'+postid).show();
        pfwrapp.slideDown().data("current-id", postid);
        pfwrapp.parent().parent().fadeIn();
      });
    } else {

    //nah, we need to load it.

    load_pf(postid);
    pfwrapp.data("current-id", postid);

  }
  $('.ajaxarrows').removeClass('disabled');
 });
});
// $('#portfolio_ajax_wrapper .close').click(function(e){
//   e.preventDefault();
//   var pfwrapp = $('#portfolio_ajax');
//   pfwrapp.slideUp(500,function(){
//     $('.added_item').hide();
//   });
// });

// $("#portfolio_ajax_wrapper .ajaxarrows").click(function(e){
//   e.preventDefault();
//   var postid = $('#portfolio_ajax').data("current-id"),
//   side, ajax_action,
//   pfwrapp = $('#portfolio_ajax');

//   $('.ajaxarrows').removeClass('active'); $(this).addClass('active');
//   if($(this).hasClass("rightarrow")) {
//     side = '.rightarrow';
//   } else {
//     side = '.lefttarrow';
//   }

  // if(postid === 0) {
  //   if(side === '.rightarrow') {
  //     $('.rightarrow').fadeIn();
  //   } else {
  //     $('.leftarrow').fadeIn();
  //   }
  // } else {
  //   $('.ajaxarrows').removeClass('disabled');
  //   if(side === '.rightarrow') {
  //     ajax_action = 'astrum_get_prev_post_id';
  //   } else {
  //     ajax_action = 'astrum_get_next_post_id';
  //   }

//     $.ajax({
//       url: astrum.ajaxurl,
//       type:'POST',
//       data: {
//         action : ajax_action,
//         nonce : astrum.nonce,
//         post: postid
//       },
//       success: function(data){
//         if(data === 0){
//           if(side === '.rightarrow') {
//             $('.rightarrow').addClass('disabled');
//           } else {
//             $('.leftarrow').addClass('disabled');
//           }
//         } else {
//           if($('#portfolio_ajax #post-'+data).length>0) {
//             pfwrapp.slideUp(500,function(){
//               $('.added_item').hide();
//               pfwrapp.css({ display: 'none' });
//               $('#portfolio_ajax #post-'+data).show();
//               pfwrapp.slideDown().data("current-id", data);
//             });
//           } else {
//             load_pf(data);
//             pfwrapp.data("current-id", data);
//           }
//         }
//       }
//     });
//   }
// });
