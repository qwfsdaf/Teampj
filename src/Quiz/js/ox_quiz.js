(function(){

  const $quiz_Q = document.querySelector('.quiz_Q');
  const $quiz_A = document.querySelector('.quiz_A_list');
    
    //퀴즈 리스트
    function qList(){
        return fetch("./json/ox_q.json")
        .then(res=>res.json())
        .then(json=>json);
    }

    window.onload = makeQuestion();
    
    function makeQuestion(){

      qList().then((item)=>{

        const i = Math.floor(Math.random() * item.length);

        $quiz_Q.innerHTML = `${item[i].q.replace(/\\n/g, '<br>')}`

        $quiz_A.innerHTML = `
        <ul>
        <li class="quiz_A_item" id="item_O"><a href="${item[i].a[0].O_url}"><div class="quiz_A_item_O">O</div></a></li>
        <li class="quiz_A_item" id="item_X"><a href="${item[i].a[1].X_url}"><div class="quiz_A_item_X">X</div></a></li>
        </ul>`
      })
    }
    
  
  })();