import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button, Col} from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'
import '../App.css'

const NewCat = () => {
const [success, setSuccess] = useState(false)
const [cats, setCats] = useState([])
const [form, setForm] = useState({
      name: '',
      age: '',
      enjoys: '',
      images:''
})
const handleChange = e => {
    setForm({
        //take all the existing form data and,...
        ...form,
        //...add new data to the end as it is typed
        [e.target.name]: e.target.value
    })
}
const handleNewCat = (e) =>{
  e.preventDefault()
  console.log(e.target.value.name);

}
const handleSubmit = e => {
  e.preventDefault()
  setCats(cats => [...cats,form])
  pushCats(form).then()
}
const pushCats = (freshCat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res =>{
      if(res.ok) {
        window.location.replace("/")
      }
    })
}
return(
<Form>
  <FormGroup>
    <Label htmlFor="name" id="name" sm={2}>Name</Label>
     <Col sm={10} md={6} lg={5}>
      <Input
        type="text"
        name="name"
        onChange={ handleChange }
        value={ form.name }
        className = "input-text"
        placeholder="Write you Catz! name here."
      />
     </Col>
  </FormGroup>

  <FormGroup>
    <Label htmlFor="age" id="age" sm={2}>Age</Label>
    <Col sm={10} md={6} lg={5}>
    <Input
      type="number"
      name="age"
      onChange={ handleChange }
      value={ form.age }
      placeholder="How old is your Cat?"
    />
     </Col>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="enjoys" id="enjoys" sm={2}>Enjoys</Label>
    <Col sm={10} md={6} lg={5}>
    <Input
      type="text"
      name="enjoys"
      onChange={ handleChange }
      value={ form.enjoys }
      placeholder="What does your Cat enjoy?"
    />
    </Col>
    </FormGroup>
    <FormGroup>
      <Label htmlFor="images" id="images" sm={2}>Image URL</Label>
      <Col sm={10} md={6} lg={5}>
      <Input
        type="text"
        name="images"
        onChange={ handleChange }
        value={ form.images }
        placeholder="Put Image Url Here"
      />
     </Col>
  </FormGroup>
   <Button onClick={handleSubmit} htmlFor="submit" id="submit" >Add New Cat</Button>
   { success && <Redirect to="http://localhost:3001/"/> }
    </Form>
)
}
export default NewCat
