import "./QNA.css";
import { useQuiz } from "../../context"  
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const QuestionAndOptions = ({quizData}) => {

    const [currentQuiz] = quizData;
    const {title, quiz} = currentQuiz;

    const navigate = useNavigate();

    const { index, score, quizDispatch, selectedOption } = useQuiz();

    const handleNextQuestionClick = () => {
        localStorage.setItem("index", index+1);
        if(index !== quiz.length - 1) {
            quizDispatch({
                type: "NEXT_QUESTION"
            })
        }
        else {
            quizDispatch({
                type: "SUBMIT"
            })
            navigate("/result");
        }  
    }

    const handleAnswerClick = (optionId, isCorrect) => {
        quizDispatch({
            type: "SET_SELECTED_OPTION",
            payload: { optionId, isCorrect }
        })
    }

    const handleQuitClick = () => {
        quizDispatch({
            type: "QUIT"
        })
        navigate("/");
    }

    useEffect(() => {
        localStorage.setItem("option", selectedOption);
        localStorage.setItem("score", score);
    }, [selectedOption, score])

    return (
        <main className="d-flex justify-center qsn-main">
            <section className="question-dialog container-flex">
                <h2 className="d-flex justify-center qsn-title">
                    {title}
                </h2>
                <div className="qsn-scr">
                    <span>Question: {index + 1}/{quiz.length}</span>
                    <span className="score">Score: {score}</span>
                </div>
                <div className="question">
                    <span>Q{index+1}: {quiz[index].question}</span>
                </div>
                <div className="options-box">
                    {
                        quiz[index].options.map(({id, option, isCorrect}) => (
                            <button key={id} className={`button option d-flex justify-center ${selectedOption && isCorrect ? "success" : ""} ${selectedOption === id && !isCorrect ? "error" : ""}`} onClick={() => handleAnswerClick(id, isCorrect)} disabled={selectedOption}>{option}</button>
                        ))
                    } 
                </div>
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="play-btn button btn-secondary cursor" onClick={handleQuitClick}>Quit</button>
                        <button className="nxt-qsn play-now-btn button btn-primary cursor" onClick={handleNextQuestionClick}>{ index === quiz.length - 1 ? "Submit" : "Next Question" }</button>
                    </div>
                </div>
            </section>
        </main>
    )
}