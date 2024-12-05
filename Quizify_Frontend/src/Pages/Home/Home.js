import { useEffect, useState } from "react";
import { Navbar, QuizCard } from "../../Components/index";
import axios from "axios";
import "./Home.css";


export const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        ( async () => {
            try {
                const { data: {data}} = await axios.get("https://quizbackend-uo1k.onrender.com");   // we destructure data here from the object.
                setCategories(data);
            }catch(err) {
                console.log(err);
            }
        } )()
    }, []);

    return (
        <>
          <Navbar route="home" />
          <main className="main d-flex wrap gap-md align-center justify-center">
            {
                categories.map((category) => <QuizCard quizCategory={category} key={category.id} />)
            }
          </main>
        </>
    )
}