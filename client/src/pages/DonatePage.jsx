import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import color from "../config/color"

export const DonorWrapper = styled.div`
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

export const DonorForm = styled.form`
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

export const ListOfProviders = styled.div`
  margin-top: 24px;
`

const DonatePage = () => {
  const [name, setName] = useState("")
  const [kind, setKind] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [listOfProviders, setListOfProviders] = useState([])

  const handleSearch = (zipcode) => {
    axios
      .get("http://ec2-54-144-45-173.compute-1.amazonaws.com:9000/providers", {
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
      .post("http://ec2-54-144-45-173.compute-1.amazonaws.com:9000/providers", {
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
    <DonorWrapper>
      <h1>Donors</h1>
      <div>
        <DonorForm>
          <label>Enter Full Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>What are you donating?</label>
          <input
            type="text"
            placeholder="Enter Kind of Food"
            onChange={(e) => setKind(e.target.value)}
          />
          <label>Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter Zipcode</label>
          <input
            type="text"
            placeholder="Enter Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </DonorForm>
        <StyledButton onClick={() => handleSubmit(name, kind, email, zipcode)}>
          Add me to the list!
        </StyledButton>
      </div>
      <DonorForm>
        <h3>Search for a donor</h3>
        <label>Search your zipcode</label>
        <input
          type="text"
          placeholder="Enter Zipcode"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </DonorForm>
      <StyledButton onClick={() => handleSearch(zipcode)}>
        Find a donor!
      </StyledButton>
      <div>
        {listOfProviders.map(({ name, kind, email, id }) => (
          <ListOfProviders key={id}>
            <div>Name: {name}</div>
            <div>Kind of food: {kind}</div>
            <div>Email: {email}</div>
          </ListOfProviders>
        ))}
      </div>
    </DonorWrapper>
  )
}

export default DonatePage
