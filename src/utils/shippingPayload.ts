import { ILabelPayload } from '../api/shipping.api'
import dayjs from 'dayjs'

export const mapValuesToPayload = (values: any): ILabelPayload => ({
  brand: values.brand,
  weight: values.weight ? Number(values.weight) : undefined,
  shippingDate: values.shippingDate
    ? dayjs(values.shippingDate).format('YYYY-MM-DD')
    : '', 
  trackNumber: values.trackingNumber,
  shippingNote: values.notes,

  senderFirstName: values.senderFirstName,
  senderLastName: values.senderLastName,
  senderPhone: values.senderPhone,
  senderEmail: values.senderEmail,
  senderAddress: values.senderAddress,
  senderCity: values.senderCity,
  senderCountryUuid: values.senderCountry?.id,
  senderProvinceUuid: values.senderProvince?.id,
  senderPostalCode: values.senderPostalCode,

  receiverFirstName: values.receiverFirstName,
  receiverLastName: values.receiverLastName,
  receiverPhone: values.receiverPhone,
  receiverEmail: values.receiverEmail,
  receiverAddress: values.receiverAddress,
  receiverCity: values.receiverCity,
  receiverCountryUuid: values.receiverCountry?.id,
  receiverProvinceUuid: values.receiverProvince?.id,
  receiverPostalCode: values.receiverPostalCode,
})
