var y,z,zorluk;
var skor = 0;
var time = 60;
var table = document.createElement('table');

function start(x){

  zorluk=x;  //zorluk seviyesini global variable'a aktarıyoruz.

  //timer
  var xx = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = time;

    if (time == 0) {
      clearInterval(x);
      gameOver();
    }

  }, 1000);

  
  y = randomNumberLevel(x); // ilk oluşucak aranan renk
  createTable(x);

  //menü divimizi saklayıp oyunun bulunduğu divleri display block yaparak ekrana getiriyoruz.
  document.getElementsByClassName("menu")[0].style.display = "none";
  document.getElementsByClassName("top")[0].style.display = "block";
  document.getElementsByClassName("bottom")[0].style.display = "block";
  document.getElementsByClassName("mid")[0].style.display = "block";


}

// süre bitiminde çalışıp oyun divlerini saklar oyun sonu divlerini gösterir.
  function gameOver(){

    document.getElementById("sonuc").innerHTML = skor;

    document.getElementsByClassName("top")[0].style.display = "none";
    document.getElementsByClassName("bottom")[0].style.display = "none";
    document.getElementsByClassName("mid")[0].style.display = "none";
    document.getElementsByClassName("bitis")[0].style.display = "block";
  }


// tekrar oyna butonuna basılınca oyunu başlangıç ekranını götürür.
  function bitir(){
    window.location.reload();
  }





// tablo oluşturma fonksiyonu zorluk seçildiği gibi çalışır.
  function createTable(level){


    for (var i =0; i < level ; i++) {
      var tr = document.createElement('tr');

      for (var j =0; j < level ; j++) {
        var td = document.createElement('td');
        
        z=getRandomRgb();
        td.style.backgroundColor = z;

        

        td.style.width = 600/level+'px';
        td.style.height = 600/level+'px';

        if (y==i*level+j) {
          document.getElementsByClassName("renk")[0].style.backgroundColor=z;
        }

        
        tr.appendChild(td);


        td.onclick = function(){correctColor($(this).css("background-color"))};
      
      }
      table.appendChild(tr);
      
    }
    $(".table_k").append(table);
    return table;
  }


// basılan kutular ile eşleşme var mı varsa skoru artırır. ardından tablo renkleri yenileyen fonksiyonu çağırır.
  function correctColor(mycolor){
    if (document.getElementsByClassName("renk")[0].style.backgroundColor==mycolor){
      skor++;
      document.getElementById("skor").innerHTML = skor;
      yenile();
      return 1;
      
    }

    
    return 0;

  }


// tablomuzu dizide döndürüp renkleri yeniler yeni aranan rengi de oluşturur.
  function yenile() {
  var yeni,temp; 
    yeni = randomNumberLevel(zorluk);

    for (var i = 0; i < zorluk ; i++){
      for (var j = 0; j < zorluk ; j++){

        temp = getRandomRgb();
        table.rows[i].cells[j].style.backgroundColor = temp;

        if (yeni==i*zorluk+j) {
          document.getElementsByClassName("renk")[0].style.backgroundColor=temp;
        }

      }
    }
    return table;
  }


//oyun boyutuna göre rasgele sayı oluşturur.

function randomNumberLevel(level) {
  return Math.floor(Math.random() * level * level);
  
}


// rasgele rgb türünde renk oluşturur.

function getRandomRgb() {

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



