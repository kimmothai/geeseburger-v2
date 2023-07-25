import { useState } from 'preact/hooks'
import './app.css'

interface Button {
  name: string
  file: string
}

const SRC_SOUNDS = 'src/sounds/'
const SOUND_FORMAT = 'ogg'

function slugify(str: string): string {
  return str.trim().replace(' ', '-').toLowerCase()
}

function getFilePath(filename: string): string {
  const filePath = `${SRC_SOUNDS}${filename}.${SOUND_FORMAT}`
  return filePath
}

function Button(props: Button, index: number, volume: number) {
  const { name, file } = props
  const filePath = getFilePath(file)

  const i = index % 2 !== 0 ? index - 1 : index

  return (
    <button
      class='play button'
      onClick={() => {
        /*  
          New instance of Audio created here to allow spamming sounds
          Can be potentially slow if the sounds need to be loaded again.
          Some times sounds don't play immediately after pressing the button if the app has been inactive for a while
        */
        const audio = new Audio(filePath)
        audio.volume = volume / 100
        audio.play()
      }}
      key={`${name}-${file}`}
      id={slugify(name)}
      style={{ '--i': i }} // Hacky way of using the row number in pure CSS. Should not have this and use SASS or something similar instead so that code and style are decoupled.
    >
      {/* Has to be div and not span because inline elements are not affected by transform property */}
      <div class='button-text' key={`${name}-${file}`}>
        {name}
      </div>
    </button>
  )
}

export function App() {
  const data: Button[] = [
    {
      name: 'Come on',
      file: 'comeon'
    },
    {
      name: 'Deadly Rave',
      file: 'deadlyrave'
    },
    {
      name: 'Die yabo',
      file: 'dieyabo'
    },
    {
      name: 'Double Reppuuken',
      file: 'double'
    },
    {
      name: 'I will stain my hams',
      file: 'stainmyhound'
    },
    {
      name: 'Jaeiken',
      file: 'jaeiken'
    },
    {
      name: 'K.O.',
      file: 'lego'
    },
    {
      name: 'Pathetic',
      file: 'pathetic'
    },
    {
      name: 'Predictabo',
      file: 'predictable'
    },
    {
      name: 'Raging Storm',
      file: 'raising'
    },
    {
      name: 'Reppuuken',
      file: 'reppuuken'
    },
    {
      name: 'Shippuuken',
      file: 'shippuuken'
    },

    {
      name: 'Too easy!',
      file: 'tooeasy'
    },
    {
      name: 'You are weak',
      file: 'youareweak'
    },
    {
      name: 'You cannot escape',
      file: 'youcannot'
    }
  ]

  const [volume, setVolume] = useState(100)

  function Volume({ volume }: { volume: number }) {
    const CHANGE = 10
    return (
      <div className='volume'>
        <div id='volume-down'>🌊</div>
        <input
          type='range'
          min={0}
          max={100}
          step={CHANGE}
          value={volume}
          onChange={(event) => {
            const { target } = event
            // Type guarding
            if (target) {
              setVolume((target as HTMLInputElement).valueAsNumber)
            }
          }}
        />
        <div id='volume-up'>🌊</div>
      </div>
    )
  }

  return (
    <div className='main'>
      <h1>
        Geese Howard Soundboard <span id='rare'>(ULTRA RARE)</span>
      </h1>
      <Volume volume={volume} />
      <div id='buttons' class='container'>
        {data.map((item, index) => Button(item, index, volume))}
      </div>
    </div>
  )
}
