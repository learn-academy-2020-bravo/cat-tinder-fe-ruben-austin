import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button, Col} from 'reactstrap'
import '../App.css'

const NewCat = () => {
const [cats, setCats] = useState([])
const [form, setForm] = useState({
      name: '',
      age: '',
      enjoys: ''
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
  console.log(form)
}
// const pushCats = (freshCat) => {
//     return fetch("http://localhost:3000/cats", {
//       body: JSON.stringify(freshCat),
//       headers: {
//         "Content-Type": "application/json"
//       },
//       method: "POST"
//     })
//     .then(res =>{
//       if(res.ok) {
//         window.location.replace("/cats")
//       }
//     })
// }
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
        placeholder="with a placeholder"
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
      placeholder="with a placeholder"
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
      placeholder="with a placeholder"
    />
     </Col>
  </FormGroup>
   <Button onClick={handleSubmit} htmlFor="submit" id="submit" >Add New Cat</Button>
</Form>
)
}
export default NewCat
