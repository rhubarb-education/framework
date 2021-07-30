import * as React from 'react';
import { ISlide, Slide } from '../../dist';

const ExampleSlide = ({ defaultHeader, onComplete }: ISlide) => {
    return (
        <Slide>
            <h1>Example Slide</h1>
            <button onClick={onComplete}>Complete</button>
        </Slide>
    );
}

export default ExampleSlide;