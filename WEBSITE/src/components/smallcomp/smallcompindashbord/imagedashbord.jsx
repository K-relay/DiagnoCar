import NavigateNext from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function Imagedashbord(para) {
    return (
      <div style={{position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
        <img
          src={para.image}
          alt="Example"
          style={{
            zIndex: '-1000',
            width: '110%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
  
        <div
         className="bg-base-200 absolute top-20 md:max-w-350px z-10 p-4 md:p-20 rounded-2xl"
        
          style={{
            position: 'absolute',
            top: '100px',
            maxWidth: '350px',
            zIndex: '10',
            padding: '20px',
            borderRadius: '20px',
            margin:'20px',
            [para.loc ? 'right' : 'left']: '10%',
            
            
          }}
        >
          <p style={{ textAlign: 'right'}}  className="text-right text-xl md:text-xl lg:text-xl xl:text-4xl mb-4">
  
            {para.text}
          </p>
          <Link to="/login" className="btn btn-sm btn-primary" style={{ borderRadius: '20px', width: '100%', display: 'flex', alignItems: 'center' }}>
      چوونە ژورەوە
      <NavigateNext style={{ marginLeft: '5px' }} />
    </Link>
        </div>
      </div>
    );
  }
  
  export default Imagedashbord;
  