import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
function Blog() {
    const[data,setData]=useState(null);
    const {id}= useParams();
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
const [reader,setReader]= useState(true);
const hide =()=>{
    setReader(false)
    window.location = "https://chimdblog.herokuapp.com/"
}
const[email,setEmail]=useState("");
const[names,setNames]=useState("");
const[subject,setSubject]=useState("");
const[message,setMessage]=useState("");
const date = new Date();
const date_m = date.getDate();
const handleSubmit=async()=>{
 
  await axios.post("https://heischimdi.herokuapp.com/protfolio/",{name:names,email:email,subject:subject,message:message,date:date_m})
  .then((response)=>{
    alert("Message Sent.")
    console.log(response.data);
  });
};
//hey
const[shows,setShows]=useState(false)
const dShow=()=>{
setShows(false)
}
const nShow=()=>{
  setShows(true)
  }

    return (
        <div>
        <header>
        <div class="container header">
        <a href="#" class="logo">Future<span>.</span></a>
        {
          shows?<div>
            <div class="menuToggle">
        <i onClick={()=>dShow()}>&times;</i>
        </div>
          <ul class="navigation">
          <li class="active"><a href="#home" >Home</a></li>
          <li><a href="#featured" >Featured</a></li>
          <li><a href="#p" >Privacy policy</a></li>
          <li><a href="#contact" >Contact</a></li>
          <li><a href="#s" >Support</a></li>
          </ul></div>:<div><div class="menuToggle">
        <i onClick={()=>nShow()}>&#9776;</i>
        </div></div>
        }
        </div>
        </header>
{
    data && data.filter(x=>{
        if(x.id===id){
            return id
        }
    }).map(x=><div>
<div class="container main" >
{
reader?<div>
  <div class="container-reader" >
<header>{x.title}<br/>
<span class="time" onClick={()=>hide()}>&times;</span></header>
<img src={x.img_one} alt={x.title}/>
<span>Author: {x.username}</span>
<div class="stay">
  <pre>
  <p>{x.content}</p>

  </pre>

</div>
<div class="links">
  <p>click on any link to find related topics likes this</p>
<a href={x.link} class="ctn">link 1</a>
<a href={x.link_one} class="ctn">link 2</a>
<a href={x.link_two} class="ctn">link 3</a>
<a href={x.link_three} class="ctn">link 4</a>

</div>
</div>

</div>
:<div></div>
}
</div></div>
 )
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
<p> To support chimdi's click
<a href="https://marvshares.netlify.app" >here</a>
</p>
</div>
<header id="p" class="header-p"> Privacy policy.</header>
<div class="container-p">
<p>
Welcome to Chimdi's blog Privacy policy.
</p>
</div>
<div class="container-p">
<p>
 This are some of the information collected by us:<br/>
"Suscribe" section:<br/>
While suscribing to chimdi's blog it's optional, please keep in mind that you will not be  able to receive latest information easily unless you suscribe using our "Suscribe" section. 
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
If client wishes to donate to chimdi's blog he/she would have to submit some following details.
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

export default Blog
