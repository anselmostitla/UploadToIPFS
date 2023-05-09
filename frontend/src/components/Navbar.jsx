import axios from 'axios'


export const Navbar = () => {

  const handleChange = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("photo", e.target.files[0])
    axios.post("http://localhost:5000/api/save", formData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err)=> console.log(err))
  }
  
  return(
    <div> 

      <input type="file" onChange={(e) => handleChange(e)}/>
      
    </div>
  )
}