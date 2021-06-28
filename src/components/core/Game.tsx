import { useEffect, useState } from 'react';

export interface GameProps<T> {
    gameData: Array<T>;
    index?: number;
    onGameComplete: () => void;
}

export interface GameQuestionProps {
    onQuestionComplete: () => void;
}

export interface GameQuestion {}

export function useGameLogic<T>(
    gameData: Array<T>,
    onGameComplete: () => void,
    onNextQuestion: () => void,
    index = 0,
): [T, () => void] {
    const [questions] = useState(gameData);
    const [questionIndex, setQuestionIndex] = useState(index);
    const [question, setQuestion] = useState<any>(null);

    useEffect(() => {
        setQuestion(gameData[questionIndex]);
    }, [questionIndex, gameData, questions]);

    const nextQuestion = () => {
        // console.log('HANDLER', gameData[questionIndex + 1]);
        if (typeof gameData[questionIndex + 1] === 'undefined') {
            onGameComplete();
        } else {
            onNextQuestion();
            setQuestionIndex(questionIndex + 1);
        }
    };

    return [question, nextQuestion];
}
