import logo from './logo.svg';
import './App.css';
import MenuIcon from "./component/appbar";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

 
function App() {


const[questionIndx,setquestionIndx]=useState(0);
const[marks,setMarks]=useState(0);
const [showResult,setshowResult]=useState(false);



const [questions,setquestion]= useState([
  {
    Question:"Q1: What does HTML stand for?",
    Answer:["A. Hyper Text Markup Language ","B.Hot Mail" ,"C.How to Make Lasagna"],
    correctAnswer:"A. Hyper Text Markup Language ",
  },
  {
    Question:"Q2: < br  / > What type of tag is this?",
    Answer:["A. Break tag ","B.  A broken one ","C. An opening tag"],
    correctAnswer:"A. Break tag ",
  },
  {
    Question:"Q3: < body > Is this an opening tag or a closing tag?",
    Answer:["A.Closing","B.Opening"],
    correctAnswer:"B.Opening",
  },
  {
    Question:"Q4: The year in which HTML was first proposed _______?",
    Answer:["A.2002","B.1998","C.2000","D.1990"],
    correctAnswer:"D.1990",
  },
  {
    Question:"Q5 :What tag is used to display a picture in a HTML page?",
    Answer:["A.picture","B.img","C.src"],
    correctAnswer:"B.img",
  },
  {
    Question:"Q6: HTML web pages can be read and rendered by _________?",
    Answer:["A.Web Browser","B.Interpreter","C.Compiler"],
    correctAnswer:"A.Web Browser",
  },
  {
    Question:"Q7: Which HTML tag produces the biggest heading?",
    Answer:["A.h3","B.h1","C.h7"],
    correctAnswer:"B.h1",
  },
  {
    Question:"Q8: HTML tags are surrounded by which type of brackets?",
    Answer:["A.Squart","B.Curly","C.Angle"],
   correctAnswer:"C.Angle",
  },
  {
    Question:"Q9: Why so JavaScript and Java have similar name?",
    Answer:["A.JavaScript is a stripped-down version of Java","B.JavaScript's syntax is loosely based on Java's","C.They both originated on the island of Java","D.None of the above"],
    correctAnswer:"B.JavaScript's syntax is loosely based on Java's",
  },
  {
    Question:"Q10:  ______ JavaScript is also called client-side JavaScript?",
    Answer:["A. Microsoft","B.LiveWire","C.Native","D.Navigator"],
    correctAnswer:"D.Navigator",
  }
])

 const nextquestion =()=>{
   if(questions.length-1 == questionIndx){
    setshowResult(true);
   }else{
    setquestionIndx(questionIndx+1)
   }

 }


  const checkAnswer = (Answer,correctAnswer) =>{

   if( Answer===correctAnswer ){
     setMarks(marks+1)

  
     setquestionIndx(questionIndx+1)
   }
 }




  return (

   
    <div className="App">
    
     <Typography  variant="h4" component="h4" className="p-5">{( marks/questions.length)*100}%</Typography> 
     <Grid>
      <MenuIcon />
      <div className='question-count'>
	<span>Question {questionIndx + 1}</span>/{questions.length}
   </div>
         <Grid container> 
            <Grid md={12}>
            <Typography variant="h4" component="h4" className="p-5">
            {questions[questionIndx].Question}
            </Typography>
          <hr/>
            </Grid>
            <Grid    className="p-3" md={12} container >
           { questions[questionIndx].Answer.map((e,i)=> (
              <Grid key={i}  className="p-3" md={6}>
                <Button onClick={()=>checkAnswer(questions[questionIndx].correctAnswer.Answer)}variant="contained">{e}</Button>

              </Grid>
               ) )}
              
            
            </Grid>
            <Grid className="p-2" md={12}>
                <Button onClick={()=>setquestionIndx(questionIndx+1)}variant="contained">NEXT</Button>
              </Grid>
              

            

          </Grid>
         

          </Grid>
    
 </div>
  )
   }


export default App;
