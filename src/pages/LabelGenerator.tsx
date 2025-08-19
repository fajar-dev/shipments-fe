import React  from 'react'
import { Container, CssBaseline, Stack, Button, FormControl, MenuItem, Select, Typography, Divider, TextField, InputLabel } from '@mui/material'
import { useTranslation } from 'react-i18next'
import consignee from '../assets/icon/consignee.svg'
import shipper from '../assets/icon/shipper.svg'
import shipping from '../assets/icon/shipping.svg'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DropdownLanguange from '../components/DropdownLanguage'


const LabelGenerator: React.FC = () => {
  const { t } = useTranslation() 

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
                <Select labelId="brand" label="Brand (Logo)">
                  <MenuItem value="-">Tidak Pakai</MenuItem>
                  <Divider />
                  <MenuItem value="Nusanet">Nusanet</MenuItem>
                  <MenuItem value="Nusaid">Nusaid Cloud</MenuItem>
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
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Tanggal Pengiriman"
                  slotProps={{
                    textField: { size: "small", required: true },
                  }}
                />
              </LocalizationProvider>
              <TextField label="Nomor Resi" size="small" variant="outlined" />
            </div>

            <div className="mb-3">
              <TextField
                label="Catatan Pengiriman"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
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
              <TextField label="Nama Depan" size="small" variant="outlined" required />
              <TextField label="Nama Belakang" size="small" variant="outlined" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField label="Phone" size="small" variant="outlined" required />
              <TextField label="Email" size="small" variant="outlined" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <TextField
                label="Alamat"
                size="small"
                variant="outlined"
                required
                className="md:col-span-2"
              />
              <TextField label="Kota" size="small" variant="outlined" required />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <FormControl size="small">
                <InputLabel id="senderProvince">Provinsi</InputLabel>
                <Select labelId="senderProvince" label="Provinsi">
                  <MenuItem value="Sumatera Utara">Sumatera Utara</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small">
                <InputLabel id="senderCountry">Negara</InputLabel>
                <Select labelId="senderCountry" label="Country">
                  <MenuItem value="Indonesia">Indonesia</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Kode Pos"
                size="small"
                variant="outlined"
                type="number"
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
              <TextField label="Nama Depan" size="small" variant="outlined" required />
              <TextField label="Nama Belakang" size="small" variant="outlined" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <TextField label="Phone" size="small" variant="outlined" required />
              <TextField label="Email" size="small" variant="outlined" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <TextField
                label="Alamat"
                size="small"
                variant="outlined"
                required
                className="md:col-span-2"
              />
              <TextField label="Kota" size="small" variant="outlined" required />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <FormControl size="small">
                <InputLabel id="receiverProvince">Provinsi</InputLabel>
                <Select labelId="receiverProvince" label="Provinsi">
                  <MenuItem value="Sumatera Utara">Sumatera Utara</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small">
                <InputLabel id="receiverCountry">Negara</InputLabel>
                <Select labelId="receiverCountry" label="Country">
                  <MenuItem value="Indonesia">Indonesia</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Kode Pos"
                size="small"
                variant="outlined"
                type="number"
                required
              />
            </div>
          </div>
        </section>

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
