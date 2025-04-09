import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  // useSelector to read state, useDispatch to dispatch actions
import { logout } from '../redux/actions/userActions';  // Import logout action
import { Link } from 'react-router-dom';  // Import Link for routing

const Header = () => {
  // Access user data from the Redux store
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);  // Corrected path to access user state
  
  const dispatch = useDispatch();  // Get dispatch function from Redux

  // Handle logout action
  const handleLogout = () => {
    dispatch(logout());  // Dispatch logout action to clear state
  };

  return (
    <div className="bg-cyan-400 py-2 px-3 text-white font-semibold">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-black text-2xl font-semibold">
          <span className="font-bold">SmartTool</span>
        </div>

        {/* Right-aligned user login/register or logout section */}
        <div className="flex items-center gap-2">
          {isAuthenticated && currentUser ? (
            <div className="flex flex-col items-center sm:flex-row sm:justify-end gap-2">
              <p className="text-indigo-600 text-center">{`Welcome ${currentUser.email}`}</p>
              <button
                onClick={handleLogout}
                className="border border-indigo-600 px-2 rounded-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/my-account" className="text-indigo-600">
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
