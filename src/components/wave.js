import React from 'react'

const Wave = () => {
  const [waves, setWaves] = React.useState(0)
  return (
    <div>
      <button
        style={{
          backgroundColor: 'rebeccapurple',
          color: 'white',
          border: 'none',
        }}
        onClick={() => setWaves(waves + 1)}
      >
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
        waves {waves}
      </button>
    </div>
  )
}

export default Wave
