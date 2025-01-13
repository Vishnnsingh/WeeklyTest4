import {React,useContext,useEffect,useRef, useState }from 'react'
import styles from './InputSection.module.css'
import { UserContext } from '../App';

const InputSection = (props) => {
const ctx = useContext(UserContext);

    const nameRef =useRef(null);
    const dateRef =useRef(null);
    const aadharRef =useRef(null);
    const mobRef =useRef(null);
    const ageRef =useRef(0);
    const [age , setAge] = useState(0);
   let thisYear = new Date().getFullYear();
   let thisMonth = new Date().getMonth()  + 1;

   const handleDate = () =>{
        let dobYear = new Date( dateRef.current.value).getFullYear();
         let dobMonth = new Date( dateRef.current.value).getMonth()  + 1;
         console.log(dobYear , dobMonth);
         if(thisMonth < dobMonth){
            ageRef.current.value = (thisYear - dobYear) - 1;
         }else{
            ageRef.current.value = (thisYear - dobYear)
         }
   }

    const handleSubmit =(e) =>{
         e.preventDefault(); 
         console.log(  thisMonth , thisYear);
         let strDob = dateRef.current.value + "";
         let revDob = strDob.split("-").reverse().join("-");
        props.setShowInput(false);
        console.log({
         name : nameRef.current.value,
         dob :revDob,
         aadhar : aadharRef.current.value,
         mob : mobRef.current.value,
         age : ageRef.current.value  
        });
        ctx.setData([
            ...ctx.data,
            {
                name : nameRef.current.value,
                dob :revDob,
                aadhar : aadharRef.current.value,
                mob : mobRef.current.value,
                age : ageRef.current.value  
               }
        ])

        if( localStorage.getItem("userDetails") == null ){
            let arr = [];
            arr.push(
                {
                    name : nameRef.current.value,
                    dob :revDob,
                    aadhar : aadharRef.current.value,
                    mob : mobRef.current.value,
                    age : ageRef.current.value  
                   }
            )
            localStorage.setItem("userDetails" , JSON.stringify(arr));
        }else {
            let userDetails = JSON.parse(localStorage.getItem("userDetails"))
            userDetails.push(
                {
                   
                    name : nameRef.current.value,
                    dob :revDob,
                    aadhar : aadharRef.current.value,
                    mob : mobRef.current.value,
                    age : ageRef.current.value  
                   }
            )
            localStorage.setItem("userDetails" ,JSON.stringify( userDetails))
            
        }   
        
    }
  return (
    <form onSubmit={handleSubmit} className={styles.form_con}>
        <h3>Fill the below form for New Entry</h3>
        <div className={styles.inputs}>
        <input  ref={nameRef} type="text" name="" id="" placeholder={"Name"} />
        <input ref={dateRef} onChange={handleDate} type="date" name="" id="" />
        <input ref={aadharRef} type="number" name="" minLength={"12"} placeholder={"Aadhar Number"}  />
        <input ref={mobRef} type="number" name="" id="" minLength={"10"}  placeholder={"Mobile Number"} />
        <input ref={ageRef} value={ageRef.current.value}  type="number" disabled   name="" id="" placeholder={"Age"}  />
        <button className={styles.save} >Save</button>
        </div>
    </form>
  )
}
// localStorage.clear();

export default InputSection;