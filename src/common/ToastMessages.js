import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right", // Correct position format
    autoClose: 3000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right", // Correct position format
    autoClose: 3000,
  });
};
