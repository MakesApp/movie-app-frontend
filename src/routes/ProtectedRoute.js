import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const user = useSelector((state) => state.userSlice);
	if (!user) {
		return <Navigate to='/' replace />;
	}

	return children;
};

export default ProtectedRoute;
