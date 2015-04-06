$(window).load(function(){
    
    var results, fromtop, cur, wh;
    
    $('.menu').on('click', function(e){
        e.preventDefault();
        $('main, nav, .menu, header h1 a').toggleClass('open');
    });
    
    function workbox(){
        $('.Small, .Medium, .X-Large').each(function(){
            $(this).height($('.Small').width());
        });
    }   
    
    function sizes(){
        wh = $(window).height(),
        ww = $(window).width();
        $('#home, .images ul li')
            .css({
                'height':wh,
                'width':ww
            });
        $('.welcome').css('padding-top',((wh/2)-($('.welcome').height()/2)));
        return wh;
    }   sizes();
    
    function icons(array){
        $.each(array, function(i, item){
            array[i] = array[i]
                        .replace('design','paint-brush')
                        .replace('html/css','html5')
                        .replace('jquery','code')
                        .replace('digital producer','gears')
                        .replace('seo','search')
                        .replace('email','envelope')
                        .replace('photography','camera');
        });
    }
    
    $(window).resize(function(){
        workbox();
        sizes();
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > wh){
            $('header').addClass('swap');
        } else {
            $('header').removeClass('swap');
        }
    });

    Prismic.Api('https://byhamilton.cdn.prismic.io/api', function (err, Api) {
        Api.form('everything')
            .ref(Api.master())
            .query(Prismic.Predicates.at("document.type", "project"))
            .orderings('[my.project.order]')
            .submit(function (err, response) {
            
                results = response.results;
            
                $.each(results, function(i, item){
                    var content = {
                            title : results[i]['fragments']['project.title']['value'][0]['text'],
                            size : results[i]['fragments']['project.size']['value'],
                            hero : results[i]['fragments']['project.hero']['value']['main']['url'],
                            slug : results[i]['slug'],
                            details : results[i]['tags'].sort()
                        };  icons(content.details);
        
                    $($.parseHTML(Handlebars.templates['project.hbs'](content))).appendTo('.projects');
                    workbox();
                    
                });//each  
                $('<div class="buffer" />').appendTo('.projects');
                if(window.location.hash){
                    goto(window.location.hash.replace('#/',''));
                }
            });//result
    });//API
    
    function goto(project){
        $('body,html').finish();
        if(!project) project == 'home';
        if(project=='home'||project=='about'||project=='work'||project=='contact'){
            
            offset = $('#'+project).offset();
            $('body, html').animate({'scrollTop':offset.top}, 800, 'easeOutExpo');
            close(offset.top);
            if($(window).width()<481) $('main, nav, .menu, header h1 a').removeClass('open');
            return false;
            
        }
        $.each(results, function(i, item){
            if(results[i]['slug']==project){

                src = $('#showcase-template').html(),
                fromtop = $(window).scrollTop(),
                content = {
                    title : results[i]['fragments']['project.title']['value'][0]['text'],
                    size : results[i]['fragments']['project.size']['value'],
                    details : results[i]['tags'],
                    gallery : results[i]['fragments']['project.gallery']['value'],
                    site : results[i]['fragments']['project.site']['value'][0]['text']
                };  icons(content.details);
                
            }//if
        });//each
        $($.parseHTML(Handlebars.templates['showcase.hbs'](content)))
            .appendTo('body')
            .find('.images ul li')
            .eq(0)
            .addClass('active');
            sizes(); 
        $('body')
            .find('.showcase-overlay')
            .animate({'right':0}, 600, 'easeOutExpo', function(){
                $('html, body').addClass('open');
            });
        $('body')
            .find('.showcase-overlay .images')
            .delay(100)
            .animate({'right':0}, 600, 'easeOutExpo');
        $('.showcase-close a').on('click', function(e){ close(fromtop); });
        $('main').addClass('open-right');
        $('header').addClass('swap-stick');
        $('.social').fadeOut(300);
        $('.images a').on('click', function(e){
            e.preventDefault();
            slider($(this).attr('class'));
        });        
        $('.showcase-popup span').hover(function(){
            $('.key').addClass('open');
        }, function(){
            $('.key').removeClass('open');
        });
    }
    
    function close(fromtop){
        $('html, body').removeClass('open');
        var url = window.location.hash;
        if(!fromtop) fromtop = 0;
        if(!(fromtop==$(window).scrollTop())) {
            $('body, html').animate({'scrollTop':fromtop}, 300, 'easeOutExpo');
        }
        $('.showcase-overlay').animate({'right':'-125%'}, 600, 'easeOutExpo', function(){
            $('.showcase-close, .showcase-popup, .showcase-overlay').remove();
            $('header').removeClass('swap-stick');
            $('.social').fadeIn(300);
        });
        $('.showcase-close, .showcase-popup').fadeOut(300);  
        $('main').removeClass('open-right');
        if(url=="#/home"||url=="#/about"||url=="#/work"||url=="#/contact") return false;
        window.location.hash = '#/';        
    }
    
    function slider(go){
        el = '.images ul li';
        num = $(el).length,
        cur = ($(el+'.active').index())+1;
        if(go=='previous'){
            if(cur==1) {
                $('.active').removeClass('active');
                $(el).eq(num-1).addClass('active');
                cur = num;
            } else {
                $('.active')
                    .removeClass('active')
                    .prev()
                    .addClass('active');
                cur--;
            }            
        } else if(go=='next'){
            if(cur==num) {
                $('.active').removeClass('active');
                $(el).eq(0).addClass('active');
                cur = 1;
            } else {
                $('.active')
                    .removeClass('active')
                    .next()
                    .addClass('active');
                cur++;
            } 
        }
    }

    $(window).hashchange( function(){
        var url = window.location.hash;
        if(!url||url=="#/"){
            close(fromtop);
        } else {
            goto(url.replace('#/',''));
        }
    });
    
    $('a').on('click', function(){
        var url = $(this).attr('href');
        if(window.location.hash==url) {
            window.location.hash = '#/'+url;
        }
    });
    
    $('.social a, .ext').attr('target','_blank');
    
    $("html, body").on("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
        $('html, body').finish();
    });
  
    
});
var s = skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
        return false;
    }
});