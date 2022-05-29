let answer = document.getElementById('answer');
const kirim = document.getElementById('submit');
let komputer = document.getElementById('jawaban');
const teksHas = document.getElementById('questionm');
let life = document.getElementById('life');
const tambah = document.querySelector('.plus');
const lihat = document.querySelector('.show');

//let nyawa = 7;
 /* while(nyawa >= 0) {
    jawaban = Math.round(Math.random() * 20);
    kirim.addEventListener("click", function(){
    let jawAns = parseInt(answer.value);
      if (jawAns == jawaban) {
          questionm.innerHTML = "Benar";
      }else if(jawAns > jawaban){
          questionm.innerHTML = "Kebesaran";
          nyawa - 1;
          life.innerHTML = nyawa;
      }else if(jawAns < jawaban){
          questionm.innerHTML = "Kekecilan";
          nyawa - 1;
          life.innerHTML = nyawa;
      }else if(jawAns == String){
          questionm.innerHTML = "Masukan Inputan Yang Benar";
          nyawa - 1;
          life.innerHTML = nyawa;
      }
    });
    nyawa--;
  }
*/
let nyawa = 7;
jawaban = Math.round(Math.random() * 20);
kirim.addEventListener("click", function(){
  let jawAns = parseInt(answer.value);
  while(nyawa >= 0){
    if(jawAns == jawaban){
      teksHas.innerHTML = "Benar";
      break;
    }else if(jawAns > jawaban){
      teksHas.innerHTML = "Kebesaran";
      nyawa -= 1;
      life.innerHTML = nyawa;
      break;
    }else if(jawAns < jawaban){
      teksHas.innerHTML = "kekecilan";
      nyawa -= 1;
      life.innerHTML = nyawa;
      break;
    }
    nyawa--;
  }
});
tambah.addEventListener("click", function(){
  if(nyawa > 7){
    nyawa -= 1;
    life.innerHTML = nyawa;
  }else{
    nyawa += 1;
    life.innerHTML = nyawa;
  }
});
lihat.addEventListener("click", function(){
  teksHas.innerHTML = jawaban;
})