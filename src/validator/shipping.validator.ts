import * as Yup from "yup"

const areaSchema = Yup.object({
  id: Yup.string().required(),
  name: Yup.string().required(),
})

export const shippingSchema = Yup.object({
  brand: Yup.string().required("Brand wajib dipilih"),
  shippingNotes: Yup.string().optional(),

  senderFirstName: Yup.string().required("Nama depan pengirim wajib diisi"),
  senderLastName: Yup.string().optional(),
  senderPhone: Yup.string().required("No HP pengirim wajib diisi"),
  senderEmail: Yup.string().optional(),
  senderAddress: Yup.string().required("Alamat pengirim wajib diisi"),
  senderCity: Yup.string().required("Kota pengirim wajib diisi"),
  senderProvince: areaSchema.nullable().optional(),
  senderCountry: areaSchema.nullable().optional(),
  senderPostalCode: Yup.number()
    .typeError("Kode pos pengirim harus berupa angka")
    .required("Kode pos pengirim wajib diisi"),

  receiverFirstName: Yup.string().required("Nama depan penerima wajib diisi"),
  receiverLastName: Yup.string().optional(),
  receiverPhone: Yup.string().required("No HP penerima wajib diisi"),
  receiverEmail: Yup.string().optional(),
  receiverAddress: Yup.string().required("Alamat penerima wajib diisi"),
  receiverCity: Yup.string().required("Kota penerima wajib diisi"),
  receiverProvince: areaSchema.nullable().optional(),
  receiverCountry: areaSchema.nullable().optional(),
  receiverPostalCode: Yup.number()
    .typeError("Kode pos penerima harus berupa angka")
    .required("Kode pos penerima wajib diisi"),
})

export type ShippingFormValues = Yup.InferType<typeof shippingSchema>
