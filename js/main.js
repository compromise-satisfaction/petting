enchant()

function Game_load(width,height){

  var game = new Game(width,height);
  game.fps = 100;
  game.onload = function(){

      var Main_Scene = function(){
      var scene = new Scene();

      var time = 0;
      var time_H = true;
      var i = 0;
      var Image = [];

      function Images(a){
        Image[i] = new Sprite();
        Image[i]._element = document.createElement("img");
        Image[i].imageurl = a;
        Image[i]._element.src = a;
        Image[i].width = width;
        Image[i].height = height;
        scene.addChild(Image[i]);
        i++;
        return;
      }

      var Ui_Button = [];

      function Buttons(x,y,a,i){
        Ui_Button[i] = new Button(a,"light",width/4,height/10);
        if(i==0)Ui_Button[i].moveTo(x,y);
        else Ui_Button[i].moveTo(x+width,y+height);
        Ui_Button[i]._style["font-size"] = height/20;
        scene.addChild(Ui_Button[i]);
        Ui_Button[i].addEventListener("touchstart",function(e){
          switch(Ui_Button[i]._text){
            case "↑":
              game.input.up = true;
              return;
              break;
            case "↓":
              game.input.down = true;
              return;
              break;
            case "←":
              game.input.left = true;
              return;
              break;
            case "→":
              game.input.right = true;
              return;
              break;
          }
        });
        Ui_Button[i].addEventListener("touchend",function(e){
          switch(Ui_Button[i]._text){
            case "メニューを開く":
              for (var o = 1; o < Ui_Button.length; o++) {
                Ui_Button[o].moveTo(Ui_Button[o].x-width,Ui_Button[o].y-height);
              }
              Ui_Button[0]._text = "メニューを閉じる";
              return;
              break;
            case "メニューを閉じる":
              for (var o = 1; o < Ui_Button.length; o++) {
                Ui_Button[o].moveTo(Ui_Button[o].x+width,Ui_Button[o].y+height);
              }
              Ui_Button[0]._text = "メニューを開く";
              return;
              break;
            case "口":
              switch (Image[4].imageurl) {
                case "image/mouth1.png":
                  Image[4].imageurl = "image/mouth2.png";
                  Image[4]._element.src = "image/mouth2.png";
                  break;
                case "image/mouth2.png":
                  Image[4].imageurl = "image/mouth3.png";
                  Image[4]._element.src = "image/mouth3.png";
                  break;
                case "image/mouth3.png":
                  Image[4].imageurl = "image/mouth4.png";
                  Image[4]._element.src = "image/mouth4.png";
                  break;
                case "image/mouth4.png":
                  Image[4].imageurl = "image/mouth5.png";
                  Image[4]._element.src = "image/mouth5.png";
                  break;
                case "image/mouth5.png":
                  Image[4].imageurl = "image/mouth6.png";
                  Image[4]._element.src = "image/mouth6.png";
                  break;
                case "image/mouth6.png":
                  Image[4].imageurl = "image/mouth7.png";
                  Image[4]._element.src = "image/mouth7.png";
                  break;
                case "image/mouth7.png":
                  Image[4].imageurl = "image/mouth1.png";
                  Image[4]._element.src = "image/mouth1.png";
                  break;
              }
              return;
              break;
            case "眉":
              switch (Image[3].imageurl) {
                case "image/mayuge1.png":
                Image[3].imageurl = "image/mayuge2.png";
                Image[3]._element.src = "image/mayuge2.png";
                  break;
                case "image/mayuge2.png":
                  Image[3].imageurl = "image/mayuge1.png";
                  Image[3]._element.src = "image/mayuge1.png";
                  break;
              }
              return;
              break;
            case "眼":
              switch (Image[0].imageurl) {
                case "image/eyes1.png":
                  Image[0].imageurl = "image/eyes2.png";
                  Image[0]._element.src = "image/eyes2.png";
                  Image[1]._element.src = "image/highlight2.png";
                  break;
                case "image/eyes2.png":
                  Image[0].imageurl = "image/eyes3.png";
                  Image[0]._element.src = "image/eyes3.png";
                  Image[1]._element.src = "image/highlight3.png";
                  break;
                case "image/eyes3.png":
                  Image[0].imageurl = "image/eyes4.png";
                  Image[0]._element.src = "image/eyes4.png";
                  Image[1]._element.src = "image/highlight4.png";
                  break;
                case "image/eyes4.png":
                  Image[0].imageurl = "image/eyes5.png";
                  Image[0]._element.src = "image/eyes5.png";
                  Image[1]._element.src = "image/highlight5.png";
                  break;
                case "image/eyes5.png":
                  Image[0].imageurl = "image/eyes6.png";
                  Image[0]._element.src = "image/eyes6.png";
                  Image[1]._element.src = "image/highlight6.png";
                  break;
                case "image/eyes6.png":
                  Image[0].imageurl = "image/eyes7.png";
                  Image[0]._element.src = "image/eyes7.png";
                  Image[1]._element.src = "image/highlight7.png";
                  break;
                case "image/eyes7.png":
                  Image[0].imageurl = "image/eyes8.png";
                  Image[0]._element.src = "image/eyes8.png";
                  Image[1]._element.src = "image/highlight4.png";
                  break;
                case "image/eyes8.png":
                  Image[0].imageurl = "image/eyes1.png";
                  Image[0]._element.src = "image/eyes1.png";
                  Image[1]._element.src = "image/highlight1.png";
                  break;
                case "image/eyes9.png":
                  Image[0].imageurl = "image/eyes1.png";
                  Image[0]._element.src = "image/eyes1.png";
                  Image[1]._element.src = "image/highlight1.png";
                  break;
              }
              return;
              break;
            case "ハイライトオフ":
              Image[1].x += width;
              Image[1].y += height;
              Ui_Button[i]._text = "ハイライトオン";
              return;
              break;
            case "ハイライトオン":
              Image[1].x -= width;
              Image[1].y -= height;
              Ui_Button[i]._text = "ハイライトオフ";
              return;
              break;
            case "↑":
              game.input.up = false;
              return;
              break;
            case "↓":
              game.input.down = false;
              return;
              break;
            case "←":
              game.input.left = false;
              return;
              break;
            case "→":
              game.input.right = false;
              return;
              break;
          }
        });
      }

      scene.addEventListener("enterframe",function(){
        if(time_H){
          Image[1].x += 1;
        }
        else{
          Image[1].x -= 1;
        }
        if(time%5==0){
          if(time_H) time_H = false;
          else time_H = true;
        }
        time++;
        if (game.input.down && Image[0].y < 20){
            Image[0].y+=1;
            Image[1].y+=1;
            console.log(Image[0].x,Image[0].y);
        }
        if (game.input.up && Image[0].y > -30){
            Image[0].y-=1;
            Image[1].y-=1;
            console.log(Image[0].x,Image[0].y);
        }
        if (game.input.left && Image[0].x > -20){
            Image[0].x-=1;
            Image[1].x-=1;
            console.log(Image[0].x,Image[0].y);
        }
        if (game.input.right && Image[0].x < 30){
            Image[0].x+=1;
            Image[1].x+=1;
            console.log(Image[0].x,Image[0].y);
        }
       })

       Images("image/eyes1.png");
       Images("image/highlight1.png");
       Images("image/Body.gif");
       Images("image/mayuge1.png");
       Images("image/mouth1.png");
       Buttons(0,0,"メニューを開く",0);
       Buttons(width/2,height/10*8,"↑",1);
       Buttons(width/2,height/10*9,"↓",2);
       Buttons(width/4,height/10*9,"←",3);
       Buttons(width/4*3,height/10*9,"→",4);
       Buttons(0,height/10*6,"口",5);
       Buttons(width/4*1,height/10*6,"眉",6);
       Buttons(width/4*2,height/10*6,"眼",7);
       Buttons(width/4*3,height/10*6,"ハイライトオフ",8);
       return scene;
    };

/*

        b.addEventListener('enterframe',function(){
                           if(time<5){
                           this.frame=0;
                           spead=0;
                           d.x-=time_d2
                           time_d2+=0.05*i3
                           if(time_d2>0.2){
                           i3*=-1;
                           }
                           if(time_d2<-0.2){
                           i3*=-1;
                           }
                           d.y=0;
                           d.opacity += 0.01;
                           }
                           else if(time>5 && time<5.2){
                           time_d+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.2 && time<5.4){
                           time_d+=0.02;
                           this.frame=2;
                           }
                           else if(time>5.4 && time<5.6){
                           time_d+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.6 && time<7){
                           time_d+=0.02;
                           this.frame=0;
                           }
                           else if(time>7){
                           time=0;
                           time_d=0;
                           d.opacity = 0.01;
                           }
                           })

        b2.addEventListener('enterframe',function(){
                            if(a.y==-40){
                            if(a.x>-5){
                            if(a.x<5){
                            time-=0.02
                            spead=0
                            time_d=0
                            a2.y = 5000
                            this.y=0
                            f.opacity=0
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            z. rotation = time_a2*100
                           })

        c.addEventListener('enterframe',function(){
                           this.y+=time_c
                           time_c+=0.01*i
                           if(time_c>0.2){
                           i*=-1;
                           }
                           if(time_c<-0.2){
                           i*=-1;
                           }
                           })

        d.addEventListener('enterframe',function(){
                           spead = Initial_speed+gravity*time_d
                           this.y+=spead
                           })

        f.addEventListener('enterframe',function(){
                           if(z.x>430 && z.x<450 && z.y>500 && z.y<520){
                            if(this.opacity*100<100){
                                this.opacity+=0.01
                            }
                           }
                           else if(this.opacity*100<100){
                           this.opacity=0
                           }
                           })

        core.rootScene.on('touchstart',function(e){
                          a.x=e.x-545
                          a.y=e.y-412
                          a2.x=e.x-545
                          a2.y=e.y-412
                          a.frame+=1
                          a2.frame+=1
                          z.x=e.x-89
                          z.y=e.y-59
                          })

    */
    game.replaceScene(Main_Scene());
  }
  game.start();
}
