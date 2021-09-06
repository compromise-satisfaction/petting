enchant()

function Game_load(width,height){

  var game = new Game(width,height);
  game.fps = 10;
  game.onload = function(){

      var Main_Scene = function(){
      var scene = new Scene();

      var time = 0;
      var time_H = true;
      var i = 0;
      var move = true;
      var blink = 50;
      var blinks = 0;
      var Image = [];

      function Images(a,b){
        Image[i] = new Sprite();
        Image[i]._element = document.createElement("img");
        Image[i]._element.src = a;
        Image[i].imageurl = b;
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
            case "まばたき間隔+":
              blinks = 1;
              return;
              break;
            case "まばたき間隔-":
              blinks = -1;
              return;
              break;
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
              Image[5].imageurl++;
              if(Image[5].imageurl==8) Image[5].imageurl = 1;
              Image[5]._element.src = "image/mouth/"+Image[5].imageurl+".png";
              return;
              break;
            case "眉":
              Image[4].imageurl++;
              if(Image[4].imageurl==3) Image[4].imageurl = 1;
              Image[4]._element.src = "image/eyebrows/"+Image[4].imageurl+".png";
              return;
              break;
            case "眼":
              Image[0].imageurl++;
              if(Image[0].imageurl==10) Image[0].imageurl = 1;
              Image[0]._element.src = "image/eyes/"+Image[0].imageurl+".png";
              Image[1]._element.src = "image/highlight/"+Image[0].imageurl+".png";
              return;
              break;
            case "頬":
              Image[3].imageurl++;
              if(Image[3].imageurl==3) Image[3].imageurl = 1;
              Image[3]._element.src = "image/face/"+Image[3].imageurl+".png";
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
            case "時間":
              if(move) move = false;
              else move = true;
              return;
              break;
            case "まばたき間隔+":
            case "まばたき間隔-":
              blinks = 0;
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
        if(move){
          Image[2].imageurl++;
          if(Image[2].imageurl==13) Image[2].imageurl = 1;
          Image[2]._element.src = "image/body/"+Image[2].imageurl+".png";
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
          if(blink == 3){
            Image[6].imageurl = 3;
            Image[6]._element.src = "image/eyelashes/3.png";
          }
          else{
            if(Image[6].imageurl==4){
              Image[6].imageurl = 1;
              Image[6]._element.src = "image/eyelashes/1.png";
            }
            if(Image[6].imageurl==3){
              Image[6].imageurl = 4;
              Image[6]._element.src = "image/eyelashes/2.png";
            }
            if(Image[6].imageurl==2){
              Image[6].imageurl = 3;
              Image[6]._element.src = "image/eyelashes/3.png";
            }
            if(time%blink==0){
              Image[6].imageurl = 2;
              Image[6]._element.src = "image/eyelashes/2.png";
            }
          }
          time++;
        }
        if(!(blink == 3 && blinks== -1)) blink += blinks;
        if (game.input.down && Image[0].y < 20){
            Image[0].y+=1;
            Image[1].y+=1;
        }
        if (game.input.up && Image[0].y > -30){
            Image[0].y-=1;
            Image[1].y-=1;
        }
        if (game.input.left && Image[0].x > -20){
            Image[0].x-=1;
            Image[1].x-=1;
        }
        if (game.input.right && Image[0].x < 30){
            Image[0].x+=1;
            Image[1].x+=1;
        }
       })

       Images("image/eyes/1.png",1);
       Images("image/highlight/1.png",1);
       Images("image/body/1.png",1);
       Images("image/face/1.png",1);
       Images("image/eyebrows/1.png",1);
       Images("image/mouth/1.png",1);
       Images("image/eyelashes/1.png",1);
       Buttons(0,0,"メニューを開く",0);
       Buttons(width/2,height/10*8,"↑",1);
       Buttons(width/2,height/10*9,"↓",2);
       Buttons(width/4,height/10*9,"←",3);
       Buttons(width/4*3,height/10*9,"→",4);
       Buttons(0,height/10*6,"口",5);
       Buttons(width/4*1,height/10*6,"眉",6);
       Buttons(width/4*2,height/10*6,"眼",7);
       Buttons(width/4*3,height/10*6,"ハイライトオフ",8);
       Buttons(0,height/10*5,"時間",9);
       Buttons(width/4*1,height/10*5,"まばたき間隔+",10);
       Buttons(width/4*2,height/10*5,"まばたき間隔-",11);
       Buttons(width/4*3,height/10*5,"頬",12);
       return scene;
    };
    game.replaceScene(Main_Scene());
  }
  game.start();
}
