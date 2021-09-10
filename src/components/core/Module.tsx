import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
// import VoiceoverContext from '../misc/voiceover-context';
import DefaultWrapper from './template/Wrapper';

export interface IModule {
    onComplete: (name: string) => void;
}

interface ModuleProps {
    name: string;
    slides: any[];
    index?: number;
    onComplete: (name: any) => void;
    onSlideChange?: (slideIndex: number) => void;
    onNextSlide?: (slideIndex: number) => void;
    onFinalSlide?: () => void;
    defaultHeader: JSX.Element;
    defaultFooter: JSX.Element;
    data: object;
    devIndex?: number;
    Wrapper?: React.FC;
    dataStoreName?: string;
}

export const Module = ({
    name,
    slides,
    index = 0,
    onComplete,
    onSlideChange = () => {},
    onNextSlide = () => {},
    onFinalSlide = () => {},
    defaultHeader,
    defaultFooter,
    data,
    devIndex = 0,
    Wrapper = DefaultWrapper,
    dataStoreName = 'rbe',
}: ModuleProps) => {
    const [slideIndex, setSlideIndex] = useState(index);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }

        console.debug('Development mode enabled!');

        let cookieData: any = localStorage.getItem(`${dataStoreName}`);
        if (cookieData) {
            cookieData = JSON.parse(atob(cookieData));
        }

        if (cookieData && cookieData[name]) {
            index = parseInt(cookieData[name]);
        } else {
            index = devIndex;
        }

        setSlideIndex(index);
    }, [setSlideIndex]);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }

        localStorage.setItem(
            `${dataStoreName}`,
            btoa(
                JSON.stringify({
                    [name]: slideIndex,
                }),
            ),
        );
    }, [slideIndex, name]);

    const nextSlide = () => {
        onSlideChange(slideIndex + 1);
        onNextSlide(slideIndex + 1);
        setSlideIndex(slideIndex + 1);
    };

    const previousSlide = () => {
        onSlideChange(slideIndex - 1);
        setSlideIndex(slideIndex - 1);
    };

    const gotoSlide = (targetIndex: number) => {
        onSlideChange(targetIndex);
        setSlideIndex(targetIndex);
    };

    const keyboardShortcuts = () => {
        if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === 'true') {
            return (
                <KeyboardEventHandler
                    handleKeys={['left', 'right']}
                    handleFocusableElements={true}
                    onKeyEvent={(key: any) => {
                        if (key === 'left') {
                            console.debug(slideIndex);
                            previousSlide();
                        } else if (key === 'right') {
                            console.debug(slideIndex);
                            nextSlide();
                        }
                    }}
                />
            );
        }
        return null;
    };

    const renderSlide = (index: number): JSX.Element => {
        if (typeof slides[index] === 'undefined') {
            return <p onKeyDown={() => console.log('go')}>Error rendering slide (404)</p>;
        }

        if (index === slides.length - 1) {
            onFinalSlide();
        }

        const CurrentSlide = slides[index];
        return (
            <Wrapper>
                <CurrentSlide
                    nextSlide={nextSlide}
                    previousSlide={previousSlide}
                    gotoSlide={(i: number) => gotoSlide(i)}
                    onComplete={() => onComplete(name)}
                    defaultHeader={defaultHeader}
                    defaultFooter={defaultFooter}
                    data={data}
                    currentIndex={index}
                />
            </Wrapper>
        );
    };

    return slides ? (
        <React.Fragment>
            {/* <Prompt when={slideIndex !== slides.length - 1} message="Are you sure you want to leave this module?" /> */}
            {keyboardShortcuts()}

            {renderSlide(slideIndex)}
        </React.Fragment>
    ) : (
        <p>Error! No slides provided.</p>
    );
};
