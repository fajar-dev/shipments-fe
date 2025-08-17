import React from "react";
import {
  Divider,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import shipper from "../assets/icon/shipper.svg";

const ShipperForm: React.FC = () => {
  return (
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
  );
};

export default ShipperForm;
