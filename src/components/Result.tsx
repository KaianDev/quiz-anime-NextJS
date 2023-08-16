import { Question } from "@/types/Question";

type Props = {
    correct: number;
    questions: Question[];
    answerList: number[];
};

export const Result = ({ correct, questions, answerList }: Props) => {
    return (
        <div className="p-3">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Gabarito </h2>
                <span className="text-sm text-right">
                    {correct >= questions.length / 2
                        ? "Parabéns 😁"
                        : "Que Pena 😕"}
                    <br />
                    Você acertou {correct} de {questions.length}
                </span>
            </div>
            <div className="my-2 py-2 max-h-96 overflow-y-auto">
                {questions.map((item, key) => (
                    <div className="mb-2">
                        <div className="font-semibold" key={key}>
                            {key + 1}.{item.question}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <p>R - {item.alternatives[answerList[key]]}</p>
                            <p>
                                {answerList[key] === item.answer ? "✅" : "❌"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
