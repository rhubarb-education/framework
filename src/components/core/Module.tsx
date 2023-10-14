import React, { useEffect, useState } from 'react';
import { useVoiceoverContext } from '../../contexts/voiceover/useVoiceoverContext';
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
    dataStoreEnabled?: boolean;
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
    dataStoreEnabled = false,
}: ModuleProps) => {
    const [slideIndex, setSlideIndex] = useState(index);
    const { muted, setMuted } = useVoiceoverContext();

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development' && dataStoreEnabled === false) {
            return;
        }

        console.debug('Framework initialised');

        let cookieData: any = localStorage.getItem(`${dataStoreName}`);
        if (cookieData) {
            cookieData = JSON.parse(atob(cookieData));
        }

        if (cookieData && cookieData[name]) {
            index = parseInt(cookieData[name].index ?? 0);
            setMuted(cookieData[name].muted ?? true);
        } else {
            index = devIndex;
            setMuted(true);
        }

        setSlideIndex(index);
    }, [setSlideIndex]);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development' && dataStoreEnabled === false) {
            return;
        }

        localStorage.setItem(
            `${dataStoreName}`,
            btoa(
                JSON.stringify({
                    [name]: {
                        index: slideIndex,
                        muted: muted,
                    },
                }),
            ),
        );
    }, [slideIndex, name, muted]);

    useEffect(() => {
        process.env.NODE_ENV !== 'development' && console.debug('Change slide event', slideIndex);
        onSlideChange(slideIndex);
    }, [slideIndex, onSlideChange]);

    const nextSlide = () => {
        onNextSlide(slideIndex + 1);
        setSlideIndex(slideIndex + 1);
    };

    const previousSlide = () => {
        setSlideIndex(slideIndex - 1);
    };

    const gotoSlide = (targetIndex: number) => {
        setSlideIndex(targetIndex);
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
            {renderSlide(slideIndex)}
        </React.Fragment>
    ) : (
        <p>Error! No slides provided.</p>
    );
};
