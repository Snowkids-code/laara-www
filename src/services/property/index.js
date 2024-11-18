import ourApi from "../../endpoints/endpoints";

const getProperty = async () => {
  const response = await ourApi.property.getFilteredProperty();
  return response;
};

const getPropertById = async (data) => {
  const response = await ourApi.property.getPropertyById(data);
  return response;
};

const PropertyService = {
  getProperty,
  getPropertById,
};

export default PropertyService;
