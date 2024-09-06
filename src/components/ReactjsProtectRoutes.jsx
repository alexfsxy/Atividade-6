import { Navigate } from 'react-router-dom';

function ReactjsProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }
    return children;
}

export default ReactjsProtectedRoute;
