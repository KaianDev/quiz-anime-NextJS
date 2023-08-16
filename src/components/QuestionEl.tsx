import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
};
export const QuestionEl = ({ question, count, onAnswer }: Props) => {
    const [selectAnswer, setSelectedAnswer] = useState<null | number>(null);

    const handleClickAlternative = (key: number) => {
        if (selectAnswer === null) {
            setSelectedAnswer(key);
        }
        setTimeout(() => {
            onAnswer(key);
            setSelectedAnswer(null);
        }, 1400);
    };

    return (
        <section className="p-3">
            <h2 className="text-lg font-semibold leading-tight">
                {count}. {question.question}
            </h2>
            <div>
                {question.alternatives.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => handleClickAlternative(key)}
                        className={`p-1 bg-slate-400 my-2 rounded-md  transition-all duration-300
                        ${
                            selectAnswer !== null
                                ? "cursor-auto"
                                : "cursor-pointer hover:opacity-60"
                        }
                        ${
                            selectAnswer !== null &&
                            selectAnswer === key &&
                            selectAnswer === question.answer &&
                            "bg-green-400"
                        }
                        ${
                            selectAnswer !== null &&
                            selectAnswer === key &&
                            selectAnswer !== question.answer &&
                            "bg-red-400"
                        }

                        `}>
                        <span>
                            {key === 0 && "a) "}
                            {key === 1 && "b) "}
                            {key === 2 && "c) "}
                            {key === 3 && "d) "}
                        </span>
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
};
