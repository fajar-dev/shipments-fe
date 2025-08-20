import React, { useState } from 'react'
import {
  Container,
  CssBaseline,
  Stack,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Divider,
  TextField,
  InputLabel,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import consignee from '../assets/icon/consignee.svg'
import shipper from '../assets/icon/shipper.svg'
import shipping from '../assets/icon/shipping.svg'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DropdownLanguange from '../components/DropdownLanguage'
import LocationFields from '../components/LocationFields'
import { generateLabel, previewLabel, store } from '../api/shipping.api'
import { useSnackbar } from '../context/SnackbarProvider'
import { Formik, Form } from 'formik'
import { Dayjs } from 'dayjs'
import { IArea } from '../api/administativeArea.api'
import { shippingSchema } from '../validator/shipping.validator'
import { mapValuesToPayload } from '../utils/shippingPayload'

const LabelGenerator: React.FC = () => {
  const { t } = useTranslation()
  const { showMessage } = useSnackbar()
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [loadingPreview, setLoadingPreview] = useState(false)

  const initialValues = {
    brand: '-',
    weight: '',
    shippingDate: null as Dayjs | null,
    trackingNumber: '',
    notes: '',

    senderCountry: null as IArea | null,
    senderProvince: null as IArea | null,
    senderFirstName: '',
    senderLastName: '',
    senderPhone: '',
    senderEmail: '',
    senderAddress: '',
    senderCity: '',
    senderPostalCode: '',

    receiverCountry: null as IArea | null,
    receiverProvince: null as IArea | null,
    receiverFirstName: '',
    receiverLastName: '',
    receiverPhone: '',
    receiverEmail: '',
    receiverAddress: '',
    receiverCity: '',
    receiverPostalCode: '',
  }

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void } 
  ) => {
    try {
      setLoadingSubmit(true)
      const payload = mapValuesToPayload(values)
      const response = await store(payload)
      await generateLabel(response.data.id)
      showMessage('Label berhasil dibuat', 'success')
      resetForm()
    } catch (err: any) {
      showMessage(
        err?.response?.data?.message || 'Terjadi kesalahan pada server',
        'error'
      )
    } finally {
      setLoadingSubmit(false)
    }
  }

  const handlePreview = async (values: typeof initialValues) => {
    try {
      setLoadingPreview(true)
      const payload = mapValuesToPayload(values)
      await previewLabel(payload) 
    } catch (err: any) {
      showMessage(
        err?.response?.data?.message || 'Gagal preview label',
        'error'
      )
    } finally {
      setLoadingPreview(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shippingSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Container maxWidth="xl" className="py-8">
          <main className='lg:mx-15'>
            <Form>
            <CssBaseline />
              <section className="relative mb-6">
                <h1 className="lg:text-4xl md:text-2xl text-xl text-center">{t('title')}</h1>
                <DropdownLanguange />
              </section>

              {/* SHIPPING DETAIL */}
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
                    <FormControl sx={{ minWidth: 150 }} size="small" error={touched.brand && Boolean(errors.brand)}>
                      <InputLabel id="brand">Brand (Logo)</InputLabel>
                      <Select
                        name="brand"
                        labelId="brand"
                        value={values.brand}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                      name="weight"
                      type="number"
                      value={values.weight}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.weight && Boolean(errors.weight)}
                      helperText={touched.weight && errors.weight}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <FormControl fullWidth>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Tanggal Pengiriman"
                          value={values.shippingDate || null}
                          onChange={(newValue: Dayjs | null) =>
                            setFieldValue('shippingDate', newValue)
                          }
                          slotProps={{
                            textField: {
                              size: 'small',
                              error: touched.shippingDate && Boolean(errors.shippingDate),
                              helperText: touched.shippingDate && errors.shippingDate,
                              required: true
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </FormControl>
                    <TextField
                      label="Nomor Resi"
                      size="small"
                      name="trackingNumber"
                      value={values.trackingNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.trackingNumber && Boolean(errors.trackingNumber)}
                      helperText={touched.trackingNumber && errors.trackingNumber}
                    />
                  </div>

                  <div className="mb-3">
                    <TextField
                      label="Catatan Pengiriman"
                      multiline
                      rows={3}
                      fullWidth
                      variant="outlined"
                      name="notes"
                      value={values.notes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </section>

              {/* SENDER DETAIL */}
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
                      name="senderFirstName"
                      value={values.senderFirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      error={
                        touched.senderFirstName && Boolean(errors.senderFirstName)
                      }
                      helperText={
                        touched.senderFirstName && errors.senderFirstName
                      }
                    />
                    <TextField
                      label="Nama Belakang"
                      size="small"
                      name="senderLastName"
                      value={values.senderLastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <TextField
                      label="Phone"
                      size="small"
                      name="senderPhone"
                      required
                      value={values.senderPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.senderPhone && Boolean(errors.senderPhone)}
                      helperText={touched.senderPhone && errors.senderPhone}
                    />
                    <TextField
                      label="Email"
                      size="small"
                      name="senderEmail"
                      value={values.senderEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <TextField
                      label="Alamat"
                      size="small"
                      name="senderAddress"
                      required
                      value={values.senderAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.senderAddress && Boolean(errors.senderAddress)
                      }
                      helperText={touched.senderAddress && errors.senderAddress}
                      className="md:col-span-2"
                    />
                    <TextField
                      label="Kota"
                      size="small"
                      name="senderCity"
                      required
                      value={values.senderCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.senderCity && Boolean(errors.senderCity)}
                      helperText={touched.senderCity && errors.senderCity}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-5">
                    <LocationFields
                      countryValue={values.senderCountry}
                      provinceValue={values.senderProvince}
                      onCountryChange={(val) =>
                        setFieldValue('senderCountry', val)
                      }
                      onProvinceChange={(val) =>
                        setFieldValue('senderProvince', val)
                      }
                    />
                    <TextField
                      label="Kode Pos"
                      size="small"
                      type="number"
                      name="senderPostalCode"
                      required
                      value={values.senderPostalCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.senderPostalCode &&
                        Boolean(errors.senderPostalCode)
                      }
                      helperText={
                        touched.senderPostalCode && errors.senderPostalCode
                      }
                    />
                  </div>
                </div>
              </section>

              {/* RECEIVER DETAIL */}
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
                      name="receiverFirstName"
                      required
                      value={values.receiverFirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.receiverFirstName &&
                        Boolean(errors.receiverFirstName)
                      }
                      helperText={
                        touched.receiverFirstName && errors.receiverFirstName
                      }
                    />
                    <TextField
                      label="Nama Belakang"
                      size="small"
                      name="receiverLastName"
                      value={values.receiverLastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <TextField
                      label="Phone"
                      size="small"
                      name="receiverPhone"
                      required
                      value={values.receiverPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.receiverPhone && Boolean(errors.receiverPhone)
                      }
                      helperText={touched.receiverPhone && errors.receiverPhone}
                    />
                    <TextField
                      label="Email"
                      size="small"
                      name="receiverEmail"
                      value={values.receiverEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <TextField
                      label="Alamat"
                      size="small"
                      name="receiverAddress"
                      required
                      value={values.receiverAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.receiverAddress &&
                        Boolean(errors.receiverAddress)
                      }
                      helperText={touched.receiverAddress && errors.receiverAddress}
                      className="md:col-span-2"
                    />
                    <TextField
                      label="Kota"
                      size="small"
                      name="receiverCity"
                      required
                      value={values.receiverCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.receiverCity && Boolean(errors.receiverCity)}
                      helperText={touched.receiverCity && errors.receiverCity}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-5">
                    <LocationFields
                      countryValue={values.receiverCountry}
                      provinceValue={values.receiverProvince}
                      onCountryChange={(val) =>
                        setFieldValue('receiverCountry', val)
                      }
                      onProvinceChange={(val) =>
                        setFieldValue('receiverProvince', val)
                      }
                    />
                    <TextField
                      label="Kode Pos"
                      size="small"
                      type="number"
                      name="receiverPostalCode"
                      required
                      value={values.receiverPostalCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.receiverPostalCode &&
                        Boolean(errors.receiverPostalCode)
                      }
                      helperText={
                        touched.receiverPostalCode && errors.receiverPostalCode
                      }
                    />
                  </div>
                </div>
              </section>

              <section className="flex justify-end">
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  className="mt-4"
                >
                  <Button
                    variant="outlined"
                    onClick={() => handlePreview(values)}
                    loading={loadingPreview}
                    loadingPosition="end"
                  >
                    {t('preview')}
                  </Button>
                    <Button
                      type="submit"
                      variant="contained" 
                      loading={loadingSubmit}
                      loadingPosition="end"
                    >
                      {loadingSubmit ? 'Loading' : t('createLabel')}
                    </Button>
                </Stack>
              </section>
            </Form>
          </main>
        </Container>
      )}
    </Formik>
  )
}

export default LabelGenerator
