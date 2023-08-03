import { useContext} from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

const PriviteRoutes = ({children}) => {
    const { signed } = useContext(AuthContext);
    if(!signed){
        return <Navigate to='/getstarted' />
    }
    return children;
}

export default PriviteRoutes