import React, { useEffect, useState } from "react"
import { Autocomplete, TextField, CircularProgress } from "@mui/material"
import { getCountry, getProvince, IArea } from "../api/administativeArea.api"
import { useTranslation } from "react-i18next"

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
  countryLabel,
  provinceLabel,
}) => {
  const { t } = useTranslation()

  const [countries, setCountries] = useState<IArea[]>([])
  const [provinces, setProvinces] = useState<IArea[]>([])
  const [loadingCountry, setLoadingCountry] = useState(false)
  const [loadingProvince, setLoadingProvince] = useState(false)

  const fetchCountries = async (query?: string) => {
    setLoadingCountry(true)
    const data = await getCountry(query)
    setCountries(data)
    setLoadingCountry(false)
  }

  const fetchProvinces = async (countryId: string, query?: string) => {
    setLoadingProvince(true)
    const data = await getProvince(countryId, query)
    setProvinces(data)
    setLoadingProvince(false)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

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
            label={countryLabel || t("shipping.form.country")} // ✅ pakai i18n
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingCountry ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
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
        onInputChange={(_, val) =>
          countryValue && fetchProvinces(countryValue.id, val)
        }
        disabled={!countryValue}
        loading={loadingProvince}
        renderInput={(params) => (
          <TextField
            {...params}
            label={provinceLabel || t("shipping.form.province")} // ✅ pakai i18n
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingProvince ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
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
