import react from 'react'
import {Twitter,Facebook,LinkedIn} from '@mui/icons-material'
import '../style/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialmedia">
            <Twitter/>
                <Facebook/>
                <LinkedIn/>
                
                <p> & copy: 2022 abc.App </p>
            </div>
        </div>
           
        
    )
}

export default Footer