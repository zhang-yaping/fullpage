$(function(){

    var canvas = document.querySelector('#line1');
    var ctx = canvas.getContext('2d');
        
      var drow= function(x,y){
        ctx.beginPath();
        ctx.strokeStyle="#ccc";
        ctx.moveTo(470,150);
        ctx.lineTo(520,150);
        ctx.lineTo(540,x);
        ctx.lineTo(560,y+50);
        ctx.lineTo(580,x+50);
        ctx.lineTo(600,y);
        ctx.lineTo(610,150);
        ctx.lineTo(1180,150);
        ctx.lineTo(1180,700);
        ctx.stroke();  
      }
      var x = 110;
      var y = 170;
      var s = 1;
      var m = 1;
      function updata(){
        ctx.clearRect(0,0,1200,700);
        if(x < 60 || x > 110){
            s = -s;
        } 
         if(y > 220 || y < 170){
            m = -m;
        } 
        x -= s;
        y += m;
        drow(x,y)
      }
      setInterval(updata,1)
   var canvas1 = document.querySelector('#line2');
   var ctx1 = canvas1.getContext('2d');
   var draw = function(v,b){
        ctx1.beginPath();
        ctx1.strokeStyle="#ccc";
        ctx1.moveTo(130,0);
        ctx1.lineTo(130,300);
        ctx1.lineTo(v,315);
        ctx1.lineTo(b+40,330);
        ctx1.lineTo(v+40,345);
        ctx1.lineTo(b,360);
        ctx1.lineTo(130,375);
        ctx1.lineTo(130,700);
        ctx1.stroke();  
   }        
      var v = 140;
      var b = 100;
      var s1 = 1;
      var m1 = 1;
      function updata1(){
        ctx1.clearRect(0,0,350,700);
        if(v < 140 || v > 180){
            s1 = -s1;
        } 
         if(b < 60 || b > 100){
            m1 = -m1;
        } 
        v += s1;
        b -= m1;
        draw(v,b)
      }
      setInterval(updata1,1)
     var donggan1 = function(){
        move('#line2')
            .set('top',0)
            .duration('1s')
            .end()
    }
    var donggan1chu = function(){
            move('#line2')
                .set('top',100+'%')
                .duration('0.01s')
                .end()
         } 
//第三张线条
    var xiantiao = function(index){
        move('.section-3 h2')
            .set('left',80+'px')
            .duration('2s')
            .end()
        move('.section-3 .list a').set('width',60+'%').duration('1s').end()
        move('.section-3 .list > div:nth-child(2) a').set('width',50+'%').duration('1s').end()
        move('.section-3 .list > div:nth-child(3) a').set('width',40+'%').duration('1s').end()
        move('.section-3 .list > div:nth-child(4) a').set('width',30+'%').duration('1s').end()
        move('.section-3 .list div:nth-child(1) .linel').set('width',15+'%').duration('1s').end()
        move('.section-3 .list div:nth-child(2) .linel').set('width',20+'%').duration('1s').end()
        move('.section-3 .list div:nth-child(3) .linel').set('width',38+'%').duration('1s').end()
        move('.section-3 .list div:nth-child(4) .linel').set('width',50+'%').duration('1s').end()
        move('.section-3 .list a span').set('opacity',1).duration('1s').end()
        move('.section-3 .list > div:nth-child(2) a span').set('opacity',1).duration('1s').end()
        move('.section-3 .list > div:nth-child(3) a span').set('opacity',1).duration('1s').end()
        move('.section-3 .list > div:nth-child(4) a span').set('opacity',1).duration('1s').end()
    }
    var xiantiaochu = function(index){
        move('.section-3 h2')
            .set('left',-100+'%')
            .duration('1s')
            .end()
        move('.section-3 .list a').set('width',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(2) a').set('width',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(3) a').set('width',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(4) a').set('width',0).duration('1s').end()
        move('.section-3 .list div:nth-child(1) .linel').set('width',0).duration('1s').end()
        move('.section-3 .list div:nth-child(2) .linel').set('width',0).duration('1s').end()
        move('.section-3 .list div:nth-child(3) .linel').set('width',0).duration('1s').end()
        move('.section-3 .list div:nth-child(4) .linel').set('width',0).duration('1s').end()
        move('.section-3 .list a span').set('opacity',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(2) a span').set('opacity',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(3) a span').set('opacity',0).duration('1s').end()
        move('.section-3 .list > div:nth-child(4) a span').set('opacity',0).duration('1s').end()
    }
//第二张文字 彩色框   
	var wenzi = function(index){
	move('.section-2 h2')
        	.x(100)
        	.duration('1s')
        	.end()
    move('.section-2')
            .set('background-position',"50% 50%")
            .duration('1s')
            .end()

	$('.section-2 .squares .line.bottom').css({'animation':'heng 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.top').css({'animation':'heng1 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.left').css({'animation':'shu 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.right').css({'animation':'shu1 2s','animation-fill-mode':'forwards'})
	}
    var onepage = function(){
        move('.section-1 .container')
            .set('opacity',1)
            .x(500)
            .duration('1s')
            .end()
    }
    var onepagechu = function(){
        move('.section-1 .container')
            .set('opacity',0)
            .x(-500)
            .end()
    }
    var wenzi1 = function(index){
        move('.section-2 .text')
            .set('opacity',1)
            .x(100)
            .duration('1s')
            .end()
    }
    var wenzi1chu = function(index){
        move('.section-2 .text')
            .set('opacity',0)
            .x(-100)
            .duration('1s')
            .end()
    }
	var wenzichu = function(index){
	move('.section-2 h2')
        	.x(-100)
        	.duration('1.5s')
        	.end()      	
	move('.section-2')
            .set('background-position',"50% 0%")
            .duration('1s')
            .end()
	$('.section-2 .squares .line.bottom').css({'animation':'hengx 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.top').css({'animation':'heng1x 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.left').css({'animation':'shux 2s','animation-fill-mode':'forwards'})
	$('.section-2 .squares .line.right').css({'animation':'shu1x 2s','animation-fill-mode':'forwards'})
	}
    
    var pic = function(){
        move('.bigbox2')
            .set('opacity',1)
            .x(100)
            .duration('1s')
            .end()
    }
    var picchu = function(){
         move('.bigbox2')
            .set('opacity',0)
            .x(-100)
            .duration('1s')
            .end()
    }
    var lijin = function(){
        move('.focus :nth-child(1)').set('left',0).duration('1.4s').end()
        move('.focus :nth-child(2)').set('left',0).duration('1.6s').end()
        move('.focus :nth-child(3)').set('left',0).duration('1.8s').end()
        move('.focus :nth-child(4)').set('left',0).duration('2s').end()
        move('.focus :nth-child(5)').set('left',0).duration('2.2s').end()
    }
    var lichu = function(){
        move('.focus :nth-child(1)').set('left',-100+'%').duration('0.1s').end()
        move('.focus :nth-child(2)').set('left',-100+'%').duration('0.1s').end()
        move('.focus :nth-child(3)').set('left',-100+'%').duration('0.1s').end()
        move('.focus :nth-child(4)').set('left',-100+'%').duration('0.1s').end()
        move('.focus :nth-child(5)').set('left',-100+'%').duration('0.1s').end()
    }
    var dat = function(){
        move('.section-5 .clients .background')
            .set('background-position',"50% 60%")
            .duration('1s')
            .end()
        move('.clients p').set('opacity',1).x(100).duration('1.4s').end()
        move('.clients .header1').set('opacity',1).x(100).duration('1.4s').end()
        move('.moscow p').set('opacity',1).x(100).duration('2s').end()
        move('.miami p').set('opacity',1).x(100).duration('2.4s').end()
    }
    var datchu = function(){
         move('.section-5 .clients .background')
            .set('background-position',"50% 20%")
            .duration('1s')
            .end()
        move('.clients p').set('opacity',0).x(-100).duration('1.4s').end()
        move('.clients .header1').set('opacity',0).x(-100).duration('1.4s').end()
        move('.moscow p').set('opacity',0).x(-100).duration('2s').end()
        move('.miami p').set('opacity',0).x(-100).duration('2.4s').end()
    }
      var wendujin = function(){
        var wendu = function(x){
            $('.temp.one span').text('-'+x)
        }
        var wendu1 = function(y){
            $('.temp.two span').text(y)
        }
        var x = 0,
            y = 0,
            mm = 1,
            nn = 1;
        var wendubianhua = function(){
           if(x == 5){
            mm = 0;
            return;
           }
           x += mm;
           wendu(x)
        }
        var wendubianhua1 = function(){
            if(y == 25){
            nn = 0;
            return;
           }
           y += nn;
           wendu1(y)
        }
        setInterval(wendubianhua,100)
        setInterval(wendubianhua1,100)
    }
    var wenduchu = function(){
        $('.temp.one span').text(0)
        $('.temp.two span').text(0)
    }
    var imgsix= function(){
        move('.imon').set('opacity',1).duration('1s').end()
        move('.imtw').set('opacity',1).duration('1s').end()
        move('.imth').set('opacity',1).duration('1s').end()
        move('.imfo').set('opacity',1).duration('1s').end()
    }
    var imgsixchu= function(){
        move('.imon').set('opacity',0).duration('1s').end()
        move('.imtw').set('opacity',0).duration('1s').end()
        move('.imth').set('opacity',0).duration('1s').end()
        move('.imfo').set('opacity',0).duration('1s').end()
    }
    var sewenzi = function(){
        move('.section-7 .link').set('opacity',1).x(80).duration('1s').end()
        move('.section-7 header .text').set('opacity',1).x(40).duration('1s').end()
        move('.section-7 footer p').set('opacity',1).x(80).duration('1s').end()
    }
     var sewenzichu = function(){
        move('.section-7 .link').set('opacity',0).x(-80).duration('1s').end()
        move('.section-7 header .text').set('opacity',0).x(-40).duration('1s').end()
        move('.section-7 footer p').set('opacity',0).x(-80).duration('1s').end()
    }
//fullpage    
	$('#fullpage').fullpage({
		controlArrows:false,
		verticalCentered:false,
		resize:true,
		// scrollingSpeed:300,
        anchors:['s1','s2','s3','s4','s5','s6','s7'],
        lockAnchors:true,
        // easing:'easeInBack',
        // autoScorlling:false,
        loopTop:true,
        scrollBar:true,
        paddingTop:130,
        fixedElements:'#header',
        css3:true,
        navigation:true,
        navigationTooltips:['1','2','3','4','5','6','7'],
        afterLoad:function(link,index){
            switch(link){
                case 's1':donggan1chu(),onepage();
                break;
                case 's2':wenzi(),wenzi1(),donggan1();
                break;
                case 's3':xiantiao();
                break;
                case 's4':pic(),lijin();
                break;
                case 's5':dat(),wendujin();
                break;
                case 's6':imgsix();
                break;
                case 's7':sewenzi();
                break;
            }
        },	
        onLeave:function(index,tolink){
            switch(index){
                case 1:donggan1(),onepagechu();
                break;
                case 2:wenzichu(),wenzi1chu();
                break;
                case 3:xiantiaochu();
                break;
                case 4:lichu(),picchu();
                break;
                case 5:datchu();
                break;
                case 6:imgsixchu();
                break;
                case 7:sewenzichu();
                break;
            }
        } 
	})
  $('.section-6 .box').hover(function(){
        $('.box').css('width','20%');
        $(this).css('width','37%')
  },function(){
        $('.box').css('width','24.5%');
        $(this).css('width','24.5%')
  })
     
}) 