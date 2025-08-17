import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative border-b border-gray-300">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://www.nusa.net.id/kb/content/images/2020/06/logo-nusanet-transparent.png"
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
          {/* Header */}
          <section className="relative mb-6">
          <h1 className="text-4xl font-medium text-center">
            Shipping Label Generator
          </h1>

          {/* Dropdown Bahasa di kanan atas */}
          <div className="absolute right-0 top-0">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select labelId="lang-label" defaultValue="id">
                <MenuItem value="id">Bahasa</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>


          {/* Detil Pengiriman */}
          <section>
            <div className='mb-5'>
              <div className="flex items-center gap-2 mb-2">
                <Typography variant="h6" color="primary">
                  Detil Pengiriman
                </Typography>
              </div>
              <Divider />
            </div>

            <div className='grid grid-cols-1 max-w-[744px]'>
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

              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mb-5">
                <TextField
                  label="Tanggal Pengiriman"
                  type="date"
                  required
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
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
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
