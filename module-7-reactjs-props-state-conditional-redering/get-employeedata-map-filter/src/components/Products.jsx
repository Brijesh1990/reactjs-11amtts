import React from 'react'

export default function Products() {
const Data=
[
{
"id":1,
"name":"Samsung guru",
"qty":1,
"price":1350,
"category":"electronics",
"photo":"https://doiqgxrhp4iii.cloudfront.net/B315EZDD%20GOLD_3_11zon.jpg",
},
{
"id":2,
"name":"Samsung galexy",
"qty":1,
"price":1350,
"category":"electronics",
"photo":"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/g/f/i/galaxy-a15-5g-sm-a156ezbnins-samsung-original-imagwkgzv7vs8zd2.jpeg?q=90&crop=false",
},
{
"id":3,
"name":"Samsung fold",
"qty":1,
"price":1350,
"category":"electronics",
"photo":"https://m.media-amazon.com/images/I/714QNdK8BWL.jpg",
},

{
"id":4,
"name":"Samsung flip",
"qty":1,
"price":1350,
"category":"electronics",
"photo":"https://rukminim2.flixcart.com/image/850/1000/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=20&crop=false",
},
{
"id":5,
"name":"Ramanujam",
"qty":1,
"price":1350,
"category":"books",
"photo":"https://www.vivabooksindia.com/media/uploads/product/largeImage/product_1718878580_61bb1f874d4cc4a8b987.jpg",
},
{
"id":6,
"name":"Tulsi das",
"qty":1,
"price":1350,
"category":"books",
"photo":"https://m.media-amazon.com/images/I/816-7xgWaJL.jpg",
},

{
"id":7,
"name":"Plate",
"qty":1,
"price":1350,
"category":"kitchen",
"photo":"https://media.istockphoto.com/id/184276935/photo/empty-plate-on-white.jpg?s=612x612&w=0&k=20&c=ZRYlQdMJIfjoXbbPzygVkg8Hb9uYSDeEpY7dMdoMtdQ=",
},
{
"id":8,
"name":"spoon",
"qty":1,
"price":1350,
"category":"kitchen",
"photo":"https://m.media-amazon.com/images/I/514nTHwlFnL.jpg",
},
]



return (
<div className='w-10/12 mx-auto mt-14 bg-black text-white p-5'>
<h1 className='text-3xl'>Get all employee Data whose age is less than 35<button type='button' className='w-52 p-2 text-white bg-red-400 float-end text-xl'>Export Data</button></h1>  

<table className='w-full mt-9'>
<tr>
<th>#id</th>
<th>Photo</th>
<th>Name</th>
<th>qty</th>
<th>Price</th>
<th>Category</th>
<th>Action</th>
</tr>    

{/* display dynamic list */}
{/* {Data && Data.map((item)=>{ */}

{Data.filter((key,items)=>key.category=='electronics').map((item)=>{ 
return(
<>
<tr className='text-center'>
<td>{item.id}</td>
<td><img src={item.photo} className='w-36 rounded-full ms-52' /></td>

<td>{item.name}</td>

<td>{item.qty}</td>
<td>{item.price}</td>
<td>{item.category}</td>
<td><a href='' className='text-red-500'>Delete</a> | <a href='' className='text-blue-600'>Edit</a></td>
</tr>
</>
)
})}
</table>  

</div>
)
}
