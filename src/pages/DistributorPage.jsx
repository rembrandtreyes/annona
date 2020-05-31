import React, { useState, useEffect } from "react"

import axios from "axios"

const DistributorPage = () => {
  const [zipcode, setZipcode] = useState("")
  const [listOfDistributors, setListOfDistributors] = useState([])

  const handleSubmit = (zipcode) => {
    axios
      .get("http://localhost:9000/distributors", {
        params: {
          zipcode: zipcode,
        },
      })
      .then((response) => {
        console.log(response.data.rows)
        setListOfDistributors(response.data.rows)
      })
    console.log(zipcode)
  }

  // const handleChange = (event) => {
  //   // setName(input)
  //   console.log(event.target.value)
  //   // setKind(kind)
  // }

  return (
    <>
      <div>This is our distributors page</div>
      <p>Enter kind</p>
      <input type="text" onChange={(e) => setZipcode(e.target.value)} />
      <button onClick={() => handleSubmit(zipcode)}>Search your area</button>
      <div>Data</div>
      <div>{zipcode}</div>
      <div>
        {listOfDistributors.map(({ name, id }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    </>
  )
}

export default DistributorPage
