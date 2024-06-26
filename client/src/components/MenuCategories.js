// in use
const dict_1980 = {
  "Total Population": {
    "Total Population": ["JSE_T001_0"],
  },
  Sex: {
    Male: ["JSE_T003_1"],
    Female: ["JSE_T003_2"],
  },

  Age: {
    "Under 5 years": ["JSE_T006_1"],
    "5 to 9 years": ["JSE_T006_2"],
    "10 to 17 years": ["JSE_T006_3", "JSE_T006_4"],
    "18 to 24 years": ["JSE_T006_5"],
    "25 to 64 years": ["JSE_T006_6", "JSE_T006_7", "JSE_T006_8", "JSE_T006_9"],
    "65 to 84 years": ["JSE_T00610", "JSE_T00611"],
    "85 years and over": ["JSE_T00612"],
  },

  Race: {
    White: ["JSE_T012_1"],
    Black: ["JSE_T012_2"],
    "American Indian, Eskimo, and Aleut": ["JSE_T012_3"],
    "Asian and Pacific Islander": ["JSE_T012_4"],
    "Other race": ["JSE_T012_5"],
  },

  "Educational Attainment for Population 25 Years and Over": {
    //  "Persons 25 Years Old And Over": ["JSE_T031_0"],
    "Elementary (0 to 8 years)": ["JSE_T031_1"],
    "High School (Total)": ["JSE_T031_2"],
    "High School: 1 to 3 years": ["JSE_T031_3"],
    "High School: 4 years": ["JSE_T031_4"],
    "College (Total)": ["JSE_T031_5"],
    "College: 1 to 3 years": ["JSE_T031_6"],
    "College: 4 or more years": ["JSE_T031_7"],
  },

  "School Enrollment": {
    // "Persons 3 Years Old And Over": ["JSE_T034_0"],
    "Nursery school": ["JSE_T034_1"],
    "Kindergarten and elementary (1 to 8 years)": ["JSE_T034_2"],
    "High school (1 to 4 years)": ["JSE_T034_3"],
    College: ["JSE_T034_4"],
  },

  "Employment Status For Population 16 Years And Over": {
    // "Persons 16 Years And Over": "JSE_T036_0",
    "Armed Forces": ["JSE_T036_1"],
    "Total Civilian Labor Force": ["JSE_T036_2"],
    "Civilian labor force: Employed": ["JSE_T036_3"],
    "Civilian labor force: Unemployed": ["JSE_T036_4"],
    "Not in labor force": ["JSE_T036_5"],
  },

  Occupation: {
    "Employed Persons 16 Years And Over": ["JSE_T050_0"],
    "Managerial and professional specialty occupations": ["JSE_T050_1"],
    "Technical, sales, and administrative support occupations": ["JSE_T050_4"],
    "Service occupations": ["JSE_T050_8"],
    "Operators, fabricators, and laborers": ["JSE_T05014"],
  },

  "Household Income": {
    "Number of Households": ["JSE_T052_0"],
    "Low Income": [
      "JSE_T052_1",
      "JSE_T052_2",
      "JSE_T052_3",
      "JSE_T052_4",
      "JSE_T052_5",
      "JSE_T052_6",
      "JSE_T052_7",
    ],
    "Lower-Middle Income": [
      "JSE_T052_8",
      "JSE_T052_9",
      "JSE_T05210",
      "JSE_T05211",
      "JSE_T05212",
      "JSE_T05213",
    ],
    "Middle Income": ["JSE_T05214", "JSE_T05215"],
    "Upper-Middle Income": ["JSE_T05216"],
    "High Income": ["JSE_T05217"],
  },

  "Year-Round Housing Units": {
    "Year-Round Housing units": ["JSE_T080_0"],
  },
};

