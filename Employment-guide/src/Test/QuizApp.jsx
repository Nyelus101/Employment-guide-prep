import Quiz from "./Quiz";
import "./index.scss";
import { jsQuizz } from "./constants";

function QuizApp() {
    return <Quiz questions={jsQuizz.questions} />
}

export default QuizApp;