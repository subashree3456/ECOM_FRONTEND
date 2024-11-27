import React, { useEffect, useState } from "react";
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import Delete from "../components/delete";
import toast from "react-hot-toast";

export default function Home() {
  const navigate = useNavigate(); 
  const [productId , setProductId]= useState('');
  const [delId,setDelId]=useState('')
  const [show,setShow]=useState(false)
  const [products, setProducts] = useState([]);
  const [reload,setReload]=useState(false);
  const {Auth} =useSelector((state)=>state.auth)
  console.log('User',Auth)

  useEffect(()=>{
    if (!Auth) {
     navigate('/login')
    }
   },[Auth])

  useEffect(() => {   
      GetProducts();      
    
  }, [reload]);

  const GetProducts = async () => {
    try {
      const reposne = await axios.get(
        `http://localhost:8000/product/getProducts/${Auth._id}`
      );
       const data = reposne.data;
       setProducts(data.products);
       console.log('Products',data);
      
     } catch (error) {
      console.log(error);
    }
  };

const closeModal = () =>{
  document.getElementById('addProductModal').close();
}

const handleEditeitem = (item) =>{
  setProductId(item)
  document.getElementById('editmodal').showModal();
}

const closeEditModal= () =>{
  document.getElementById('editmodal').close();
}

const handleDelete=(id) =>{
  setDelId(id)
  setShow(true)
}


const handledleteapi=async()=>{
  try {
    
      
    const response= await axios.delete(`http://localhost:8000/product/delete/${delId}`)
     
  
    const data=response.data
    console.log('delete',data)
    if (response.status==200) {
      toast.success(data.message, {
        style: {
          zIndex: 999,
        },
      });
      setShow(false)


      setReload((prev) => !prev)
    }
    console.log(data)
  
} catch (error) {
  console.log(error)

}
}




  return (
    <>
    <Navbar/>
    <AddModal closeModal={closeModal} setReload={setReload} />
    <EditModal item={productId} closeModal={closeEditModal} setReload={setReload} />
    <Delete  setShow={setShow} show={show} handleDlete={handledleteapi}/>

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Card Collection
          </h1>
          <p className="text-gray-800">Explore the different options below</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.length === 0 ? (
            <h1 className="text-center font-bold text-xl text-gray-800">No Product Found</h1>
          ): ""}

            {products && products.map((item) => {
              return (
                
              <Card items={item} handleEdit={()=>handleEditeitem(item)} 
              handleDelete={()=>handleDelete(item._id)}
              />

              )

            })}
       
        
        </div>
      </div>

    </>
          )
}



//  <Card items={item}/> 

