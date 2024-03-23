import React, { useEffect, useState } from "react";
import axios from "axios";
import add_logo from "../assets/images/card/add-logo.png";

const Main = () => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false)
  
  useEffect (() => {
    try {
      setError(false)
       ;(async() => {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=6")
        console.log(response.data)
        setRecords(response.data)
       })()
    } catch (error) {
      setError(true)
    }
  }, []);

  if (error) {
    return <div>Error Loading Data</div>;
  }

  return (
    <>
      <div className="w-screen h-screen">
        <div>
          <div className="flex flex-wrap gap-3"> 
            {
              records && records.map((record)=> {
                return (
                  <div 
                  className="px-4 py-4 w-1/4 h-60 bg-white shadow-md flex justify-center items-center"
                  key={record.id}>
                    <img src={record.url} alt="Error loading image" />
                  </div>
                )
              })
            }
          </div>

          <div className="px-4 py-4 w-1/4 h-60 bg-white shadow-md">
          <div className=" w-full h-4/5 bg-card-color rounded flex justify-center items-center">
            <button>
              <img src={add_logo} className="" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center m-3">
            <h3>Create a new project</h3>
            <h2 className="text-sm ">
              or try a <span className="text-primary">sample project</span>
            </h2>
          </div>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Main;









