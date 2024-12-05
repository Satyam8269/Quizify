import { Fragment, useEffect } from "react"
import { Navbar, QuestionAndOptions } from "../../Components";
import axios from "axios";
import { useQuiz } from "../../context";


export const Quiz = () => {
  
    const { quizCategory, quiz, quizDispatch } = useQuiz();

    useEffect(() => {
        ( async () => {
            try {
                const { data: {data}} = await axios.get("https://quizbackend-uo1k.onrender.com/quiz",{
                    headers: { authorization: localStorage.getItem("token") }
                });   // we destructure data here from the object.
                const filteredData = data && data.length > 0 && data.filter(({category}) => category === quizCategory );
                if (filteredData && filteredData.length > 0) {
                    quizDispatch({
                      type: "SET_QUIZ",
                      payload: filteredData,
                    })
                    localStorage.setItem("quiz", JSON.stringify(filteredData));
                  }
            }catch(err) {
                console.log(err);
            }
        } )()   
    }, [quizCategory, quizDispatch]);

    return (
        <Fragment>
            <Navbar route="quiz" />
            {
                quiz && quiz.length > 0 && <QuestionAndOptions quizData={quiz} />
            }
            {/* If quiz data is there and if quiz length is greater than zero then pass the data in the component */}
        </Fragment>
    )
}