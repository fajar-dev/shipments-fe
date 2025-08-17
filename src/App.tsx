import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import theme from "./theme/theme";
import { ThemeProvider } from '@mui/material/styles'
import logo from "./assets/logo.png";
import shipping from "./assets/icon/shipping.svg";
import shipper from "./assets/icon/shipper.svg";
import consignee from "./assets/icon/consignee.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <nav className="relative border-b border-gray-300">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src={logo}
                  alt="Nusanet"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="py-8">
          <section className="relative mb-6">
          <h1 className="text-4xl font-medium text-center">
            Shipping Label Generator
          </h1>

          <div className="absolute right-0 top-0">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select labelId="lang-label" defaultValue="id">
                <MenuItem value="id">Bahasa</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>


          <section className='mb-10'>
            <div className='mb-8'>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={shipping}
                  alt="shipping Icon"
                  className="w-auto"
                />
                <Typography variant="h6" color="primary">
                  Detil Pengiriman
                </Typography>
              </div>
              <Divider />
            </div>

            <div className='max-w-[744px]'>
              <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-5">
                <FormControl sx={{ minWidth: 150 }} size="small">
                  <InputLabel id="brand">Brand (Logo)</InputLabel>
                  <Select
                    labelId="brand"
                    id="demo-simple-select"
                    label="Brand (Logo)"
                  >
                    <MenuItem value={'-'}>Tidak Pakai</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Berat paket (kg)"
                  size="small"
                  variant="outlined"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label="Tanggal Pengiriman"
                    slotProps={{
                      textField: { 
                        size: "small",
                        required: true
                      }
                    }}
                  />
                </LocalizationProvider>
                <TextField
                  label="Nomor Resi"
                  size="small"
                  variant="outlined"
                />
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

          <section className='mb-10'>
            <div className='mb-8'>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={shipper}
                  alt="shipper Icon"
                  className="w-auto"
                />
                <Typography variant="h6" color="primary">
                  Detil Pengirim
                </Typography>
              </div>
              <Divider />
            </div>

            <div className='max-w-[744px]'>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <TextField
                  label="Nama Depan"
                  size="small"
                  variant="outlined"
                  required
                />

                <TextField
                  label="Nama Belakang"
                  size="small"
                  variant="outlined"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <TextField
                  label="Phone"
                  size="small"
                  variant="outlined"
                  required
                />

                <TextField
                  label="Email"
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <TextField
                  label="Alamat"
                  size="small"
                  variant="outlined"
                  required
                  className="md:col-span-2"
                />
                <TextField
                  label="Kota"
                  size="small"
                  variant="outlined"
                  required
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <FormControl  size="small">
                  <InputLabel id="senderProvince">Provinsi</InputLabel>
                  <Select
                    labelId="senderProvince"
                    id="demo-simple-select"
                    label="Provinsi"
                  >
                    <MenuItem value={'Sumatera Utara'}>Sumatera Utara</MenuItem>
                  </Select>
                </FormControl>
                <FormControl  size="small">
                  <InputLabel id="senderCountry">Negara</InputLabel>
                  <Select
                    labelId="senderCountry"
                    id="demo-simple-select"
                    label="Country"
                  >
                    <MenuItem value={'Indonesia'}>Indonesia</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Kode Pos"
                  size="small"
                  variant="outlined"
                  required
                />
              </div>
            </div>
          </section>

          <section className='mb-10'>
            <div className='mb-8'>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={consignee}
                  alt="consignee Icon"
                  className="w-auto"
                />
                <Typography variant="h6" color="primary">
                  Detil Penerima
                </Typography>
              </div>
              <Divider />
            </div>

            <div className='max-w-[744px]'>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <TextField
                  label="Nama Depan"
                  size="small"
                  variant="outlined"
                  required
                />

                <TextField
                  label="Nama Belakang"
                  size="small"
                  variant="outlined"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <TextField
                  label="Phone"
                  size="small"
                  variant="outlined"
                  required
                />

                <TextField
                  label="Email"
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <TextField
                  label="Alamat"
                  size="small"
                  variant="outlined"
                  required
                  className="md:col-span-2"
                />
                <TextField
                  label="Kota"
                  size="small"
                  variant="outlined"
                  required
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                <FormControl  size="small">
                  <InputLabel id="receiverProvince">Provinsi</InputLabel>
                  <Select
                    labelId="receiverProvince"
                    id="demo-simple-select"
                    label="Provinsi"
                  >
                    <MenuItem value={'Sumatera Utara'}>Sumatera Utara</MenuItem>
                  </Select>
                </FormControl>
                <FormControl  size="small">
                  <InputLabel id="receiverCountry">Negara</InputLabel>
                  <Select
                    labelId="receiverCountry"
                    id="demo-simple-select"
                    label="Country"
                  >
                    <MenuItem value={'Indonesia'}>Indonesia</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Kode Pos"
                  size="small"
                  variant="outlined"
                  required
                />
              </div>
            </div>
          </section>

          <section className='flex justify-end'>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" size='large'>Preview</Button>
              <Button variant="contained" size='large'>Buat Label</Button>
            </Stack>
          </section>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
