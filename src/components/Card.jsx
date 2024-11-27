import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Card({items, handleEdit , handleDelete}) {
  console.log ("itemsdata", items)
  return (
   <>
   
   <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={items.Image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{items.title}</h2>
    <p className="text-gray-600 mb-4">{items.desc}</p>
    <div className="flex justify-between items-center">
    <div className="flex space-x-2">
        <button  onClick={handleEdit} className="btn btn-outline btn-sm flex items-center space-x-1 text-sm">
        <FaEdit />  <span>Edit</span>
        </button>
        <button onClick={handleDelete} className="btn btn-outline btn-error btn-sm flex items-center space-x-1 text-sm" >
        <FaTrash /> <span>Delete</span>
        </button>
    </div> 
    </div>
  </div>
</div> 
   
   </>
  )
}
