import { Howl } from 'howler';
import React, { useState } from 'react';
import { VoiceoverContext, VoiceoverContextData } from './voiceover-context';

type VoiceoverContextProviderProps = {
    children: JSX.Element | string
}

export const VoiceoverContextProvider = ({ children }: VoiceoverContextProviderProps ) => {
    const [voiceover, setVoiceover] = useState<Howl | undefined>();
    const [voiceoverMuted] = useState(false);
    const [currentVoiceover, setCurrentVoiceover] = useState<number | undefined>();

    const playVoiceover = (spriteName: string) => {
        if (voiceover && spriteName) {
            let vo: number;

            stopVoiceover();

            if (voiceoverMuted !== undefined && !voiceoverMuted) {
                console.debug(`Playing VO "${spriteName}".`)
                vo = voiceover.play(spriteName);
                setCurrentVoiceover(vo);
            }
        } else {
            console.debug(`VO playback skipped. Please check the VO is initialised and a valid sprite name provided.`)
        }
    }

    const stopVoiceover = () => {
        if (voiceover && currentVoiceover) {
            voiceover.stop(currentVoiceover);
        }
    }

    const value: VoiceoverContextData = {
        voiceover,
        setVoiceover,
        playVoiceover,
        stopVoiceover,
    }
    
    return (
        <VoiceoverContext.Provider value={value}>
            {children}
        </VoiceoverContext.Provider>
    );
}
