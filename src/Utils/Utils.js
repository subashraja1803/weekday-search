export const capitalizeFirstLetter = (text) => {
  const words = text.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

export const getFilteredData = (filters, cardsData) => {
  let result = [...(cardsData || [])];
  const {
    roles = [],
    experience = null,
    workSetting = [],
    baseSalary = null,
    companyName = "",
  } = filters;
  if (roles?.length) {
    const rolesValues = roles.map(({ value }) => value);
    result = result.filter(({ jobRole }) => rolesValues.includes(jobRole));
  }
  if (experience) {
    result = result.filter(
      ({ minExp }) =>
        minExp !== null && Number(experience?.value) >= Number(minExp)
    );
  }
  if (workSetting?.length) {
    const workSettingValues = workSetting.map(({ value }) => value);
    result = result.filter(({ location }) => {
      if (
        workSettingValues.includes("remote") &&
        workSettingValues.includes("on-site")
      ) {
        return true;
      } else if (workSettingValues.includes("remote")) {
        return location === "remote";
      } else return location !== "remote";
    });
  }
  if (baseSalary) {
    result = result.filter(
      ({ maxJdSalary }) => parseInt(baseSalary?.value) <= Number(maxJdSalary)
    );
  }
  if (companyName) {
    result = result.filter(({ companyName: compName }) =>
      (compName || "")
        .trim()
        .toLowerCase()
        .includes(companyName.trim().toLowerCase())
    );
  }
  return result;
};
