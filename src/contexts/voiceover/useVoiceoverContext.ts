import { useContext } from 'react';
import { VoiceoverContext } from './voiceover-context';

export const useVoiceoverContext = () => {
    const context = useContext(VoiceoverContext);

    if (context === undefined) {
        throw new Error('useVoiceoverContext must be within a VoiceoverProvider');
    }

    return context;
};
