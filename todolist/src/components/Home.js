import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

function Home() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogs = localStorage.getItem('blogs')
        setBlogs(JSON.parse(blogs))
    }, [blogs])

    const handleDelete = (blogOutIndex) => {
        const _blogs = blogs.filter((blog, blogInIndex) => {
            if (blogInIndex !== blogOutIndex) {
                return blog
            }
        })
        console.log(_blogs)
        setBlogs(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
    }

    const handleEdit = (blogIndex) => {
        localStorage.setItem('editIndex', blogIndex)
        navigate('/edit')
    }



    return (
        <> 
           

            <table style={{width:"100%", border: "1px solid black",textAlign:'center'}} >
            <thead>
                <tr>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}>Firstname</th>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}>Lastname</th>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}>Email</th>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}>Phone Number</th>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}><EditIcon/></th>
                    <th style={{width:'20%', border: "1px solid black",textAlign:'center'}}><DeleteIcon/></th>
                </tr>
            </thead>
            <tbody>
            {
                blogs && blogs.length > 0 ?
                    blogs.map((blogs, blogIndex) => {
                        return (
                                 <tr>
                                    <td><span style={{display: 'inline-block',minWidth: '200px'}}>{blogs?.firstname} </span></td>
                                    <td><span style={{display: 'inline-block',minWidth: '200px'}}>{blogs?.lastname}</span></td>
                                    <td><span style={{display: 'inline-block',minWidth: '200px'}}>{blogs?.email} </span></td>
                                    <td><span style={{display: 'inline-block',minWidth: '200px'}}>{blogs?.phone}</span></td>
                                    <td><EditIcon  onClick={() => handleEdit(blogIndex)} ></EditIcon></td>
                                    <td><DeleteIcon onClick={() => handleDelete(blogIndex)} ></DeleteIcon></td>
                                </tr>
                               
                        )
                    })
                    : 
                    'No Data found'
            }
            </tbody>
           </table>

            <br />
            <Button onClick={() => {navigate('/add')}} variant="contained" > ADD MORE </Button>
             <br />
        </>
    )
}

export default Home
