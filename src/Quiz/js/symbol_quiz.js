(function(){

  const $quiz_box = document.querySelector('.quiz_box');
  const $quiz_A = document.querySelector('.quiz_A');
  const $answer_btn = document.querySelector('.answer_btn');
    
    //퀴즈 리스트
    function qList(){
        return fetch("./json/symbol_q.json")
        .then(res=>res.json())
        .then(json=>json);
    }

    window.onload = makeQuestion();
    
    function makeQuestion(){

      qList().then((item)=>{

        const i = Math.floor(Math.random() * item.length);

        $quiz_A.style.background = `url(${item[i].q.image_url}) no-repeat`
        $quiz_A.style.backgroundSize = "contain";
        $quiz_A.style.backgroundPosition = "center";

        console.log(i)
        console.log(item[i].q.image_url)

        printAnswer(item[i])
      })
    }

    function printAnswer(item){

      $quiz_box.innerHTML = `
      <div class="quiz_answer">${item.a.replace(/\n/g, '<br>')}</div>
      <a href="quiz_index.html"><div class="answer_btn">처음으로</div></a>
      `
      console.log(item.a);
    }
    
  
  })();