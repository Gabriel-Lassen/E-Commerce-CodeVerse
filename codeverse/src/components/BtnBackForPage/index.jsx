import { useNavigate } from 'react-router-dom';

const BtnBackForPage = ({ text, svg, secondSvg }) => {

      const navigate = useNavigate();
    
      const handleBackPage = () => {
        navigate(-1);
      };
    
      return (
        <button onClick={handleBackPage}>
          <img src={svg} alt="" /> 
          <img src={secondSvg} alt="" />
          <span>{text}</span>
        </button>
      );
    };

export default BtnBackForPage