import React, { useEffect } from 'react'
import { Container, CssBaseline, Stack, Button, FormControl, MenuItem, Select } from '@mui/material'
import ShippingDetailForm from '../components/ShippingDetailForm'
import ShipperForm from '../components/ShipperForm'
import ConsigneeForm from '../components/ConsigneeForm'
import { useTranslation } from 'react-i18next'

const LabelGenerator: React.FC = () => {
  const { t, i18n } = useTranslation() 
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="py-8">
        <section className="relative mb-6">
          <h1 className="text-4xl font-medium text-center">
            {t("title")}
          </h1>

          <div className="absolute right-0 top-0">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select value={lang} onChange={handleChangeLang}>
                <MenuItem value="id">Bahasa</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>

        <ShippingDetailForm />
        <ShipperForm />
        <ConsigneeForm />

        <section className="flex justify-end">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" size="large">{t("preview")}</Button>
            <Button variant="contained" size="large">{t("createLabel")}</Button>
          </Stack>
        </section>
      </Container>
    </React.Fragment>
  )
}

export default LabelGenerator
