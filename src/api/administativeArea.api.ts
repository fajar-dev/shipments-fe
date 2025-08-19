import api from "./axiosInstance"

// Interface area
export interface IArea {
  id: string
  name: string
}

export const getCountryFn = async (query?: string): Promise<IArea[]> => {
  try {
    const response = await api.get("/administrative-area", {
      params: { q: query || "" },
    })
    return response.data?.data?.data || []
  } catch (error) {
    console.error("Failed to fetch countries:", error)
    return []
  }
}

export const getProvinceFn = async (countryId: string, query?: string): Promise<IArea[]> => {
  try {
    const response = await api.get(`/administrative-area/${countryId}`, {
      params: { q: query || "" },
    })
    return response.data?.data?.data || []
  } catch (error) {
    console.error(`Failed to fetch provinces for countryId=${countryId}:`, error)
    return []
  }
}
