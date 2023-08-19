import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const successfulToast = (message) => {
  toast.success(<div className="success-toast">{message}</div>, {
    autoClose: 2000,
    position: "top-left",
  });
};
