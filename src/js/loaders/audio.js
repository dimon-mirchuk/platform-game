import {loadJSON} from "./loader";
import AudioBoard from "../components/AudioBoard";

export function loadAudioBoard(name, audioContext) {
    const loadAudio = createAudioLoader(audioContext)
    return loadJSON(`/assets/sound/${name}.json`)
        .then(audioSheet => {
            // console.log(audioSheet)
            // console.log(audioContext)
            const audioBoard = new AudioBoard()
            const fx = audioSheet.fx
            const jobs = []
            Object.keys(fx).forEach(name => {
                const url = fx[name].url
                const job = loadAudio(url)
                    .then(audioBuffer => {
                        audioBoard.addAudio(name, audioBuffer)
                    })
                jobs.push(job)
            })
            return Promise.all(jobs)
                .then(() => audioBoard)
        })
}

export function createAudioLoader(context) {
    return function loadAudio(url) {
        return fetch(url)
            .then(resp => {
                return resp.arrayBuffer()
            })
            .then(arrayBuffer => {
                return context.decodeAudioData(arrayBuffer)
            })
    }

}
