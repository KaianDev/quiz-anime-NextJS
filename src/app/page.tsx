"use client";
import { questions } from "@/data/questions";

import { QuestionEl } from "@/components/QuestionEl";
import { Result } from "@/components/Result";

import { useState } from "react";

const Page = () => {
    const title = "Quiz de Animes";
    const [current, setCurrent] = useState(0);
    const [answerList, setAnswerList] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);

    const goNextQuestion = () => {
        if (questions[current + 1]) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRightAnswer = (answer: number) => {
        if (answer === questions[current].answer)
            setCorrectAnswer(correctAnswer + 1);
        setAnswerList([...answerList, answer]);
        goNextQuestion();
    };

    const handleResetButton = () => {
        setShowResult(false);
        setCurrent(0);
        setCorrectAnswer(0);
        setAnswerList([]);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-zinc-800 p-2">
            {/* Quiz Area */}
            <section className="w-full sm:max-w-xl mx-auto bg-slate-300 text-zinc-800 rounded-md overflow-hidden shadow-md shadow-black">
                {/* Header */}
                <header className="p-3 border-b border-zinc-800">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                </header>

                {/* Question Area */}

                {!showResult && (
                    <QuestionEl
                        onAnswer={handleRightAnswer}
                        question={questions[current]}
                        count={current + 1}
                    />
                )}

                {showResult && (
                    <Result
                        answerList={answerList}
                        correct={correctAnswer}
                        questions={questions}
                    />
                )}

                {/* Footer */}

                <footer className="p-3 border-t border-zinc-800 text-center">

                  
                    {!showResult && (
                        <div>
                            {current + 1} de {questions.length}{" "}
                            {`pergunta${questions.length === 1 ? "" : "s"}`}
                        </div>
                    )}

                    {showResult && (
                        <div>
                            <button
                                onClick={handleResetButton}
                                className="text-gray-200 bg-zinc-800 px-2 py-1 rounded-md transition-all duration-300 hover:bg-zinc-700">
                                Reiniciar Quiz
                            </button>
                        </div>
                    )}
                </footer>
            </section>
        </div>
    );
};

export default Page;
// const Page = () => {
//     const nome = "Gabriel";
//     return <div>Oi {nome}</div>;
// };

// export default Page;
