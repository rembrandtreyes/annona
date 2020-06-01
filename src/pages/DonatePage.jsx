import React, { useState, useEffect } from "react"

import axios from "axios"

const DonatePage = () => {
  const [name, setName] = useState("")
  const [kind, setKind] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [listOfProviders, setListOfProviders] = useState([])

  const handleSearch = (zipcode) => {
    axios
      .get("http://localhost:9000/providers", {
        params: {
          zipcode: zipcode,
        },
      })
      .then((response) => {
        console.log(response.data)
        setListOfProviders(response.data.rows)
      })
    console.log(zipcode)
  }

  const handleSubmit = (name, kind, email, zipcode) => {
    axios
      .post("http://localhost:9000/providers", {
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
      <div>This is our Providers page</div>
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
        {listOfProviders.map(({ name, id }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    </>
  )
}

export default DonatePage
