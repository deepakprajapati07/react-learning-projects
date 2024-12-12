import './App.css'
import { useState } from 'react'
import questions from './questions.json'

const App = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const updateQues = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

			const questionSection = document.querySelector('.question-section');
			const answerSection = document.querySelector('.answer-section');

			if (questionSection && answerSection) {
				questionSection.style.display = 'none';
				answerSection.style.display = 'none';
			}
		}
	}

	const checkAnswer = (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1);
			alert('Correct Answer');
		} else {
			alert('Wrong Answer');
		}
		updateQues();
	}

	// start quiz again
	const startAgain = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);

		const questionSection = document.querySelector('.question-section');
		const answerSection = document.querySelector('.answer-section');

		if (questionSection && answerSection) {
			questionSection.style.display = 'flex';
			answerSection.style.display = 'flex';
		}
	}

	return (
		<div className='container'>

			<div className='score-section'>
				{showScore ? (
					<div className='startAgain'>
						<h1>Your scored {score} out of {questions.length}</h1>
						<button onClick={startAgain}>Start Again</button>
					</div>) : null}
			</div>

			<div className='question-section'>
				<div className='question-count'>
					<span>{currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='question-text'>
					{questions[currentQuestion].questionText}
				</div>
			</div>

			<div className='answer-section'>
				{questions[currentQuestion].answerOptions.map((answerOption, index) => (
					<button onClick={() => checkAnswer(answerOption.isCorrect)} key={index}>{String.fromCharCode(65 + index)}. {answerOption.answerText}</button>
				))}
			</div>
      
		</div>
	)
}

export default App