const dict_1990 = {
  "Total Population": {
    "Total Population": ["jSE_T001_0"],
  },
  Sex: {
    Male: ["jSE_T005_1"],
    Female: ["jSE_T005_2"],
  },
  Age: {
    "Under 5 years": ["jSE_T008_1"],
    "5 to 9 years": ["jSE_T008_2"],
    "10 to 17 years": ["jSE_T008_3", "jSE_T008_4"],
    "18 to 24 years": ["jSE_T008_5"],
    "25 to 64 years": ["jSE_T008_6", "jSE_T008_7", "jSE_T008_8", "jSE_T008_9"],
    "65 to 84 years": ["jSE_T00810", "jSE_T00811"],
    "85 years and over": ["jSE_T00812"],
  },
  Race: {
    White: ["jSE_T012_1"],
    Black: ["jSE_T012_2"],
    "American Indian, Eskimo, or Aleut": ["jSE_T012_3"],
    "Asian or Pacific Islander": ["jSE_T012_4"],
    "Other race": ["jSE_T012_5"],
  },
  "Educational Attainment for Population 25 Years and Over": {
    "Persons 25 Years Old And Over": ["jSE_T022_0"],
    "Less than High School": ["jSE_T022_1"],
    "High school graduate (includes equivalency": ["jSE_T022_2"],
    "Some college": ["jSE_T022_3"],
    "Bachelor's Degree": ["jSE_T022_4"],
    "Graduate or professional degree": ["jSE_T022_5"],
  },
  "School Enrollment For The Population 3 Years And Over": {
    // "Persons 3 Years Old And Over": ["jSE_T023_0"],
    "Enrolled in School": ["jSE_T023_1"],
    "Not Enrolled in School": ["jSE_T023_2"],
  },
  "Employment Status For Population 16 Years And Over": {
    // "Population 16 Years And Over": ["jSE_T025_0"],
    "Total in Labor Force": ["jSE_T025_2"],
    "Armed Forces": ["jSE_T025_3"],
    "Total Civilian Labor Force": ["jSE_T025_4"],
    "Civilian labor force: Employed": ["jSE_T025_5"],
    "Civilian labor force: Unemployed": ["jSE_T025_6"],
    "Not in labor force": ["jSE_T025_7"],
  },
  Occupation: {
    "Employed Persons 16 Years And Over": ["jSE_T039_0"],
    "Managerial and professional specialty occupations": ["jSE_T039_1"],
    "Technical, sales, and administrative support occupations": ["jSE_T039_4"],
    "Service occupations": ["jSE_T039_8"],
    "Operators, fabricators, and laborers": ["jSE_T03914"],
  },
  "Household Income": {
    "Number of Households": "jSE_T041_0",
    "Low Income": [
      "jSE_T041_1",
      "jSE_T041_2",
      "jSE_T041_3",
      "jSE_T041_4",
      "jSE_T041_5",
      "jSE_T041_6",
      "jSE_T041_7",
    ],
    "Lower-Middle Income": [
      "jSE_T041_8",
      "jSE_T041_9",
      "jSE_T04110",
      "jSE_T04111",
      "jSE_T04112",
      "jSE_T04113",
      "jSE_T04114",
      "jSE_T04115",
      "jSE_T04116",
      "jSE_T04117",
      "jSE_T04118",
    ],
    "Middle Income": ["jSE_T04119", "jSE_T04120", "jSE_T04121"],
    "Upper-Middle Income": ["jSE_T04122"],
    "High Income": ["jSE_T04123", "jSE_T04124", "jSE_T04125"],
  },
  "Housing Units": {
    "Housing units": ["jSE_T072_0"],
  },
};

