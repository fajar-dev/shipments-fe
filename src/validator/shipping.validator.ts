import * as Yup from "yup"
import { useTranslation } from "react-i18next"

const areaSchema = Yup.object({
  id: Yup.string().required(),
  name: Yup.string().required(),
})

export const useShippingSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    brand: Yup.string().required(t("shipping.validation.brandRequired")),
    shippingNotes: Yup.string().optional(),

    senderFirstName: Yup.string().required(t("shipping.validation.senderFirstNameRequired")),
    senderLastName: Yup.string().optional(),
    senderPhone: Yup.string().required(t("shipping.validation.senderPhoneRequired")),
    senderEmail: Yup.string().optional(),
    senderAddress: Yup.string().required(t("shipping.validation.senderAddressRequired")),
    senderCity: Yup.string().required(t("shipping.validation.senderCityRequired")),
    senderProvince: areaSchema.nullable().optional(),
    senderCountry: areaSchema.nullable().optional(),
    senderPostalCode: Yup.number()
      .typeError(t("shipping.validation.senderPostalCodeNumber"))
      .required(t("shipping.validation.senderPostalCodeRequired")),

    receiverFirstName: Yup.string().required(t("shipping.validation.receiverFirstNameRequired")),
    receiverLastName: Yup.string().optional(),
    receiverPhone: Yup.string().required(t("shipping.validation.receiverPhoneRequired")),
    receiverEmail: Yup.string().optional(),
    receiverAddress: Yup.string().required(t("shipping.validation.receiverAddressRequired")),
    receiverCity: Yup.string().required(t("shipping.validation.receiverCityRequired")),
    receiverProvince: areaSchema.nullable().optional(),
    receiverCountry: areaSchema.nullable().optional(),
    receiverPostalCode: Yup.number()
      .typeError(t("shipping.validation.receiverPostalCodeNumber"))
      .required(t("shipping.validation.receiverPostalCodeRequired")),
  })
}

export type ShippingFormValues = Yup.InferType<ReturnType<typeof useShippingSchema>>
