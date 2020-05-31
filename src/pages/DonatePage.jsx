import React, { useState, useEffect } from "react"

import axios from "axios"

const DonatePage = () => {
  const [kind, setKind] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (name, kind) => {
    axios
      .post("http://localhost:9000/providers", {
        name: name,
        kind: kind,
      })
      .then((response) => {
        console.log(response)
      })
    console.log(name)
  }

  // const handleChange = (event) => {
  //   // setName(input)
  //   console.log(event.target.value)
  //   // setKind(kind)
  // }

  return (
    <>
      <div>This is our donate page</div>
      <p>Enter kind</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setKind(e.target.value)} />
      <button onClick={() => handleSubmit(name, kind)}>Search your area</button>
      <div>Data</div>
      <div>{name}</div>
      <div>{kind}</div>
    </>
  )
}

export default DonatePage