const dict_2000 = {
  "Total Population": {
    "Total Population": ["jSE_T001_0"],
  },
  Sex: {
    Male: ["jSE_T005_1"],
    Female: ["jSE_T005_2"],
  },
  Age: {
    "Under 5 years": ["jSE_T008_1"],
    "5 to 9 years": ["jSE_T008_2"],
    "10 to 17 years": ["jSE_T008_3", "jSE_T008_4"],
    "18 to 24 years": ["jSE_T008_5"],
    "25 to 64 years": ["jSE_T008_6", "jSE_T008_7", "jSE_T008_8", "jSE_T008_9"],
    "65 to 84 years": ["jSE_T00810", "jSE_T00811"],
    "85 years and over": ["jSE_T00812"],
  },
  Race: {
    White: ["jSE_T014_1"],
    "Black or African American": ["jSE_T014_2"],
    "American Indian and Alaska Native": ["jSE_T014_3"],
    Asian: ["jSE_T014_4"],
    "Native Hawaiian and Other Pacific Islander": ["jSE_T014_5"],
    "Other race": ["jSE_T014_6"],
    "Two or more races": ["jSE_T014_7"],
  },
  "Educational Attainment For Population 25 Years And Over": {
    //  "Population 25 years and over": ["jSE_T040_0"],
    "Less Than High School": ["jSE_T040_1"],
    "High School Graduate (includes equivalency)": ["jSE_T040_2"],
    "Some college": ["jSE_T040_3"],
    "Bachelor's degree": ["jSE_T040_4"],
    "Master's degree": ["jSE_T040_5"],
    "Professional school degree": ["jSE_T040_6"],
    "Doctorate degree": ["jSE_T040_7"],
  },
  "School Enrollment For The Population 3 Years And Over": {
    // "Population 3 years and over": ["jSE_T055_0"],
    "Enrolled in School": ["jSE_T055_1"],
    "Not Enrolled in School": ["jSE_T055_2"],
  },
  "Employment Status For Total Population 16 Years And Over": {
    // "Population 16 years and over": ["jSE_T069_0"],
    "Total in labor force": ["jSE_T069_1"],
    "In Armed Forces": ["jSE_T069_2"],
    "Total in Civillian Labor Force": ["jSE_T069_3"],
    "Civilian Labor Force: Employed": ["jSE_T069_4"],
    "Civilian Labor Force: Unemployed": ["jSE_T069_5"],
    "Not in labor force": ["jSE_T069_6"],
  },
  "Occupation For Employed Civilian Population 16 Years And Over": {
    "Employed civilian population 16 years and over": ["jSE_T086_0"],
    "Management, business, and financial operations occupations": ["jSE_T086_1"],
    "Personal care and service occupations": ["jSE_T086_7"],
    "Sales and related occupations": ["jSE_T086_8"],
    "Construction, extraction, and maintenance occupations": ["jSE_T08611"],
    "Transportation and material moving occupations": ["jSE_T08613"],
  },
  "Household Income": {
    "Number of Households": ["jSE_T092_0"],
    "Low Income": ["jSE_T092_1", "jSE_T092_2", "jSE_T092_3"],
    "Lower-Middle Income": [
      "jSE_T092_4",
      "jSE_T092_5",
      "jSE_T092_6",
      "jSE_T092_7",
      "jSE_T092_8",
      "jSE_T092_9",
    ],
    "Middle Income": ["jSE_T09210", "jSE_T09211"],
    "Upper-Middle Income": ["jSE_T09212", "jSE_T09213"],
    "High Income": ["jSE_T09214", "jSE_T09215", "jSE_T09216"],
  },
  "Housing Units": {
    "Housing units": ["jSE_T155_0"],
  },
};

