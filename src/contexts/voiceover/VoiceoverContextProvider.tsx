import { Howl } from 'howler';
import React, { useEffect, useState } from 'react';
import { VoiceoverContext, VoiceoverContextData } from './voiceover-context';

type VoiceoverContextProviderProps = {
    children: JSX.Element | string;
};

export const VoiceoverContextProvider = ({ children }: VoiceoverContextProviderProps) => {
    const [voiceover, setVoiceover] = useState<Howl | undefined>();
    const [muted, setMuted] = useState(false);
    const [currentVoiceover, setCurrentVoiceover] = useState<number | undefined>();

    const playVoiceover = (spriteName: string) => {
        if (voiceover && spriteName) {
            let vo: number;

            stopVoiceover();

            if (muted !== undefined && !muted) {
                console.debug(`Playing VO "${spriteName}".`);
                vo = voiceover.play(spriteName);
                setCurrentVoiceover(vo);
            }
        } else {
            console.debug(`VO playback skipped. Please check the VO is initialised and a valid sprite name provided.`);
        }
    };

    const stopVoiceover = () => {
        if (voiceover && voiceover.playing(currentVoiceover)) {
            process.env.NODE_ENV !== 'development' && console.debug(`Stopping VO "${currentVoiceover}".`);
            voiceover.stop(currentVoiceover);
        } else if (voiceover) {
            process.env.NODE_ENV !== 'development' && console.debug(`Stopping VO playback.`);
            voiceover.stop();
        }
    };

    useEffect(() => {
        if (muted) {
            voiceover?.mute(true);
        } else {
            voiceover?.mute(false);
        }
    }, [muted]);

    const value: VoiceoverContextData = {
        voiceover,
        setVoiceover,
        playVoiceover,
        stopVoiceover,
        muted,
        setMuted,
    };

    return <VoiceoverContext.Provider value={value}>{children}</VoiceoverContext.Provider>;
};
