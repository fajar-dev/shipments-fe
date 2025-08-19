import api from "./axiosInstance"

export interface ILabelPayload {
  brand: string
  weight?: number
  shippingDate: string
  trackNumber?: string
  shippingNote?: string

  senderFirstName: string
  senderLastName?: string
  senderPhone: string
  senderEmail?: string
  senderAddress: string
  senderCity: string
  senderCountryUuid?: string
  senderProvinceUuid?: string
  senderPostalCode: number | string

  receiverFirstName: string
  receiverLastName?: string
  receiverPhone: string
  receiverEmail? : string
  receiverAddress: string
  receiverCity: string
  receiverCountryUuid?: string
  receiverProvinceUuid?: string
  receiverPostalCode: number | string
}

export const store = async (payload: ILabelPayload) => {
  const response = await api.post("/shipments", payload)
  return response.data
}

export const getLabel = async (id: string) => {
  const response = await api.get(`/shipments/${id}/label`, {
      responseType: "blob",
    })

  const disposition = response.headers["content-disposition"]
  console.log("disposition:", disposition)

  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `${id}.pdf`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
