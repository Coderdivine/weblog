import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
function BlogPage() { 
    const[data,setData]=useState(null);
const[names,setNames]=useState("");
const[email,setEmail]=useState("");
const[subject,setSubject]=useState("");
const[message,setMessage]=useState("");
const date = new Date();
const date_m = date.getDate();
const[shows,setShows]=useState(false)
const dShow=()=>{
setShows(true)
}
const nShow=()=>{
  setShows(false)
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
  await axios.post("https://heischimdi.herokuapp.com/protfolio/",{name:names,email:email,subject:subject,message:message,date:date_m})
  .then((response)=>{
    alert("Message Sent.")
    console.log(response.data);
  });
};
    const getData= async()=>{
      
    await axios.get("https://chimdiblog.herokuapp.com/getblog").then((response)=>{
      setData(response.data)
    });
    }
    useEffect(() => {
      getData()
    }, [])
    if(data!==null){
      console.log(data);
    }
   const[popUp,setPopUp]=useState(false);
   // const locals = localStorage.getItem("chimdi-email");
     const handlePop=()=>{
       setPopUp(true);
      /* if(locals===null){
         if( sessionStorage.getItem("regret") ===null){
          setPopUp(true);
         }
       }else{
         setPopUp(false)
       }*/
     }
     /*
     const RunReload=()=>{
if(sessionStorage.getItem("reload")=== "true"){
  return
}else{
  sessionStorage.setItem("reload","true");
  window.location.reload();
}
     }
    const determine_reload=()=>{
      setInterval(()=>{
        RunReload()
      },6000);
    };
     const onRegret=()=>{
      sessionStorage.setItem("regret",true)
      setPopUp(false);

setInterval(()=>{
  window.location.reload();
},5000);

     useEffect(()=>{
      
      determine_reload()
    },[])
     }*/
     
     const onRegret=()=>{
      sessionStorage.setItem("regret",true)
      setPopUp(false);
    }
     const handleSubmi=async()=>{
       axios.post("https://emailsonboard.herokuapp.com/emails",{type:"blog",email:email}).then((response)=>{
        localStorage.setItem("chimdi-email",email);
        window.location.reload();
        console.log(response.data)
       })
      
           }
    useEffect(()=>{
      setInterval(()=>{
        handlePop();
      },5000)
      
    },[])
        return (
        <div>
        <header>
        <div class="container header">
        <a href="#home" class="logo">Weiscan<span>.</span></a>
        {
          shows?<div>
            <div class="menuToggle">
        <i onClick={()=>nShow()}> &times;</i>
        </div>
          <ul class="navigation">
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#featured" >Featured</a></li>
          <li><a href="#p" >Privacy policy</a></li>
          <li><a href="#contact" >Contact</a></li>
          <li><a href="#s" >Support</a></li>
          </ul></div>:<div><div class="menuToggle">
        <i onClick={()=>dShow()}>&#9776;</i>
        </div></div>
        }
        </div>
        </header>
        {
          popUp?<div>
            <div class="show-email">
          <i onClick={()=>onRegret()} style={{
            color:'crimson',
            cursor:"pointer"
          }}>&times;</i>
         <div className='email-box'>

           <p>Suscribe to Weiscan blog</p>
         <label>Email</label>
         <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} required/>
         <button className='ctn' onClick={()=>handleSubmi()}>Suscribe</button>
         </div>
        </div>
          </div>:<div></div>
        }
        
       
{
    data && data.map(x=><div>
<div class="container main" id="containers">
<div class="col">
<div class="post" id={x.name}>
<img  class="post-img" src={"https://chimdiblog.herokuapp.com/uploads/"+x.img_one}  alt={x.title}/>
<div class="post-info">
<Link to={{pathname:`/content/${x.title}`}}><h2>{x.title}</h2></Link>

<div class="user-info">
<img src={"https://chimdiblog.herokuapp.com/uploads/"+x.img_two}  alt={x.title}/>
<span>{x.username}</span>
<span>August 1,2021</span>
<span>#{x.tag}</span>
<span>Views:{x.views}</span>
</div>
<p>{x.content.length > 70 ? x.content.substring(0,69) +"...":x.content.length}</p>
</div>
</div>
</div>


</div>
    </div>)
}


<header class="header-p" id="contact">
Contact Us
</header>
<div class="container-p">
<input type="text" placeholder="Name" value={names} onChange={(e)=>setNames(e.target.value)}/>
<input type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="text" placeholder="Subject"  value={subject} onChange={(e)=>setSubject(e.target.value)}/>
<textarea rows="10" type="text" placeholder="Message here ..."  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
<button onClick={(e)=>handleSubmit(e)}>Send</button>
</div>
<div class="container-p">
<p><a href="https://www.instagram.com/_chimdi.xo_" >Instagram</a></p>
<p><a href="https://web.facebook.com/roy_dnxcy" >Facebook</a></p>
<p><a href="https://www.twitter.com/Chimdi.xo" >Twitter</a></p>
<p><a href="https://www.youtube.com/div the creator" >Youtube</a></p>
<p><a href="https://www.github.com/Coderdivine" >Github</a></p>
</div>
<header class="header-p" id="s">
Support Us
</header>
<div class="container-p">
<p> To support Weiscan click
<a href="https://marvshares.netlify.app" >here</a>
</p>
</div>
<header id="p" class="header-p"> Privacy policy.</header>
<div class="container-p">
<p>
Welcome to Weiscan blog Privacy policy.
</p>
</div>
<div class="container-p">
<p>
 This are some of the information collected by us:<br/>
"Suscribe" section:<br/>
While suscribing to Weiscan blog it's optional, please keep in mind that you will not be  able to receive latest information easily unless you suscribe using our "Suscribe" section. 
</p>
</div>
<div class="container-p">
<p>
• Email: <br/>
We collect your email in order to update you about recent post or upcoming content.
</p>
</div>
<div class="container-p">
<p>
• Support Link:<br/>
If client wishes to donate to Weiscan blog he/she would have to submit some following details.
This details is handled by your payment method available e.g (Paystack,FlutterWave),your bank credentials
 are secured !.
 Also we collect other information like your name, email, and phone number to take note of all our supporters.

</p>
</div>
<div class="container-p">
<p>&copy; copyright-2022</p>
</div>

<footer>
<div class="container footer">
<p>Alpha02.Community &copy; 2022</p>
</div>
</footer>
        </div>
    )
}

export default BlogPage
