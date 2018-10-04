import wrappers from "./wrappers";

const fetchBond = async () => {
  try {
    // await wrappers.getBond();
    return { data: {} };
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export default { fetchBond };
