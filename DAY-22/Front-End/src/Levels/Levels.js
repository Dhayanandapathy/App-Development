
import axios from 'axios'
import React, { useState,useEffect} from "react";

function Levels(){
    const [Option1,setOption1] = useState("");
    const [Option2,setOption2] = useState("");
    const [Option3,setOption3] = useState("");
    const [correct,setcorrect] = useState("");
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
 
    const apiUrl = 'http://localhost:8080/api/learns';

    // Fetch data from the API endpoint
    axios.get(apiUrl)
      .then((response) => {
        setOption1(response.data);
        setOption2(response.data);
        setOption3(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
return(
    <div>

    </div>

)
}
export default Levels;