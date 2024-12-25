"use client";


const Button = () => {
   
  return (
    <div>
      <button onClick={()=>{
            console.log("Form Submitted");
          }}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Login
          </button>
    </div>
  )
}

export default Button
