import React, { useEffect, useState } from "react"
import { Autocomplete, TextField, CircularProgress } from "@mui/material"
import { getCountryFn, getProvinceFn, IArea } from "../api/administativeArea.api"

interface LocationFieldsProps {
  countryValue: IArea | null
  provinceValue: IArea | null
  onCountryChange: (val: IArea | null) => void
  onProvinceChange: (val: IArea | null) => void
  countryLabel?: string
  provinceLabel?: string
}

const LocationFields: React.FC<LocationFieldsProps> = ({
  countryValue,
  provinceValue,
  onCountryChange,
  onProvinceChange,
  countryLabel = "Negara",
  provinceLabel = "Provinsi",
}) => {
  const [countries, setCountries] = useState<IArea[]>([])
  const [provinces, setProvinces] = useState<IArea[]>([])
  const [loadingCountry, setLoadingCountry] = useState(false)
  const [loadingProvince, setLoadingProvince] = useState(false)

  const fetchCountries = async (query?: string) => {
    setLoadingCountry(true)
    const data = await getCountryFn(query)
    setCountries(data)
    setLoadingCountry(false)
  }

  const fetchProvinces = async (countryId: string, query?: string) => {
    setLoadingProvince(true)
    const data = await getProvinceFn(countryId, query)
    setProvinces(data)
    setLoadingProvince(false)
  }

  // Load countries saat mount
  useEffect(() => { fetchCountries() }, [])

  // Reset provinsi saat country berubah
  useEffect(() => {
    onProvinceChange(null)
    if (!countryValue) {
      setProvinces([])
      return
    }
    fetchProvinces(countryValue.id)
  }, [countryValue])

  return (
    <>
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        value={countryValue}
        onChange={(_, val) => onCountryChange(val)}
        onInputChange={(_, val) => fetchCountries(val)}
        loading={loadingCountry}
        renderInput={(params) => (
          <TextField
            {...params}
            label={countryLabel}
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingCountry ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />

      <Autocomplete
        options={provinces}
        getOptionLabel={(option) => option.name}
        value={provinceValue}
        onChange={(_, val) => onProvinceChange(val)}
        onInputChange={(_, val) => countryValue && fetchProvinces(countryValue.id, val)}
        disabled={!countryValue}
        loading={loadingProvince}
        renderInput={(params) => (
          <TextField
            {...params}
            label={provinceLabel}
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingProvince ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  )
}

export default LocationFields
