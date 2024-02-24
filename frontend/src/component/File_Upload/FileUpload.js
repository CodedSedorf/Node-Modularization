import React, {useState} from 'react'

const FileUpload = () => {
    const [myfile, setmyfile] = useState();

    const changeFile = (e)=>{
        console.log(e.target.files)
    }
  return (
    <>
        <input type="file" onChange={(e)=>changeFile(e)}/>
        <button className='my-2 btn btn-info'>Upload File</button>
    </>
  )
}

export default FileUpload