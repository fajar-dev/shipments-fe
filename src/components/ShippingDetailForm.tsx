import React from 'react'
import {
  Divider,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import shipping from '../assets/icon/shipping.svg'

const ShippingDetailForm: React.FC = () => {
  return (
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
  )
}

export default ShippingDetailForm
