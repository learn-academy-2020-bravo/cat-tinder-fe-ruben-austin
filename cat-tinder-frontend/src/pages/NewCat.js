import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

const NewCat = () => {
const [form, setState] = useState({
      name: '',
      age: '',
      enjoys: ''
})
const handleChange = e => {
    setState({
        //take all the existing form data and,...
        ...form,
        //...add new data to the end as it is typed
        [e.target.name]: e.target.value
    })
}
const handleSubmit = e => {
  e.preventDefault()
  console.log(form);
  setCats(cats => [...cats, form])
  pushCats(form)
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
        window.location.replace("/cats")
      }
    })
}
return(
<Form>
  <FormGroup>
    <Label htmlFor="name" id="name">Name</Label>
    <Input
      type="text"
      name="name"
      onChange={ handleChange }
      value={ form.name }
    />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="age" id="age">Age</Label>
    <Input
      type="number"
      name="Age"
      onChange={ handleChange }
      value={ form.name }
    />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
    <Input
      type="text"
      name="Enjoys"
      onChange={ handleChange }
      value={ form.name }
    />
  </FormGroup>
   <Button htmlFor="submit" id="submit">Add New Cat</Button>
</Form>
)
}
export default NewCat
