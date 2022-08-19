
import { useState } from 'react';
import './formulaire.css'
const Formulaire = () => {
    const [nom,setNom] = useState('')
    const [prenom,setprenom] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const valider = (e)=>{
        e.preventDefault()
        let DataUser ={nom,prenom,email,password}
        console.log(DataUser)
        
        fetch('http://localhost:8080/post',
        {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(DataUser)
        }
        ).then(()=>{console.log('ok');})
    }
    return ( 
        <div className="container">
            <form action="/post" onSubmit={valider} method="post">
                <input type="text" name="" value={nom} onChange={(e)=>setNom(e.target.value)} placeholder='Nom' />
                <input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)} placeholder='Prenom'/>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Adresse Email'/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Mot de passe'/>
                <div className="btn">
                <button>Enregistrer</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default Formulaire;