const dict_2010 = {
  "Total Population": {
    "Total Population": ["B01001_001E"],
  },
  Sex: {
    Male: ["B01001_002E"],
    Female: ["B01001_026E"],
  },

  Age: {
    "Under 5 years": ["B06001_002E"],
    "5 to 9 years": ["B01001_004E", "B01001_028E"],
    "5 to 17 years": ["B06001_003E"],
    "10 to 14 years": ["B01001_005E", "B01001_029E"],
    "15 to 17 years": ["B01001_006E", "B01001_030E"],
    "18 to 24 years": ["B06001_004E"],
    "25 to 34 years": ["B06001_005E"],
    "35 to 44 years": ["B06001_006E"],
    "45 to 54 years": ["B06001_007E"],
    "55 to 59 years": ["B06001_008E"],
    "60 to 61 years": ["B06001_009E"],
    "62 to 64 years": ["B06001_010E"],
    "65 to 74 years": ["B06001_011E"],
    "75 years and over": ["B06001_012E"],
    "75 to 84 years": ["B01001_022E", "B01001_046E"],
    "85 years and over": ["B01001_023E", "B01001_047E"],
  },
  Race: {
    "Total Population": ["B02001_001E"],
    "White Alone": ["B02001_002E"],
    "Black or African American Alone": ["B02001_003E"],
    "American Indian and Alaska Native Alone": ["B02001_004E"],
    "Asian Alone": ["B02001_005E"],
    "Native Hawaiian and Other Pacific Islander Alone": ["B02001_006E"],
    "Some other race Alone": ["B02001_007E"],
    "Two or more races": ["B02001_008E"],
  },
  "Educational Attainment For Population 25 Years And Over": {
    "Population 25 years and over": ["B15002_001E"],
    "Less Than High School": [
      "B15002_003E",
      "B15002_004E",
      "B15002_005E",
      "B15002_006E",
      "B15002_007E",
      "B15002_008E",
      "B15002_009E",
      "B15002_010E",
      "B15002_020E",
      "B15002_021E",
      "B15002_022E",
      "B15002_023E",
      "B15002_024E",
      "B15002_025E",
      "B15002_026E",
      "B15002_027E",
    ],
    "High School Graduate (includes equivalency)": ["B15002_011E", "B15002_028E"],
    "Some college": ["B15002_012E", "B15002_013E", "B15002_029E", "B15002_030E"],
    "Associate's degree": ["B15002_014E", "B15002_031E"],
    "Bachelor's degree": ["B15002_015E", "B15002_032E"],
    "Master's degree": ["B15002_016E", "B15002_033E"],
    "Professional school degree": ["B15002_017E", "B15002_034E"],
    "Doctorate degree": ["B15002_018E", "B15002_035E"],
  },
  "School Enrollment For The Population 3 Years And Over": {
    "Population 3 years and over": ["B14001_001E"],
    "Enrolled in School": ["B14001_002E"],
    "Enrolled in nursery school, preschool": ["B14001_003E"],
    "Enrolled in kindergarten": ["B14001_004E"],
    "Enrolled in grade 1 to grade 4": ["B14001_005E"],
    "Enrolled in grade 5 to grade 8": ["B14001_006E"],
    "Enrolled in grade 9 to grade 12": ["B14001_007E"],
    "Enrolled in college, undergraduate years": ["B14001_008E"],
    "Enrolled in Graduate or professional school": ["B14001_009E"],
    "Not enrolled in school": ["B14001_010E"],
  },
  "Employment Status For Total Population 16 Years And Over": {
    // in general need to check this one
    "Population 16 years and over": ["B23001_001E"],
    "Total in labor force": [
      "B23001_004E",
      "B23001_011E",
      "B23001_018E",
      "B23001_025E",
      "B23001_032E",
      "B23001_039E",
      "B23001_046E",
      "B23001_053E",
      "B23001_060E",
      "B23001_067E",
      "B23001_074E",
      "B23001_079E",
      "B23001_084E",
      "B23001_090E",
      "B23001_097E",
      "B23001_104E",
      "B23001_111E",
      "B23001_118E",
      "B23001_125E",
      "B23001_132E",
      "B23001_139E",
      "B23001_146E",
      "B23001_153E",
      "B23001_160E",
      "B23001_165E",
      "B23001_170E",
    ],
    "In Armed Forces": [
      // double check this one definitely
      "B23001_005E",
      "B23001_012E",
      "B23001_019E",
      "B23001_026E",
      "B23001_033E",
      "B23001_040E",
      "B23001_047E",
      "B23001_054E",
      "B23001_061E",
      "B23001_068E",
      "B23001_091E",
      "B23001_098E",
      "B23001_105E",
      "B23001_112E",
      "B23001_119E",
      "B23001_126E",
      "B23001_133E",
      "B23001_140E",
      "B23001_147E",
      "B23001_154E",
      "B23001_161E",
      "B23001_166E",
      "B23001_171E",
    ],
    "Total in Civilian Labor Force": [
      "B23001_006E",
      "B23001_013E",
      "B23001_020E",
      "B23001_027E",
      "B23001_034E",
      "B23001_041E",
      "B23001_048E",
      "B23001_055E",
      "B23001_062E",
      "B23001_069E",
      "B23001_074E", // check this one and before
      "B23001_079E",
      "B23001_084E",
      "B23001_092E",
      "B23001_099E",
      "B23001_106E",
      "B23001_113E",
      "B23001_120E",
      "B23001_127E",
      "B23001_134E",
      "B23001_141E",
      "B23001_148E",
      "B23001_155E",
      "B23001_162E",
      "B23001_167E",
      "B23001_172E",
    ],
    "Civilian Labor Force: Employed": [
      "B23001_007E",
      "B23001_014E",
      "B23001_021E",
      "B23001_028E",
      "B23001_035E",
      "B23001_042E",
      "B23001_049E",
      "B23001_056E",
      "B23001_063E",
      "B23001_070E",
      "B23001_075E",
      "B23001_080E",
      "B23001_085E",
      "B23001_093E",
      "B23001_100E",
      "B23001_107E",
      "B23001_114E",
      "B23001_121E",
      "B23001_128E",
      "B23001_135E",
      "B23001_142E",
      "B23001_149E",
      "B23001_156E",
      "B23001_163E",
      "B23001_168E",
      "B23001_173E",
    ],
    "Civilian Labor Force: Unemployed": [
      "B23001_008E",
      "B23001_015E",
      "B23001_022E",
      "B23001_029E",
      "B23001_036E",
      "B23001_043E",
      "B23001_050E",
      "B23001_057E",
      "B23001_064E",
      "B23001_071E",
      "B23001_076E", // check this one and before
      "B23001_081E",
      "B23001_086E",
      "B23001_094E",
      "B23001_101E",
      "B23001_108E",
      "B23001_115E",
      "B23001_122E",
      "B23001_129E",
      "B23001_136E",
      "B23001_143E",
      "B23001_150E",
      "B23001_157E",
      "B23001_164E",
      "B23001_169E",
      "B23001_174E",
    ],
    "Not in labor force": [
      "B23001_009E",
      "B23001_016E",
      "B23001_023E",
      "B23001_030E",
      "B23001_037E",
      "B23001_044E",
      "B23001_051E",
      "B23001_058E",
      "B23001_065E",
      "B23001_072E",
      "B23001_077E",
      "B23001_082E",
      "B23001_087E",
      "B23001_095E",
      "B23001_102E",
      "B23001_109E",
      "B23001_116E",
      "B23001_123E",
      "B23001_130E",
      "B23001_137E",
      "B23001_144E",
      "B23001_151E",
      "B23001_158E",
      "B23001_165E",
      "B23001_170E",
      "B23001_175E",
    ],
  },
  "Occupation For Employed Civilian Population 16 Years And Over": {
    // definitely need to be verified
    Total: ["C24010_001E"],
    "Management, business, science, and arts occupations": [
      "C24010_003E",
      "C24010_004E",
      "C24010_005E",
      "C24010_006E",
      "C24010_007E",
      "C24010_060E",
      "C24010_061E",
      "C24010_062E",
      "C24010_063E",
      "C24010_064E",
    ],
    "Service occupations": [
      "C24010_012E",
      "C24010_013E",
      "C24010_014E",
      "C24010_015E",
      "C24010_016E",
      "C24010_069E",
      "C24010_070E",
      "C24010_071E",
      "C24010_072E",
      "C24010_073E",
    ],
    "Sales and office occupations": [
      "C24010_021E",
      "C24010_022E",
      "C24010_023E",
      "C24010_078E",
      "C24010_079E",
      "C24010_080E",
    ],
    "Natural resources, construction, and maintenance occupations": [
      "C24010_030E",
      "C24010_031E",
      "C24010_032E",
      "C24010_087E",
      "C24010_088E",
      "C24010_089E",
    ],
    "Production, transportation, and material moving occupations": [
      "C24010_039E",
      "C24010_040E",
      "C24010_041E",
      "C24010_042E",
      "C24010_043E",
      "C24010_096E",
      "C24010_097E",
      "C24010_098E",
      "C24010_099E",
      "C24010_100E",
    ],
  },
  "Household Income": {
    // correct
    "Number of Households": ["B19001_001E"],
    "Less than $10,000": ["B19001_002E"],
    "$10,000 to $14,999": ["B19001_003E"],
    "$15,000 to $19,999": ["B19001_004E"],
    "$20,000 to $24,999": ["B19001_005E"],
    "$25,000 to $29,999": ["B19001_006E"],
    "$30,000 to $34,999": ["B19001_007E"],
    "$35,000 to $39,999": ["B19001_008E"],
    "$40,000 to $44,999": ["B19001_009E"],
    "$45,000 to $49,999": ["B19001_010E"],
    "$50,000 to $59,999": ["B19001_011E"],
    "$60,000 to $74,999": ["B19001_012E"],
    "$75,000 to $99,999": ["B19001_013E"],
    "$100,000 to $124,999": ["B19001_014E"],
    "$125,000 to $149,999": ["B19001_015E"],
    "$150,000 to $199,999": ["B19001_016E"],
    "$200,000 or more": ["B19001_017E"],
  },
  "Housing Units": {
    // correct
    "Housing units": ["B25001_001E"],
  },
};

