import{useState,useEffect,useRef} from "react";
export default function Generator(){
    const[quote,setQuote]=useState("");
    const[loading,setloading]=useState(true);
    const hasAlerted=useRef(false);

    async function fetchQuote(){
        setloading(true);
        try{
            const response=await fetch("https://api.quotable.io/random");
            const data=await response.json();
            setQuote(data.content);
            setloading(false);
            hasAlerted.current=false;



        }

        catch(error){
            if(!hasAlerted.current){
                alert("Failed to fetch the quote!");
                hasAlerted.current = true;

            }
            
            
            
        }
        finally{
            setloading(false);
        }
    }
    useEffect(()=>{
       fetchQuote();
    },[]);
    return(
        <div>
            <h1 className="header">Quote Generator</h1>
            <div className="container">
                <button className="btn1" onClick={fetchQuote}>Get A New Quote</button>
                <h2 className="quote">{quote}</h2>


            </div>
        </div>    


    );

}