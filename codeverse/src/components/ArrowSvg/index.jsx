const ArrowSvg = ({color, direction}) => {
    const arrowLeft = direction === "left";
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 4.5L16.5 12L9 19.5" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            transform={arrowLeft ? "rotate(180 12 12)" : ""}/>
        </svg>
    );
  }
export default ArrowSvg