const dict_2020 = {
  "Total Population": {
    "Total Population": ["B01001_001E"],
  },
  Sex: {
    Male: ["B01001_002E"],
    Female: ["B01001_026E"],
  },

  Age: {
    "Under 5 years": ["B06001_002E"],
    "5 to 9 years": ["B01001_004E", "B01001_028E"],
    "5 to 17 years": ["B06001_003E"],
    "10 to 14 years": ["B01001_005E", "B01001_029E"],
    "15 to 17 years": ["B01001_006E", "B01001_030E"],
    "18 to 24 years": ["B06001_004E"],
    "25 to 34 years": ["B06001_005E"],
    "35 to 44 years": ["B06001_006E"],
    "45 to 54 years": ["B06001_007E"],
    "55 to 64 years": ["B06001_008E", "B06001_009E", "B06001_010E"],
    "65 to 74 years": ["B06001_011E"],
    "75 to 84 years": ["B01001_023E", "B01001_024E", "B01001_047E", "B01001_048E"],
    "85 years and over": ["B01001_025E", "B01001_049E"],
  },
  Race: {
    "Total Population": ["B02001_001E"],
    "White Alone": ["B02001_002E"],
    "Black or African American Alone": ["B02001_003E"],
    "American Indian and Alaska Native Alone": ["B02001_004E"],
    "Asian Alone": ["B02001_005E"],
    "Native Hawaiian and Other Pacific Islander Alone": ["B02001_006E"],
    "Some other race Alone": ["B02001_007E"],
    "Two or more races": ["B02001_008E"],
  },
  "Educational Attainment For Population 25 Years And Over": {
    "Population 25 years and over": ["B15002_001E"],
    "Less Than High School": [
      "B15002_003E",
      "B15002_004E",
      "B15002_005E",
      "B15002_006E",
      "B15002_007E",
      "B15002_008E",
      "B15002_009E",
      "B15002_010E",
      "B15002_020E",
      "B15002_021E",
      "B15002_022E",
      "B15002_023E",
      "B15002_024E",
      "B15002_025E",
      "B15002_026E",
      "B15002_027E",
    ],
    "High School Graduate (includes equivalency)": ["B15002_011E", "B15002_028E"],
    "Some college": ["B15002_012E", "B15002_013E", "B15002_029E", "B15002_030E"],
    "Associate's degree": ["B15002_014E", "B15002_031E"],
    "Bachelor's degree": ["B15002_015E", "B15002_032E"],
    "Master's degree": ["B15002_016E", "B15002_033E"],
    "Professional school degree": ["B15002_017E", "B15002_034E"],
    "Doctorate degree": ["B15002_018E", "B15002_035E"],
  },
  "School Enrollment For The Population 3 Years And Over": {
    "Population 3 years and over": ["B14001_001E"],
    "Enrolled in School": ["B14001_002E"],
    "Enrolled in nursery school, preschool": ["B14001_003E"],
    "Enrolled in kindergarten": ["B14001_004E"],
    "Enrolled in grade 1 to grade 4": ["B14001_005E"],
    "Enrolled in grade 5 to grade 8": ["B14001_006E"],
    "Enrolled in grade 9 to grade 12": ["B14001_007E"],
    "Enrolled in college, undergraduate years": ["B14001_008E"],
    "Enrolled in Graduate or professional school": ["B14001_009E"],
    "Not enrolled in school": ["B14001_010E"],
  },
  "Employment Status For Total Population 16 Years And Over": {
    // in general need to check this one
    "Population 16 years and over": ["B23001_001E"],
    "Total in labor force": [
      "B23001_004E",
      "B23001_011E",
      "B23001_018E",
      "B23001_025E",
      "B23001_032E",
      "B23001_039E",
      "B23001_046E",
      "B23001_053E",
      "B23001_060E",
      "B23001_067E",
      "B23001_074E",
      "B23001_079E",
      "B23001_084E",
      "B23001_090E",
      "B23001_097E",
      "B23001_104E",
      "B23001_111E",
      "B23001_118E",
      "B23001_125E",
      "B23001_132E",
      "B23001_139E",
      "B23001_146E",
      "B23001_153E",
      "B23001_160E",
      "B23001_165E",
      "B23001_170E",
    ],
    "In Armed Forces": [
      // double check this one definitely
      "B23001_005E",
      "B23001_012E",
      "B23001_019E",
      "B23001_026E",
      "B23001_033E",
      "B23001_040E",
      "B23001_047E",
      "B23001_054E",
      "B23001_061E",
      "B23001_068E",
      "B23001_091E",
      "B23001_098E",
      "B23001_105E",
      "B23001_112E",
      "B23001_119E",
      "B23001_126E",
      "B23001_133E",
      "B23001_140E",
      "B23001_147E",
      "B23001_154E",
      "B23001_161E",
      "B23001_166E",
      "B23001_171E",
    ],
    "Total in Civilian Labor Force": [
      "B23001_006E",
      "B23001_013E",
      "B23001_020E",
      "B23001_027E",
      "B23001_034E",
      "B23001_041E",
      "B23001_048E",
      "B23001_055E",
      "B23001_062E",
      "B23001_069E",
      "B23001_074E", // check this one and before
      "B23001_079E",
      "B23001_084E",
      "B23001_092E",
      "B23001_099E",
      "B23001_106E",
      "B23001_113E",
      "B23001_120E",
      "B23001_127E",
      "B23001_134E",
      "B23001_141E",
      "B23001_148E",
      "B23001_155E",
      "B23001_162E",
      "B23001_167E",
      "B23001_172E",
    ],
    "Civilian Labor Force: Employed": [
      "B23001_007E",
      "B23001_014E",
      "B23001_021E",
      "B23001_028E",
      "B23001_035E",
      "B23001_042E",
      "B23001_049E",
      "B23001_056E",
      "B23001_063E",
      "B23001_070E",
      "B23001_075E",
      "B23001_080E",
      "B23001_085E",
      "B23001_093E",
      "B23001_100E",
      "B23001_107E",
      "B23001_114E",
      "B23001_121E",
      "B23001_128E",
      "B23001_135E",
      "B23001_142E",
      "B23001_149E",
      "B23001_156E",
      "B23001_163E",
      "B23001_168E",
      "B23001_173E",
    ],
    "Civilian Labor Force: Unemployed": [
      "B23001_008E",
      "B23001_015E",
      "B23001_022E",
      "B23001_029E",
      "B23001_036E",
      "B23001_043E",
      "B23001_050E",
      "B23001_057E",
      "B23001_064E",
      "B23001_071E",
      "B23001_076E", // check this one and before
      "B23001_081E",
      "B23001_086E",
      "B23001_094E",
      "B23001_101E",
      "B23001_108E",
      "B23001_115E",
      "B23001_122E",
      "B23001_129E",
      "B23001_136E",
      "B23001_143E",
      "B23001_150E",
      "B23001_157E",
      "B23001_164E",
      "B23001_169E",
      "B23001_174E",
    ],
    "Not in labor force": [
      "B23001_009E",
      "B23001_016E",
      "B23001_023E",
      "B23001_030E",
      "B23001_037E",
      "B23001_044E",
      "B23001_051E",
      "B23001_058E",
      "B23001_065E",
      "B23001_072E",
      "B23001_077E",
      "B23001_082E",
      "B23001_087E",
      "B23001_095E",
      "B23001_102E",
      "B23001_109E",
      "B23001_116E",
      "B23001_123E",
      "B23001_130E",
      "B23001_137E",
      "B23001_144E",
      "B23001_151E",
      "B23001_158E",
      "B23001_165E",
      "B23001_170E",
      "B23001_175E",
    ],
  },
  "Occupation For Employed Civilian Population 16 Years And Over": {
    // definitely need to be verified
    Total: ["C24010_001E"],
    "Management, business, science, and arts occupations": [
      "C24010_003E",
      "C24010_004E",
      "C24010_005E",
      "C24010_006E",
      "C24010_007E",
      "C24010_060E",
      "C24010_061E",
      "C24010_062E",
      "C24010_063E",
      "C24010_064E",
    ],
    "Service occupations": [
      "C24010_012E",
      "C24010_013E",
      "C24010_014E",
      "C24010_015E",
      "C24010_016E",
      "C24010_069E",
      "C24010_070E",
      "C24010_071E",
      "C24010_072E",
      "C24010_073E",
    ],
    "Sales and office occupations": [
      "C24010_021E",
      "C24010_022E",
      "C24010_023E",
      "C24010_078E",
      "C24010_079E",
      "C24010_080E",
    ],
    "Natural resources, construction, and maintenance occupations": [
      "C24010_030E",
      "C24010_031E",
      "C24010_032E",
      "C24010_087E",
      "C24010_088E",
      "C24010_089E",
    ],
    "Production, transportation, and material moving occupations": [
      "C24010_039E",
      "C24010_040E",
      "C24010_041E",
      "C24010_042E",
      "C24010_043E",
      "C24010_096E",
      "C24010_097E",
      "C24010_098E",
      "C24010_099E",
      "C24010_100E",
    ],
  },
  "Household Income": {
    // correct
    "Number of Households": ["B19001_001E"],
    "Less than $10,000": ["B19001_002E"],
    "$10,000 to $14,999": ["B19001_003E"],
    "$15,000 to $19,999": ["B19001_004E"],
    "$20,000 to $24,999": ["B19001_005E"],
    "$25,000 to $29,999": ["B19001_006E"],
    "$30,000 to $34,999": ["B19001_007E"],
    "$35,000 to $39,999": ["B19001_008E"],
    "$40,000 to $44,999": ["B19001_009E"],
    "$45,000 to $49,999": ["B19001_010E"],
    "$50,000 to $59,999": ["B19001_011E"],
    "$60,000 to $74,999": ["B19001_012E"],
    "$75,000 to $99,999": ["B19001_013E"],
    "$100,000 to $124,999": ["B19001_014E"],
    "$125,000 to $149,999": ["B19001_015E"],
    "$150,000 to $199,999": ["B19001_016E"],
    "$200,000 or more": ["B19001_017E"],
  },
  "Housing Units": {
    // correct
    "Housing units": ["B25001_001E"],
  },
};

const censusMapping = {
  1980: dict_1980,
  1990: dict_1990,
  2000: dict_2000,
  2010: dict_2010,
  2020: dict_2020,
};

export default censusMapping;
