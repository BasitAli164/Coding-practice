import React,{memo} from 'react'

const Memo = () => {
    console.log("From children")
  return (
    <div>
      <h4>Hi, today we are explore the Memo hook which is the update version of Pure Component in class base components:  </h4>

    </div>
  )
}

export default memo(Memo);
