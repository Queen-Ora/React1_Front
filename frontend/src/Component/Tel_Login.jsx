import React from 'react'
import '../pages/Signup/Signup.css'

export default function Tel_Login() {
  return (
    <div>
        <form>
            <label for="tel">Entrez Le numero de Telephone</label><br />
            <input type="number" id="tel" name="tel" className='input'placeholder='Entrez le numero de telephone...' required />
            <br />
            
            <br />
            <input type="submit" className='button' value="S'inscrire" />
        </form>
    </div>
  )
}
