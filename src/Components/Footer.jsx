import email from '../assets/email.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div>
        <div className="flex  justify-evenly w-[300px] mt-10 ">
            <a href='https://mail.google.com/mail/u/?authuser=user@gmail.com' className='hover:scale-110 transition-transform'>
                <img src={email} className='w-10 h-10' />
            </a>  
            <a href='https://github.com/Himanxu1' className='hover:scale-110 transition-transform'>
                <img src={github}  className='w-10 h-10'/>
            </a> 
             <a  href='https://twitter.com/himanxu0' className='hover:scale-110 transition-transform'>
                <img src={twitter}  className='w-10 h-10'/>
            </a>  
            <a href='https://www.linkedin.com/in/himanshu-singh-692403202/' className='hover:scale-110 transition-transform'>
                <img src={linkedin} className='w-10 h-10' />
            </a>  
            
        </div>
    </div>
  )
}

export default Footer