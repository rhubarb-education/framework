import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { actions, sendAnalytics } from '../../services/analytics';
// import VoiceoverContext from '../misc/voiceover-context';
import DefaultWrapper from './Wrapper';

export interface IModule {
    onComplete: (name: string) => void;
}

interface ModuleProps {
    name: string;
    slides: any[];
    index?: number;
    onComplete(name: any): void;
    defaultHeader: JSX.Element;
    data: object;
    devIndex?: number;
    Wrapper?: React.FC;
}

export const Module = ({
    name,
    slides,
    index = 0,
    onComplete,
    defaultHeader,
    data,
    devIndex = 0,
    Wrapper = DefaultWrapper,
}: ModuleProps) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Development mode enabled!');

        // check if dev cookie
        let cookieData: any = Cookies.get(`bfg_dev`);
        if (cookieData) {
            cookieData = JSON.parse(cookieData);
        }

        if (cookieData && cookieData[name]) {
            index = parseInt(cookieData[name]);
        } else {
            index = devIndex;
        }
    }
    const [slideIndex, setSlideIndex] = useState(index);

    // const { voiceover } = useContext(VoiceoverContext);

    // useEffect(() => {
    //     voiceover?.stop();
    // }, [slideIndex]);

    // also handle slide pos saving...
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            Cookies.set(`bfg_dev`, {
                [name]: slideIndex
            })
        }
    }, [slideIndex]);

    const renderSlide = (index: number): JSX.Element => {
        if (typeof slides[index] === 'undefined') {
            return <p onKeyDown={() => console.log('go')}>Error rendering slide (404)</p>;
        }

        if (index === slides.length - 1) {
            sendAnalytics(name, {
                slide: index,
                type: actions.finalSlide,
            });
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
                    data={data}
                    currentIndex={index}
                />
            </Wrapper>
        );
    };

    const nextSlide = () => {
        sendAnalytics(name, {
            slide: slideIndex + 1,
            type: actions.nextSlide,
        });
        setSlideIndex(slideIndex + 1);
    };

    const previousSlide = () => {
        setSlideIndex(slideIndex - 1);
    };

    const gotoSlide = (targetIndex: number) => {
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
                            console.log(slideIndex);
                            previousSlide();
                        } else if (key === 'right') {
                            console.log(slideIndex);
                            nextSlide();
                        }
                    }}
                />
            );
        }
        return null;
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