const tokenize = s => s.split(' ')

const isNearMatchingName = (searchParam, countryName) =>
  tokenize(searchParam.toLowerCase()).some(searchToken =>
  tokenize(countryName.toLowerCase()).some(countryNameToken =>
    countryNameToken.startsWith(searchToken)))

export const fuzzyFilterCountriesByName = (countries, partialName) => {
  return partialName?
    countries
    .filter(countryListing =>
      isNearMatchingName(partialName, countryListing.name.common)
    )
  : []
}
