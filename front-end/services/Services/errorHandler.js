import { toast } from 'react-hot-toast';

export const handleStatusCodes = (status, navigate) => {
  if ([401, 403, 404].includes(status)) {
    localStorage.clear(); 
    navigate("/login");
    toast.error("Session expired or user not found. Please log in again.");
  } else if (status >= 500) {
    toast.error("Server error. Please try again later.");
  }
};
