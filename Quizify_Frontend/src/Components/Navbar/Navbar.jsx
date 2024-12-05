import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuiz } from '../../context';


export const Navbar = ({route}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz();

    const handleAuthClick = () => {
        if(token) {
            localStorage.clear();
            quizDispatch({
                type: "QUIT"
            })
        }
        navigate("/");      // We write outside the curley bracket because in every case if we click we go to the home page.
    }

    const handleEndGameClick = () => {
        quizDispatch({
            type: "QUIT"
        })
    }

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
        <div className="heading-title-icon d-flex grow-shrink-basis align-center">
            <img className="icon mr-1" src="https://media.istockphoto.com/id/1420958701/photo/question-mark-iconic-background-sunray-realistic-look-symbol-for-social.webp?a=1&b=1&s=612x612&w=0&k=20&c=HE8z59NCCBwlDkF7FDN82xxEvpIIeb1R-BTGbb8x0c4=" alt="logo" />
            <h1 className="heading-title">
                {
                    route === "home" || route === "login" ? (<Link to="/" className="link">Quizify</Link>) : "Quizify"
                }    
            </h1>
        </div>
        <nav className="navigation">
            <ul className="list-non-bullet">
                {/* <li className="list-item-inline">
                    <Link to="/" className="link cursor">Home</Link>
                </li>     */}
                {
                    route === "home" && (
                        <li className="list-item-inline">
                            <Link to="/auth/login" className="link cursor" onClick={handleAuthClick}> {token ? "Logout" : "Login"} </Link>
                        </li>
                    ) 
                }
                {
                    route === "result" && (
                        <Fragment>
                            <li className="list-item-inline">
                                <Link to="/" className="link cursor" onClick={handleEndGameClick}> Home </Link>
                            </li>
                            <li className="list-item-inline">
                                <span to="/" className="link cursor" onClick={handleAuthClick}> Logout </span>
                            </li>
                        </Fragment>
                    )
                }
                
            
                
            </ul>
        </nav>
    </header>
  )
}
