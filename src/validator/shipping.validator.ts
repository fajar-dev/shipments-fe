import * as Yup from "yup"

export const shippingSchema = Yup.object({
  brand: Yup.string().required("Brand wajib dipilih"),
  weight: Yup
    .number()
    .typeError("Berat harus berupa angka")
    .positive("Berat harus lebih dari 0")
    .required("Berat paket wajib diisi"),
  shippingDate: Yup.date().required("Tanggal pengiriman wajib diisi"),
  trackNumber: Yup.string().required("Nomor resi wajib diisi"),
  shippingNote: Yup.string().optional(),

  senderFirstName: Yup.string().required("Nama depan pengirim wajib diisi"),
  senderLastName: Yup.string().optional(),
  senderPhone: Yup.string().required("No HP pengirim wajib diisi"),
  senderEmail: Yup.string().optional(),
  senderAddress: Yup.string().required("Alamat pengirim wajib diisi"),
  senderCity: Yup.string().required("Kota pengirim wajib diisi"),
  senderProvince: Yup.string().required("Provinsi pengirim wajib dipilih"),
  senderCountry: Yup.string().required("Negara pengirim wajib dipilih"),
  senderPostalCode: Yup.string().required("Kode pos pengirim wajib diisi"),

  receiverFirstName: Yup.string().required("Nama depan penerima wajib diisi"),
  receiverLastName: Yup.string().optional(),
  receiverPhone: Yup.string().required("No HP penerima wajib diisi"),
  receiverEmail: Yup.string().optional(),
  receiverAddress: Yup.string().required("Alamat penerima wajib diisi"),
  receiverCity: Yup.string().required("Kota penerima wajib diisi"),
  receiverProvince: Yup.string().required("Provinsi penerima wajib dipilih"),
  receiverCountry: Yup.string().required("Negara penerima wajib dipilih"),
  receiverPostalCode: Yup.string().required("Kode pos penerima wajib diisi"),
})

export type ShippingFormValues = Yup.InferType<typeof shippingSchema>
