import React, { useState, useEffect } from "react"

import axios from "axios"

const DistributorPage = () => {
  const [name, setName] = useState("")
  const [kind, setKind] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [listOfDistributors, setListOfDistributors] = useState([])

  const handleSearch = (zipcode) => {
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

  const handleSubmit = (name, kind, email, zipcode) => {
    axios
      .post("http://localhost:9000/distributors", {
        name: name,
        kind: kind,
        email: email,
        zipcode: zipcode,
      })
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <>
      <div>This is our distributors page</div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Kind of Food"
            onChange={(e) => setKind(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </form>
        <button onClick={() => handleSubmit(name, kind, email, zipcode)}>
          Add me to the list!
        </button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter Zipcode"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </form>
      <button onClick={() => handleSearch(zipcode)}>
        Search your area for a distributor!
      </button>
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
