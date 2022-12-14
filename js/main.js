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
      var Eye_condition = "開眼";

      function Images(a,b){
        Image[i] = new Sprite();
        Image[i]._element = document.createElement("img");
        Image[i]._element.src = a;
        if(i==2) Image[i].body = 1;
        Image[i].imageurl = b;
        Image[i].width = width;
        Image[i].height = height;
        scene.addChild(Image[i]);
        i++;
        return;
      }

      var Ui_Button = [];
      var Sound = document.createElement("audio");
      Sound.title = "乳揉み";
      Sound.Number = 0;

      function Buttons(x,y,a,i){
        Ui_Button[i] = new Button(a,"light",width/4,height/10);
        if(i==0)Ui_Button[i].moveTo(x,y);
        else{
          Ui_Button[i].moveTo(x+width,y+height);
          Ui_Button[i].opacity = 0.8;
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
              };
              S_Input1.x -= width;
              S_Input1.y -= height;
              S_Input2.x -= width;
              S_Input2.y -= height;
              Ui_Button[0]._text = "メニューを閉じる";
              return;
              break;
            case "メニューを閉じる":
              for (var o = 1; o < Ui_Button.length; o++) {
                Ui_Button[o].moveTo(Ui_Button[o].x+width,Ui_Button[o].y+height);
              };
              S_Input1.x += width;
              S_Input1.y += height;
              S_Input2.x += width;
              S_Input2.y += height;
              if(S_Input1._element.value) Background._element.src = S_Input1._element.value;
              else if(!Background.Number) Background._element.src = "image/hair/10.png";
              if(S_Input2._element.value) Front._element.src = S_Input2._element.value;
              else Front._element.src = "image/hair/10.png";
              Ui_Button[0]._text = "メニューを開く";
              return;
              break;
            case "音":
              Sound.Number++;
              if(Sound.Number==4) Sound.Number = 0;
              if(Sound.Number) Sound.src = "sound/" + Sound.Number + ".wav";
              return;
              break;
            case "口":
              Image[7].imageurl++;
              if(Image[7].imageurl==9) Image[7].imageurl = 1;
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
              if(Image[5].imageurl==15) Image[5].imageurl = 1;
              Image[5]._element.src = "image/hair/"+Image[5].imageurl+".png";
              Image[9]._element.src = "image/bangs/"+Image[5].imageurl+".png";
              return;
              break;
            case "眼":
              Image[0].imageurl++;
              if(Image[0].imageurl==11) Image[0].imageurl = 1;
              Image[0]._element.src = "image/eyes/"+Image[0].imageurl+".png";
              Image[1]._element.src = "image/highlight/"+Image[0].imageurl+".png";
              return;
              break;
            case "頬":
              Image[3].imageurl++;
              if(Image[3].imageurl==3) Image[3].imageurl = 1;
              Image[3]._element.src = "image/face/"+Image[2].body+"/"+Image[3].imageurl+".png";
              return;
              break;
            case "右腕":
              Image[10].imageurl++;
              if(Image[10].imageurl==7) Image[10].imageurl = 1;
              Image[10]._element.src = "image/right_arm/"+Image[2].body+"/"+Image[10].imageurl+".png";
              return;
              break;
            case "左腕":
              Image[11].imageurl++;
              if(Image[11].imageurl==6) Image[11].imageurl = 1;
              Image[11]._element.src = "image/left_arm/"+Image[2].body+"/"+Image[11].imageurl+".png";
              return;
              break;
            case "半眼":
              Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/1.png";
              Eye_condition = "半眼";
              Ui_Button[i]._text = "閉眼";
              return;
              break;
            case "閉眼":
              Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/2.png";
              Eye_condition = "閉眼";
              Ui_Button[i]._text = "開眼";
              return;
              break;
            case "開眼":
              Image[8]._element.src = "image/eyelashes/0.png";
              Eye_condition = "開眼";
              Ui_Button[i]._text = "半眼";
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
            case "停":
              move = false;
              Ui_Button[i]._text = "動";
              Ui_Button[19]._text = "コマ送り";
              return;
              break;
            case "動":
              move = true;
              Ui_Button[i]._text = "停";
              Ui_Button[19]._text = "お任せ背景";
              return;
              break;
            case "肌":
              Image[2].body++;
              if(Image[2].body==8) Image[2].body = 1;
              if(Image[2].body==5) Background2._element.src = "image/hair/00.png";
              else Background2._element.src = "image/hair/0.png";
              Image[2]._element.src = "image/body/"+Image[2].body+"/"+Image[2].imageurl+".png";
              Image[3]._element.src = "image/face/"+Image[2].body+"/"+Image[3].imageurl+".png";
              Image[10]._element.src = "image/right_arm/"+Image[2].body+"/"+Image[10].imageurl+".png";
              Image[11]._element.src = "image/left_arm/"+Image[2].body+"/"+Image[11].imageurl+".png";
              return;
              break;
            case "コマ送り":
              move = false;
              return;
              break;
            case "お任せ背景":
              Background.Number++;
              if(Background.Number==21){
                Background.Number = 0;
                Background._element.src = "image/hair/10.png";
              }
              else Background._element.src = "image/background/"+Background.Number+".png";
              break;
            case "リセット":
              Background.Number = 0;
              Background._element.src = "image/hair/10.png";
              Background2._element.src = "image/hair/0.png";
              Image[0]._element.src = "image/eyes/1.png"
              Image[1]._element.src = "image/highlight/1.png";
              Image[2]._element.src = "image/body/1/1.png";
              Image[3]._element.src = "image/face/1/1.png";
              Image[4]._element.src = "image/face/tears.png";
              Image[5]._element.src = "image/hair/1.png";
              Image[6]._element.src = "image/eyebrows/1.png";
              Image[7]._element.src = "image/mouth/1.png";
              Image[8]._element.src = "image/eyelashes/0.png";
              Image[9]._element.src = "image/bangs/1.png";
              Image[10]._element.src = "image/right_arm/1/1.png";
              Image[11]._element.src = "image/left_arm/1/1.png";
              Image[0].x = 0;
              Image[0].y = 0;
              Image[1].x = 0;
              Image[1].y = 0;
              Image[2].body = 1;
              Image[2].x = 0;
              Image[2].y = 0;
              Image[4].x = 0;
              Image[4].y = 0;
              Image[4].x += width;
              Image[4].y += height;
              Image[0].imageurl = 1;
              Image[1].imageurl = 1;
              Image[2].imageurl = 1;
              Image[3].imageurl = 1;
              Image[4].imageurl = 1;
              Image[5].imageurl = 1;
              Image[6].imageurl = 1;
              Image[7].imageurl = 1;
              Image[8].imageurl = 1;
              Image[9].imageurl = 1;
              Image[10].imageurl = 1;
              Image[11].imageurl = 1;
              Ui_Button[8]._text = "ハイライトオフ";
              Ui_Button[14]._text = "涙オン";
              time = 0;
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
      };

      function One_Scene(){
        Image[2].imageurl++;
        switch(Image[2].imageurl){
          case 3:
            if(Sound.Number){
              if(Sound.paused) Sound.play();
              else Sound.currentTime = 0;
            };
            break;
          case 13:
            Image[2].imageurl = 1;
            break;
        };
        Image[2]._element.src = "image/body/"+Image[2].body+"/"+Image[2].imageurl+".png";
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
        if(Eye_condition=="閉眼") Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/2.png";
        else{
          if(blink != 3){
          if(Image[8].imageurl==4){
            Image[8].imageurl = 1;
            if(Eye_condition=="半眼") Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/1.png";
            else Image[8]._element.src = "image/eyelashes/0.png";
          }
          if(Image[8].imageurl==3){
            Image[8].imageurl = 4;
            Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/1.png";
          }
          if(Image[8].imageurl==2){
            Image[8].imageurl = 3;
            Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/2.png";
          }
          if(time%blink==0){
            Image[8].imageurl = 2;
            Image[8]._element.src = "image/eyelashes/"+Image[2].body+"/1.png";
          }
        }
        };
        time++;
        return;
      };

      scene.addEventListener("enterframe",function(){
        if(move) One_Scene();
        if(!(blink == 3 && blinks== -1)) blink += blinks;
        if(game.input.down && Image[0].y < 20){
            Image[0].y+=1;
            Image[1].y+=1;
        }
        if(game.input.up && Image[0].y > -30){
            Image[0].y-=1;
            Image[1].y-=1;
        }
        if(game.input.left && Image[0].x > -20){
            Image[0].x-=1;
            Image[1].x-=1;
        }
        if(game.input.right && Image[0].x < 30){
            Image[0].x+=1;
            Image[1].x+=1;
        }
      });

       var Background = new Sprite();
       Background._element = document.createElement("img");
       Background._element.src = "image/hair/10.png";
       Background.width = width;
       Background.height = height;
       Background.Number = 0;
       scene.addChild(Background);

       var Background2 = new Sprite();
       Background2._element = document.createElement("img");
       Background2._element.src = "image/hair/0.png";
       Background2.width = width;
       Background2.height = height;
       scene.addChild(Background2);

       Images("image/eyes/1.png",1);
       Images("image/highlight/1.png",1);
       Images("image/body/1/1.png",1);
       Images("image/face/1/1.png",1);
       Images("image/face/tears.png",1);
       Image[4].x += width;
       Image[4].y += height;
       Images("image/hair/1.png",1);
       Images("image/eyebrows/1.png",1);
       Images("image/mouth/1.png",1);
       Images("image/eyelashes/0.png",1);
       Images("image/bangs/1.png",1);
       Images("image/right_arm/1/1.png",1);
       Images("image/left_arm/1/1.png",1);

       var Front = new Sprite();
       Front._element = document.createElement("img");
       Front._element.src = "image/hair/10.png";
       Front.width = width;
       Front.height = height;
       scene.addChild(Front);

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
       Buttons(0,height/10*8,"右腕",16);
       Buttons(width/4*1,height/10*8,"左腕",17);
       Buttons(width/4*3,height/10*7,"リセット",18);
       Buttons(width/4*3,height/10*8,"お任せ背景",19);
       Buttons(0,height/10*9,"半眼",20);
       Buttons(width/4*3,height/10*4,"音",21);

       var S_Input1 = new Entity();
       S_Input1.moveTo(width/4*3+width,height);
       S_Input1.width = width/4;
       S_Input1.height = height/10;
       S_Input1._element = document.createElement('input');
       S_Input1._element.type = "text";
       S_Input1._element.name = "myText";
       S_Input1._element.value = "";
       S_Input1._element.placeholder = "背景画像のURLを入力";
       scene.addChild(S_Input1);

       var S_Input2 = new Entity();
       S_Input2.moveTo(width/4*3+width,height/10+height);
       S_Input2.width = width/4;
       S_Input2.height = height/10;
       S_Input2._element = document.createElement('input');
       S_Input2._element.type = "text";
       S_Input2._element.name = "myText";
       S_Input2._element.value = "";
       S_Input2._element.placeholder = "前画像のURLを入力";
       scene.addChild(S_Input2);

       return scene;
    };
    game.replaceScene(Main_Scene());
  };
  game.start();
};
