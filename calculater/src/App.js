
import React,{ useState,useEffect} from "react";


/* use effect book */
const App = () => {
  const [valueA , setValueA] = useState(0);
  const [valueB , setValueB] = useState(0);
  const [operations , setoperations] = useState('+');
  const [result , setResult] = useState(0);

  const handleSubmit = ()=>{
  if(operations ==='+'){
     setResult(parseInt(valueA)+parseInt(valueB));
  }
  if(operations ==='-'){
    setResult(valueA-valueB);
  }
  if(operations ==='*'){
    setResult(valueA*valueB);
  }
  if(operations ==='/'){
    setResult(valueA/valueB);

  }
  }
  return (
    <div>
 <h1 >Simple Calculater in React js </h1>
 <h3>Result:{result}</h3>
 <div>
     <input type='text' value={valueA} onChange={(e)=>setValueA(e.target.value)}  /><br/>
   <h2>{operations}</h2>
     <input type='text' value={valueB} onChange={(e)=>setValueB(e.target.value)}/><br/>
 <br/>
     <button className="btn btn-secondary mx-3" onClick={handleSubmit}>submit</button> 
 </div>
 <br/>
 <div>
      <button className="btn btn-success mx-3" onClick={()=>setoperations('+')}>+</button>
      <button className="btn btn-success mx-3" onClick={()=>setoperations('-')}>-</button>
      <button className="btn btn-success mx-3" onClick={()=>setoperations('*')}>*</button>
      <button className="btn btn-success mx-3" onClick={()=>setoperations('/')}>/</button>
 </div>
    </div>
  );
}

export default App;
