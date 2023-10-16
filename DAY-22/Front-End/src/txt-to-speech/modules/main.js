class VoiceAssistentMain {
    #speechSyn;
    #utter;
    constructor() {
        this.#speechSyn = window.speechSynthesis
        this.#utter = new SpeechSynthesisUtterance();
        this.#utter.onend = () => {
            this.#utter.text = null
        }
    }

    /**
     * 
     * @param {string} text 
     * @returns {boolean} - is playing 
     */

    speak(text) {
        if (this.#speechSyn.speaking) {
            return true
        }
        this.#utter.text = text
        this.#speechSyn.speak(this.#utter)
        return false
    }
    /**
 * @param {number} number - to pick a voice in a row
 * @param {function} callback
 */
    changeVoice(number) {
        const voices = this.#speechSyn.getVoices();
        if (voices.length < number) return false;
        this.#utter.voice = voices[number];
    }
}
export default VoiceAssistentMain