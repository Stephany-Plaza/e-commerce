import './ContactForm.css'
import { useState } from 'react'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>
          <div>Contacto</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <button className='Button' type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm
/*import CartContext from '../../context/CartContext'
import { useContext } from 'react';
import { useState } from 'react/cjs/react.production.min';
export const ClientForm = () => {
    
    const { registerClient } = useContext(CartContext)
    const [client,setClient]=useState({
    nombre : '',
    apellido : '',
    id : '',
     celular : '',
     direccion : ''
    });

    const uploadBuyer = (e) =>{
        e.preventDefault()
        registerClient({
            nombre : client.nombre,
            apellido : client.apellido,
            id : client.id,
            celular : client.celular,
            direccion : client.direccion
        })
    } 
    const handleChange = (e) => {
        const input = e.target.name
        this.setState({...client, input: e.target.value })
    }
    return (
        <>
            <form onSubmit={uploadBuyer}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' id='nombre' value={client.nombre} onChange={handleChange}></input>
                <label htmlFor='apellido' name='apellido'>Apellido</label>
                <input type='text' name='apellido' id='apellido' value={client.apellido} onChange={handleChange}></input>
                <label htmlFor='id'>ID</label>
                <input type='number' name='id' id='id' value={client.id} onChange={handleChange}></input>
                <label htmlFor='celular'>Celular</label>
                <input type='number' name='celular' id='celular' value={client.celular} onChange={handleChange}></input>
                <label htmlFor='direccion'>Direccion</label>
                <input type='text' name='direccion' id='direccion' value={client.direccion} onChange={handleChange}></input>
                <button type='submit'>Procesar Compra</button>
            </form>
        </>
    )
}*/