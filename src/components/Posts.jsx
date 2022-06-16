
const Posts = ({posts, loading}) => {

  let index = 0;
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <ul className=' mb-2 w-full h-10 text-teal-900 flex space-x-1 justify-end '>
      {
        posts.map(page => (
          <li className="border-2 p-2 m-0 hover:bg-teal-800 hover:text-white">{ posts.name}</li>
        ))
      }
   
  </ul>
  )
}

export default Posts