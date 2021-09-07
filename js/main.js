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
      var Stone = false;

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
        else{
          Ui_Button[i].moveTo(x+width,y+height);
          Ui_Button[i].opacity = 0.5;
        }
        Ui_Button[i]._style["font-size"] = height/20;
        scene.addChild(Ui_Button[i]);
        Ui_Button[i].addEventListener("touchstart",function(e){
          switch(Ui_Button[i]._text){
            case "コマ送り":
              move = true;
              return;
              break;
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
              Image[7].imageurl++;
              if(Image[7].imageurl==8) Image[7].imageurl = 1;
              Image[7]._element.src = "image/mouth/"+Image[7].imageurl+".png";
              return;
              break;
            case "眉":
              Image[6].imageurl++;
              if(Image[6].imageurl==3) Image[6].imageurl = 1;
              Image[6]._element.src = "image/eyebrows/"+Image[6].imageurl+".png";
              return;
              break;
            case "髪":
              Image[5].imageurl++;
              if(Image[5].imageurl==11) Image[5].imageurl = 1;
              if(!Stone){
                Image[5]._element.src = "image/hair/"+Image[5].imageurl+".png";
                Image[9]._element.src = "image/bangs/"+Image[5].imageurl+".png";
              }
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
            case "涙オフ":
              Image[4].x += width;
              Image[4].y += height;
              Ui_Button[i]._text = "涙オン";
              return;
              break;
            case "涙オン":
              Image[4].x -= width;
              Image[4].y -= height;
              Ui_Button[i]._text = "涙オフ";
              return;
              break;
            case "首石化":
              Stone = Image[5].imageurl;
              Image[5]._element.src = "image/hair/stone.png";
              Image[9]._element.src = "image/bangs/stone.png";
              Ui_Button[i]._text = "溶かす";
              return;
              break;
            case "溶かす":
              Image[5]._element.src = "image/hair/"+Stone+".png";
              Image[9]._element.src = "image/bangs/"+Stone+".png";
              Ui_Button[i]._text = "首石化";
              return;
              break;
            case "停":
              move = false;
              Ui_Button[19].moveTo(Ui_Button[19].x-width,Ui_Button[19].y-height);
              Ui_Button[i]._text = "動";
              return;
              break;
            case "動":
              move = true;
              Ui_Button[19].moveTo(Ui_Button[19].x+width,Ui_Button[19].y+height);
              Ui_Button[i]._text = "停";
              return;
              break;
            case "コマ送り":
              move = false;
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

      function One_Scene(){
        Image[2].imageurl++;
        if(Image[2].imageurl==13) Image[2].imageurl = 1;
        Image[2]._element.src = "image/body/"+Image[2].imageurl+".png";
        if(time_H){
          Image[1].x += 1;
          Image[4].x += 1;
        }
        else{
          Image[1].x -= 1;
          Image[4].x -= 1;
        }
        if(time%5==0){
          if(time_H) time_H = false;
          else time_H = true;
        }
        if(blink != 3){
          if(Image[8].imageurl==4){
            Image[8].imageurl = 1;
            Image[8]._element.src = "image/eyelashes/1.png";
          }
          if(Image[8].imageurl==3){
            Image[8].imageurl = 4;
            Image[8]._element.src = "image/eyelashes/2.png";
          }
          if(Image[8].imageurl==2){
            Image[8].imageurl = 3;
            Image[8]._element.src = "image/eyelashes/3.png";
          }
          if(time%blink==0){
            Image[8].imageurl = 2;
            Image[8]._element.src = "image/eyelashes/2.png";
          }
        }
        time++;
        return;
      }

      scene.addEventListener("enterframe",function(){
        if(move) One_Scene();
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
       Images("image/face/tears.png",1);
       Image[4].x += width;
       Image[4].y += height;
       Images("image/hair/1.png",1);
       Images("image/eyebrows/1.png",1);
       Images("image/mouth/1.png",1);
       Images("image/eyelashes/1.png",1);
       Images("image/bangs/1.png",1);
       Buttons(0,0,"メニューを開く",0);
       Buttons(width/2,height/10*8,"↑",1);
       Buttons(width/2,height/10*9,"↓",2);
       Buttons(width/4,height/10*9,"←",3);
       Buttons(width/4*3,height/10*9,"→",4);
       Buttons(0,height/10*6,"口",5);
       Buttons(width/4*1,height/10*6,"眉",6);
       Buttons(width/4*2,height/10*6,"眼",7);
       Buttons(width/4*3,height/10*6,"ハイライトオフ",8);
       Buttons(0,height/10*5,"停",9);
       Buttons(width/4*1,height/10*5,"まばたき間隔+",10);
       Buttons(width/4*2,height/10*5,"まばたき間隔-",11);
       Buttons(width/4*3,height/10*5,"頬",12);
       Buttons(0,height/10*7,"髪",13);
       Buttons(width/4*1,height/10*7,"涙オン",14);
       Buttons(width/4*2,height/10*7,"肌",15);
       Buttons(0,height/10*8,"左腕",16);
       Buttons(width/4*1,height/10*8,"右腕",17);
       Buttons(width/4*3,height/10*7,"リセット",18);
       Buttons(width/4*3,height/10*8,"コマ送り",19);
       Buttons(0,height/10*9,"首石化",20);
       Ui_Button[19].moveTo(Ui_Button[19].x+width,Ui_Button[19].y+height);
       return scene;
    };
    game.replaceScene(Main_Scene());
  }
  game.start();
}
