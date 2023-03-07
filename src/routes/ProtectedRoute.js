import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN } from "./constants";

const ProtectedRoute = ({ children }) => {
	const user = useSelector((state) => state.userSlice);
	if (!user) {
		return <Navigate to={LOGIN} replace />;
	}

	return children;
};

export default ProtectedRoute;