import React from 'react'
import '../pages/Signup/Signup.css'

export default function Nif_Login() {
  return (
    <div>
       
        <form>
            <label for="nif">Entrez Le NIF</label><br />
            <input type="number" id="nif" name="nif" className='input' placeholder='Entrez le NIF...'  required />
            <br />
            
            <br />
            <input className='button' type="submit" value="S'inscrire" />
        </form>
    </div>
  )
}
