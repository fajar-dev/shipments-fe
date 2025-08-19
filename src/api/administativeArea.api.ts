import api from "./axiosInstance"

// Interface area
export interface IArea {
  id: string
  name: string
}

export const getCountry = async (query?: string): Promise<IArea[]> => {
  const response = await api.get("/administrative-area", {
    params: { q: query || "" },
  })
  return response.data?.data?.data
}

export const getProvince = async (countryId: string, query?: string): Promise<IArea[]> => {
  const response = await api.get(`/administrative-area/${countryId}`, {
    params: { q: query || "" },
  })
  return response.data?.data?.data
}
