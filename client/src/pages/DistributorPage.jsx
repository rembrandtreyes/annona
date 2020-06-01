import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

import color from "../config/color"

export const DistributorWrapper = styled.div`
  max-width: 965px;
  margin: 0 auto;
  min-height: 100vh;

  h1 {
    text-align: center;
  }

  h3 {
    margin-top: 60px;
  }
`

export const DistributorForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.618em;
    margin-bottom: 8px;
  }

  input {
    height: 40px;
    margin-bottom: 24px;
    padding-left: 8px;
  }
`

export const StyledButton = styled.button`
  background-color: ${color.red1};
  color: ${color.light};
  font-size: 1.618em;
  font-weight: 600;
  width: fit-content;
  padding: 24px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

const DistributorPage = () => {
  const [name, setName] = useState("")
  const [kind, setKind] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [listOfDistributors, setListOfDistributors] = useState([])

  const handleSearch = (zipcode) => {
    axios
      .get(
        "http://ec2-54-144-45-173.compute-1.amazonaws.com:9000/distributors",
        {
          params: {
            zipcode: zipcode,
          },
        }
      )
      .then((response) => {
        console.log(response.data.rows)
        setListOfDistributors(response.data.rows)
      })
    console.log(zipcode)
  }

  const handleSubmit = (name, kind, email, zipcode) => {
    axios
      .post(
        "http://lec2-54-144-45-173.compute-1.amazonaws.com:9000/distributors",
        {
          name: name,
          kind: kind,
          email: email,
          zipcode: zipcode,
        }
      )
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <DistributorWrapper>
      <h1>Distributors</h1>
      <div>
        <DistributorForm>
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Enter zipcode</label>
          <input
            type="text"
            placeholder="Enter Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </DistributorForm>
        <StyledButton onClick={() => handleSubmit(name, kind, email, zipcode)}>
          Add me to the list!
        </StyledButton>
      </div>
      <DistributorForm>
        <h3>Search for a distributor</h3>
        <input
          type="text"
          placeholder="Enter Zipcode"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </DistributorForm>
      <StyledButton onClick={() => handleSearch(zipcode)}>
        Find a distributor!
      </StyledButton>
      <div>
        {listOfDistributors.map(({ name, kind, email, id }) => (
          <div key={id}>
            <div>Name: {name}</div>
            <div>Kind of food: {kind}</div>
            <div>Email: {email}</div>
          </div>
        ))}
      </div>
    </DistributorWrapper>
  )
}

export default DistributorPage
