const questions=[
   {
      'que':'which is the markup language?',
       'a':'HTML',
       'b':'CSS',
       'c':'JavaScript',
       'd':'PHP',
       'correct':'a'
   },
   {
   'que':'what does css stands for?',
   'a':'cascading style sheet',
   'b':'jascad stylesheet',
   'c':'hyper markup',
   'd':'linited stylesheet',
   'correct':'a'
},
{
   'que':'What us the extension os javascript',
   'a':'.cs',
   'b':'.javascript',
   'c':'.jss',
   'd':'.js',
   'correct':'d' 
}

]

let index=0;
let total=questions.length;
let right=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.option');
const loadQuestion = () =>{
   if(index==total){
      return endQuiz();
   }
  
   reset();
   const data=questions[index];
   console.log(data);
   quesBox.innerText=`${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText=data.a;
   optionInputs[1].nextElementSibling.innerText=data.b;
   optionInputs[2].nextElementSibling.innerText=data.c;
   optionInputs[3].nextElementSibling.innerText=data.d;
   
}


const submitQuiz=()=>{
   const data=questions[index];
   const ans=getAnswer();
   if(ans==data.correct){
      right++;
   }
   index++;
   loadQuestion();
   return;
}

const getAnswer=()=>{
   let answer;
   optionInputs.forEach((input) => {
      if(input.checked){
         answer=input.value;
      }
   }
   )
   return answer;
}

const reset=()=>{
   optionInputs.forEach((input) => {
      if(input.checked){
         input.checked=false;
      }
   }
   )
}
 
const endQuiz=()=>
{
   if(index==total){
      document.getElementById("box").innerHTML=`<center><h3>The quiz is over. <br>Thank you for participating.</h3>
                                                <h2>${right}/${total} is the score`;
   }
}
loadQuestion(); 