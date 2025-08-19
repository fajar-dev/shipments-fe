import React, { createContext, useContext, useState } from "react"
import SnackbarAlert from "../components/SnackbarAlert"

type SnackbarContextType = {
  showMessage: (msg: string, severity?: "success" | "error" | "warning" | "info") => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error("useSnackbar must be used within SnackbarProvider")
  }
  return context
}

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<"success" | "error" | "warning" | "info">("success")

  const showMessage = (msg: string, sev: "success" | "error" | "warning" | "info" = "success") => {
    setMessage(msg)
    setSeverity(sev)
    setOpen(true)
  }

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <SnackbarAlert
        open={open}
        onClose={() => setOpen(false)}
        message={message}
        severity={severity}
      />
    </SnackbarContext.Provider>
  )
}
