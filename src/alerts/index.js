import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const SweetAlert = withReactContent(Swal)

export const confirmation = (text) => {
  return SweetAlert.fire({
    icon: "success",
    text
  })
}
export const errorMsg = ( text) => {
  return SweetAlert.fire({
    icon: "error",
    text
  })
}
export const information = ( text) => {
  return SweetAlert.fire({
    icon: "info",
    text,
  })
}