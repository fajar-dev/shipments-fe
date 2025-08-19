import * as React from "react"
import { Snackbar, Alert, AlertColor, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

interface SnackbarAlertProps {
  open: boolean
  onClose: () => void
  message: string
  severity?: AlertColor
  duration?: number
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({
  open,
  onClose,
  message,
  severity = "success",
  duration = 3000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert
