import * as Yup from "yup"

export const shippingSchema = Yup.object({
  brand: Yup.string().required('Brand wajib dipilih'),
  weight: Yup.number()
    .typeError('Berat harus berupa angka')
    .positive('Berat harus lebih dari 0'),
  shippingDate: Yup.date().required('Tanggal pengiriman wajib diisi'),

  senderFirstName: Yup.string().required('Nama depan pengirim wajib diisi'),
  senderPhone: Yup.string().required('Nomor telepon pengirim wajib diisi'),
  senderAddress: Yup.string().required('Alamat pengirim wajib diisi'),
  senderCity: Yup.string().required('Kota pengirim wajib diisi'),
  senderPostalCode: Yup.string().required('Kode pos pengirim wajib diisi'),

  receiverFirstName: Yup.string().required('Nama depan penerima wajib diisi'),
  receiverPhone: Yup.string().required('Nomor telepon penerima wajib diisi'),
  receiverAddress: Yup.string().required('Alamat penerima wajib diisi'),
  receiverCity: Yup.string().required('Kota penerima wajib diisi'),
  receiverPostalCode: Yup.string().required('Kode pos penerima wajib diisi'),
})

export type ShippingFormValues = Yup.InferType<typeof shippingSchema>
