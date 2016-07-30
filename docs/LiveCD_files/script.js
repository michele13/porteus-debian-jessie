$(document).ready(function() {

    // Mobile menu
    var test = '<!--mobmenu -->';
    var footermenu = $('#footermenu').html();
    $('.showmenu').click(function(e){
        if (test == $('#mobmenu').html()){
            $('#mobmenu').html(footermenu);
        }
        $('.drop').each(function(index) {
            var a = $(this).attr('style');
            var r = /block/;
            var id = $(this).attr('id');
            if(r.test(a) && id != "mobmenu"){ 
                $(this).slideToggle();
            } 
        });
        $('#mobmenu').slideToggle();
        e.preventDefault();
    });
    $(window).resize(function() {
        $('.drop').each(function(index) {
            var a = $(this).attr('style');
            var r = /block/;
            var id = $(this).attr('id');
            if(r.test(a)){ 
                $(this).hide();
            } 
        });
        $('#brdmenu ul').attr('style','');
    }).resize();
    // Forum menu
    $('#brdmenubutton').click(function(e){
        $('#brdmenu ul').slideToggle();
        e.preventDefault();
    });
    // Search
    $('#sitemenu .live').click(function(e){
        $('.drop').each(function(index) {
            var a = $(this).attr('style');
            var r = /block/;
            var id = $(this).attr('id');
            if(r.test(a) && id != "livesearch"){ 
                $(this).slideToggle();
            } 
        });
        $('#livesearch').slideToggle();
        
        var lastsearch = $.cookie('livesearch');
        if (lastsearch != null || lastsearch != '') {
            $('#s').val(lastsearch);
            $('#s').select();
        }
        
        $('#s').focus();
        e.preventDefault();
    });

	// Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),
    // The element that is fluid width
    $fluidEl = $(".postmsg");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        $(this)
            .data('aspectRatio', this.height / this.width)
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');
        });
    // When the window is resized
    $(window).resize(function() {
        var widthnow = $(".postmsg").width();
        if (widthnow >= 710 ) {
            var newWidth = 510;
        } else {
            var newWidth = $fluidEl.width();
        }
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
            var $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));
        });
        // Kick off one resize to fix all videos on page load
    }).resize();

    var s = '<div class="community_info">';
    s = s + '<div class="irc">';
    s = s + '<h4><span class="darklight">Internet Relay Chat</span></h4>';
    s = s + '<p>Get live help and chat with other CrunchBang users in the official #! Freenode IRC channels.</p>';
    s = s + '</div>';
    s = s + '<div class="twitter">';
    s = s + '<h4><span class="darklight">Follow @CrunchBang</span></h4>';
    s = s + '<p>Follow the CrunchBang Twitter account for news, development updates and more.</p>';
    s = s + '</div>';
    s = s + '<a href="#" title="close" class="community_info_close ir">close</a>';
    s = s + '</div>';
    //$('.community_info_wrapper').html(s);

    //$.cookie('community_info', 'true', {expires: -1, path: '/'});
    $('.community_info_close').live("click", function(e){
        $('.community_info').slideToggle();
        $.cookie('community_info', 'true', {expires: 365, path: '/'});
        e.preventDefault();
    });

    $('.community_info .twitter').live("click", function(e){
        window.location = 'http://twitter.com/crunchbang';
        e.preventDefault();
    });

    $('.community_info .irc').live("click", function(e){
        window.location = 'http://crunchbang.org/forums/viewtopic.php?id=22776';
        e.preventDefault();
    });

    $('.community_info .linode').live("click", function(e){
        window.location = 'http://www.linode.com/?r=d37cc8c4a3d1569564ed6520e4053df8b9da2388';
        e.preventDefault();
    });

    $('.community_info .dreamhost').live("click", function(e){
        window.location = 'http://www.dreamhost.com/r.cgi?366152';
        e.preventDefault();
    });

});