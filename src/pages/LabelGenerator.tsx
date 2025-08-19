import React, { useState } from 'react'
import { Container, CssBaseline, Stack, Button, FormControl, MenuItem, Select, Typography, Divider, TextField, InputLabel } from '@mui/material'
import { useTranslation } from 'react-i18next'
import consignee from '../assets/icon/consignee.svg'
import shipper from '../assets/icon/shipper.svg'
import shipping from '../assets/icon/shipping.svg'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DropdownLanguange from '../components/DropdownLanguage'
import { IArea } from "../api/administativeArea.api"
import LocationFields from '../components/LocationFields'
import { getLabel, store } from '../api/shipping.api'
import { Dayjs } from 'dayjs'
import { useSnackbar } from '../context/SnackbarProvider'

const LabelGenerator: React.FC = () => {
  const { t } = useTranslation() 
  const { showMessage } = useSnackbar()
  const [loading, setLoading] = useState(false)

  /** Shipping State */
  const [brand, setBrand] = useState("-")
  const [weight, setWeight] = useState<number | "">( "")
  const [shippingDate, setShippingDate] = useState<Dayjs | null>(null)
  const [trackingNumber, setTrackingNumber] = useState("")
  const [notes, setNotes] = useState("")

  /** Sender State */
  const [senderCountry, setSenderCountry] = useState<IArea | null>(null)
  const [senderProvince, setSenderProvince] = useState<IArea | null>(null)
  const [senderFirstName, setSenderFirstName] = useState("")
  const [senderLastName, setSenderLastName] = useState("")
  const [senderPhone, setSenderPhone] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [senderAddress, setSenderAddress] = useState("")
  const [senderCity, setSenderCity] = useState("")
  const [senderPostalCode, setSenderPostalCode] = useState("")

  /** Receiver State */
  const [receiverCountry, setReceiverCountry] = useState<IArea | null>(null)
  const [receiverProvince, setReceiverProvince] = useState<IArea | null>(null)
  const [receiverFirstName, setReceiverFirstName] = useState("")
  const [receiverLastName, setReceiverLastName] = useState("")
  const [receiverPhone, setReceiverPhone] = useState("")
  const [receiverEmail, setReceiverEmail] = useState("")
  const [receiverAddress, setReceiverAddress] = useState("")
  const [receiverCity, setReceiverCity] = useState("")
  const [receiverPostalCode, setReceiverPostalCode] = useState("")

  const resetForm = () => {
    setBrand("-")
    setWeight("")
    setShippingDate(null)
    setTrackingNumber("")
    setNotes("")

    setSenderCountry(null)
    setSenderProvince(null)
    setSenderFirstName("")
    setSenderLastName("")
    setSenderPhone("")
    setSenderEmail("")
    setSenderAddress("")
    setSenderCity("")
    setSenderPostalCode("")

    setReceiverCountry(null)
    setReceiverProvince(null)
    setReceiverFirstName("")
    setReceiverLastName("")
    setReceiverPhone("")
    setReceiverEmail("")
    setReceiverAddress("")
    setReceiverCity("")
    setReceiverPostalCode("")
  }

  const handleSubmit = async () => {
    const payload = {
      brand,
      weight: Number(weight),
      shippingDate: shippingDate?.format("YYYY-MM-DD"),
      trackNumber: trackingNumber,
      shippingNote: notes,

      senderFirstName,
      senderLastName,
      senderPhone,
      senderEmail,
      senderAddress,
      senderCity,
      senderCountryUuid: senderCountry?.id,
      senderProvinceUuid: senderProvince?.id,
      senderPostalCode,

      receiverFirstName,
      receiverLastName,
      receiverPhone,
      receiverEmail,
      receiverAddress,
      receiverCity,
      receiverCountryUuid: receiverCountry?.id,
      receiverProvinceUuid: receiverProvince?.id,
      receiverPostalCode,
    }

      try {
        setLoading(true)
        const response = await store(payload)
        await getLabel(response.data.id)
        // resetForm()
      } catch (err: any) {
        showMessage(err?.response?.data?.message || "Terjadi kesalahan pada server", "error")
      } finally {
        setLoading(false)
      }

  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="py-8">
        <section className="relative mb-6">
          <h1 className="text-4xl font-medium text-center">
            {t("title")}
          </h1>
    
          <DropdownLanguange />
        </section>

        <section className="mb-10">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <img src={shipping} alt="shipping Icon" className="w-auto" />
              <Typography variant="h6" color="primary">
                Detil Pengiriman
              </Typography>
            </div>
            <Divider />
          </div>

          <div className="max-w-[744px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-5">
              <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="brand">Brand (Logo)</InputLabel>
                <Select
                  labelId="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Brand (Logo)"
                >
                  <MenuItem value="-">Tidak Pakai</MenuItem>
                  <Divider />
                  <MenuItem value="Nusanet">Nusanet</MenuItem>
                  <MenuItem value="Nusaid Cloud">Nusaid Cloud</MenuItem>
                  <MenuItem value="Nusafiber">Nusafiber</MenuItem>
                  <MenuItem value="Nusawork">Nusawork</MenuItem>
                  <MenuItem value="Nusaprospect">Nusaprospect</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Berat paket (kg)"
                size="small"
                variant="outlined"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Tanggal Pengiriman"
                  value={shippingDate}
                  onChange={(newValue) => setShippingDate(newValue)}
                  slotProps={{ textField: { size: "small", required: true } }}
                />
              </LocalizationProvider>
              <TextField
                label="Nomor Resi"
                size="small"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <TextField
                label="Catatan Pengiriman"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mb-5"
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <img src={shipper} alt="shipper Icon" className="w-auto" />
              <Typography variant="h6" color="primary">
                Detil Pengirim
              </Typography>
            </div>
            <Divider />
          </div>

          <div className="max-w-[744px]">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField
                label="Nama Depan"
                size="small"
                value={senderFirstName}
                onChange={(e) => setSenderFirstName(e.target.value)}
                required
              />
              <TextField
                label="Nama Belakang"
                size="small"
                value={senderLastName}
                onChange={(e) => setSenderLastName(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField
                label="Phone"
                size="small"
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
                required
              />
              <TextField
                label="Email"
                size="small"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <TextField
                label="Alamat"
                size="small"
                value={senderAddress}
                onChange={(e) => setSenderAddress(e.target.value)}
                required
                className="md:col-span-2"
              />
              <TextField
                label="Kota"
                size="small"
                value={senderCity}
                onChange={(e) => setSenderCity(e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <LocationFields
                countryValue={senderCountry}
                provinceValue={senderProvince}
                onCountryChange={setSenderCountry}
                onProvinceChange={setSenderProvince}
              />
              <TextField
                label="Kode Pos"
                size="small"
                type="number"
                value={senderPostalCode}
                onChange={(e) => setSenderPostalCode(e.target.value)}
                required
              />
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <img src={consignee} alt="consignee Icon" className="w-auto" />
              <Typography variant="h6" color="primary">
                Detil Penerima
              </Typography>
            </div>
            <Divider />
          </div>

          <div className="max-w-[744px]">
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField
                label="Nama Depan"
                size="small"
                value={receiverFirstName}
                onChange={(e) => setReceiverFirstName(e.target.value)}
                required
              />
              <TextField
                label="Nama Belakang"
                size="small"
                value={receiverLastName}
                onChange={(e) => setReceiverLastName(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField
                label="Phone"
                size="small"
                value={receiverPhone}
                onChange={(e) => setReceiverPhone(e.target.value)}
                required
              />
              <TextField
                label="Email"
                size="small"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <TextField
                label="Alamat"
                size="small"
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                required
                className="md:col-span-2"
              />
              <TextField
                label="Kota"
                size="small"
                value={receiverCity}
                onChange={(e) => setReceiverCity(e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <LocationFields
                countryValue={receiverCountry}
                provinceValue={receiverProvince}
                onCountryChange={setReceiverCountry}
                onProvinceChange={setReceiverProvince}
              />
              <TextField
                label="Kode Pos"
                size="small"
                type="number"
                value={receiverPostalCode}
                onChange={(e) => setReceiverPostalCode(e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        <section className="flex justify-end">
          <Stack direction="row" spacing={2} justifyContent="flex-end" className="mt-4">
            <Button variant="outlined">{t("preview")}</Button>
            <Button
              variant="contained" 
              onClick={handleSubmit}
              loading={loading}
              loadingPosition="end"
            >
              {t("createLabel")}
              </Button>
          </Stack>
        </section>
      </Container>
    </React.Fragment>
  )
}

export default LabelGenerator
