import React from "react";
import { Container, CssBaseline, Stack, Button, FormControl, MenuItem, Select } from "@mui/material";
import ShippingDetailForm from "../components/ShippingDetailForm";
import ShipperForm from "../components/ShipperForm";
import ConsigneeForm from "../components/ConsigneeForm";

const LabelGenerator: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="py-8">
        <section className="relative mb-6">
          <h1 className="text-4xl font-medium text-center">Shipping Label Generator</h1>

          <div className="absolute right-0 top-0">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select defaultValue="id">
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
            <Button variant="outlined" size="large">Preview</Button>
            <Button variant="contained" size="large">Buat Label</Button>
          </Stack>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default LabelGenerator
