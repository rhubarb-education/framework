import { Howl } from 'howler';
import { createContext, Dispatch, SetStateAction } from 'react';

export type VoiceoverContextData = {
    voiceover: Howl | undefined;
    setVoiceover: Dispatch<SetStateAction<Howl | undefined>> | undefined;
    playVoiceover: (spriteName: string) => void;
    stopVoiceover: () => void;
    muted: boolean;
    setMuted: (status: boolean) => void;
};

export const VoiceoverContext = createContext<VoiceoverContextData>({
    voiceover: undefined,
    setVoiceover: undefined,
    playVoiceover: () => {},
    stopVoiceover: () => {},
    muted: false,
    setMuted: () => {},
});
