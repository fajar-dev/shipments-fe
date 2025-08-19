import React, { useEffect } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'

const DropdownLanguange: React.FC = () => {
  const { i18n } = useTranslation() 
  const [lang, setLang] = React.useState("id")

  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
      setLang(savedLang)
      i18n.changeLanguage(savedLang)
    }
  }, [i18n])

  const handleChangeLang = (event: any) => {
    const newLang = event.target.value
    setLang(newLang)
    i18n.changeLanguage(newLang)
    localStorage.setItem("lang", newLang)
  }
  
  return (
    <div className="absolute right-0 top-0">
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={lang} onChange={handleChangeLang}>
          <MenuItem value="id">Bahasa</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default DropdownLanguange
