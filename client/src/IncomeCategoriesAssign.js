// assigning the income categories functions

// const getTotalIncomes = (map, censusMapping) => {
//   // build array that is sum of values at each income bracket for each census tract
//   const incomeVars = censusMapping["Household Income"];
//   const incomeValues = Object.values(incomeVars).map((item) => {
//     let value = 0;
//     for (const feature of map.features) {
//       value += feature.properties[item];
//     }
//     return value;
//   });

//   const totalIncomeLevels = {};
//   let i = 0;
//   for (const incomeLevel of Object.keys(incomeVars)) {
//     totalIncomeLevels[incomeLevel] = incomeValues[i];
//     i++;
//   }
//   return totalIncomeLevels;
// };
// const assignIncomeCategories = (map, censusMapping) => {
//   if (map === null || map == undefined) {
//     return;
//   }
//   const data = getTotalIncomes(map, censusMapping);

//   // make the quantiles
//   // Remove the "Number of Households" entry as it is not a category
//   //  console.log("total households originally in data", data["Number of Households"]);
//   delete data["Number of Households"];

//   // Convert the data object to an array of objects for easier processing
//   const dataArray = Object.entries(data).map(([key, value]) => ({
//     category: key,
//     households: value,
//   }));

//   // Define the number of quantile categories
//   const numCategories = 5;
//   const categories = [
//     "Low Income",
//     "Lower-Middle Income",
//     "Middle Income",
//     "Upper-Middle Income",
//     "High Income",
//   ];

//   //  console.log("data is", data);

//   // Calculate total number of households
//   const totalHouseholds = dataArray.reduce((sum, item) => sum + item.households, 0);
//   //  console.log("total households", totalHouseholds);

//   // Calculate quantile thresholds
//   const quantileStep = totalHouseholds / numCategories;
//   const quantiles = Array.from({ length: numCategories }, (_, i) => i * quantileStep);

//   // Function to assign quantile category based on cumulative sum
//   function assignQuantileCategory(cumulativeHouseholds, quantiles) {
//     for (let i = 0; i < quantiles.length - 1; i++) {
//       if (cumulativeHouseholds >= quantiles[i] && cumulativeHouseholds < quantiles[i + 1]) {
//         return categories[i];
//       }
//     }
//     return categories[quantiles.length - 1];
//   }

//   // Calculate cumulative sum of households and assign quantile categories
//   let cumulativeHouseholds = 0;
//   const categorizedData = [];
//   const result = Object.fromEntries(categories.map((category) => [category, []]));

//   dataArray.forEach((item) => {
//     cumulativeHouseholds += item.households;
//     const quantileCategory = assignQuantileCategory(cumulativeHouseholds, quantiles);
//     categorizedData.push({ ...item, quantileCategory });
//     result[quantileCategory].push(censusMapping["Household Income"][item.category]);
//   });

//   // Aggregate data by quantile category
//   const aggregatedData = categorizedData.reduce((acc, item) => {
//     if (!acc[item.quantileCategory]) {
//       acc[item.quantileCategory] = { category: item.quantileCategory, households: 0 };
//     }
//     acc[item.quantileCategory].households += item.households;
//     return acc;
//   }, {});
//   //  console.log("result is", result);
//   //  console.log("aggregated data", Object.values(aggregatedData));
//   return result;
// };

// assignIncomeCategories(mapAB, censusMapping[props.year]); // calculates desired categories
// income calculations

const getTotalIncomes = (map, censusMapping) => {
  // build array that is sum of values at each income bracket for each census tract
  const incomeVars = censusMapping["Household Income"];
  const incomeValues = Object.values(incomeVars).map((item) => {
    let value = 0;
    for (const feature of map.features) {
      // get the feature value
      value += Number(feature.properties[item]);
    }
    return value;
  });

  const totalIncomeLevels = {};
  let i = 0;
  for (const incomeLevel of Object.keys(incomeVars)) {
    totalIncomeLevels[incomeLevel] = incomeValues[i];
    i++;
  }
  return totalIncomeLevels;
};
const assignIncomeCategories = (map, censusMapping) => {
  if (map === null || map == undefined) {
    return;
  }
  const data = getTotalIncomes(map, censusMapping);

  // make the quantiles
  // Remove the "Number of Households" entry as it is not a category
  delete data["Number of Households"];

  // Convert the data object to an array of objects for easier processing
  const dataArray = Object.entries(data).map(([key, value]) => ({
    category: key,
    households: value,
  }));

  // Define the number of quantile categories
  const numCategories = 5;
  const categories = [
    "Low Income",
    "Lower-Middle Income",
    "Middle Income",
    "Upper-Middle Income",
    "High Income",
  ];

  // Calculate total number of households
  const totalHouseholds = dataArray.reduce((sum, item) => sum + item.households, 0);

  // Calculate quantile thresholds
  const quantileStep = totalHouseholds / numCategories;
  const quantiles = Array.from({ length: numCategories }, (_, i) => i * quantileStep);

  // Function to assign quantile category based on cumulative sum
  function assignQuantileCategory(cumulativeHouseholds, quantiles) {
    for (let i = 0; i < quantiles.length - 1; i++) {
      if (cumulativeHouseholds >= quantiles[i] && cumulativeHouseholds < quantiles[i + 1]) {
        return categories[i];
      }
    }
    return categories[quantiles.length - 1];
  }

  // Calculate cumulative sum of households and assign quantile categories
  let cumulativeHouseholds = 0;
  const categorizedData = [];
  const result = Object.fromEntries(categories.map((category) => [category, []]));

  dataArray.forEach((item) => {
    cumulativeHouseholds += item.households;
    const quantileCategory = assignQuantileCategory(cumulativeHouseholds, quantiles);
    categorizedData.push({ ...item, quantileCategory });
    result[quantileCategory].push(censusMapping["Household Income"][item.category]);
  });

  // Aggregate data by quantile category
  const aggregatedData = categorizedData.reduce((acc, item) => {
    if (!acc[item.quantileCategory]) {
      acc[item.quantileCategory] = { category: item.quantileCategory, households: 0 };
    }
    acc[item.quantileCategory].households += item.households;
    return acc;
  }, {});
  return result;
};
