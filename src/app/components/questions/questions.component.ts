import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/questions.service';
import { Question } from 'src/app/model/question';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = [];
  constructor( private questionsService : QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(data =>{
      data.results.forEach(element => {
        let answers = element.incorrect_answers;
        answers.push(element.correct_answer)
        this.questions.push(new Question(element.question,answers,element.correct_answer))
      });
      console.log(this.questions);
    })
  }

  checkAnswer(answer,pregunta){
    console.log(answer === pregunta.correct_answer);
  }
}
