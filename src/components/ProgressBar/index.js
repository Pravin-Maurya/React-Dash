import React from 'react'

const ProgressBar = ({bgcolor, progress, height}) => {
  const Parentdiv = {
    height,
    width: '100px',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 10,
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  )
}

export default ProgressBar
