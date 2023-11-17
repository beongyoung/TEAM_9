import { http, HttpResponse } from "msw";
import diseaseData from "./data/disease.json";
import medicineData from "./data/medicine.json";
import nutrientData from "./data/nutrient.json";

const diseaseMap = diseaseData.reduce((map, data) => {
  return map.set(data.disease_code, data);
}, new Map());
const medicineMap = medicineData.reduce((map, data) => {
  return map.set(data.disease_code, data);
}, new Map());
const notFoundError = new HttpResponse("404 not found", {
  status: 404,
  headers: { "Content-Type": "text/plain" },
});

function getSeason() {
  const month = new Date().getMonth();
  if ([0, 1, 10, 11].includes(month)) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";
  return "autumn";
}

function getSeasonDiseaseList(season) {
  const disease_list = diseaseData
    .filter((e) => e.disease_season === season)
    .map(({ disease_code, disease_name, disease_image }) => ({
      disease_code,
      disease_name,
      disease_image,
    }));
  return disease_list;
}

function getDiseaseFromId(id) {
  const data = diseaseData.find(({ disease_code }) => disease_code === id);
  if (data === undefined) return null;
  if (medicineMap.has(id)) return { ...data, ...medicineMap.get(id) };
  return {
    ...data,
    medicine_name: null,
    medicine_comp: null,
  };
}

//msw (mock api를 작성하실 때는 /api/를 붙여서 작성해주세요)

export const handlers = [
  http.get("/api/disease", () => {
    const season = getSeason();
    return HttpResponse.json(getSeasonDiseaseList(season));
  }),
  http.get("/api/disease/search/:query", ({ params }) => {
    const { query } = params;
    const filtered = diseaseData
      .filter((e) => e.disease_name.includes(query))
      .map(({ disease_code, disease_name, disease_image }) => ({
        disease_code,
        disease_name,
        disease_image,
      }));

    return HttpResponse.json(filtered);
  }),
  http.get("/api/disease/season/:season", ({ params }) => {
    const { season } = params;

    if (["spring", "summer", "autumn", "winter"].includes(season)) {
      return HttpResponse.json(getSeasonDiseaseList(season));
    } else return notFoundError.clone();
  }),
  http.get("/api/disease/:id", ({ params }) => {
    const { id } = params;

    const data = getDiseaseFromId(id);
    if (data === null) return notFoundError.clone();
    return HttpResponse.json(data);
  }),
  http.get("/api/medicine", () => {
    const medicine_list = medicineData.map((data) => ({
      ...data,
      disease_name: diseaseMap.get(data.disease_code).disease_name,
    }));
    return HttpResponse.json(medicine_list);
  }),
  http.get("/api/medicine/search/:query", ({ params }) => {
    const { query } = params;
    const medicine_list = medicineData.filter((e) =>
      e.medicine_name.includes(query),
    );
    return HttpResponse.json(medicine_list);
  }),
  http.get("/api/medicine/representation", () => {
    const medicine_list = medicineData
      .filter(
        (data) =>
          diseaseMap.get(data.disease_code)?.disease_season === getSeason(),
      )
      .map((data) => ({
        ...data,
        disease_name: diseaseMap.get(data.disease_code).disease_name,
      }));
    return HttpResponse.json(medicine_list.slice(0, 4));
  }),
  http.get("/api/medicine/:id", ({ params }) => {
    const { id } = params;
    const data = medicineData.find(({ medicine_code }) => medicine_code === id);
    if (data === undefined) return notFoundError.clone();
    if (diseaseMap.has(data.disease_code))
      return HttpResponse.json({
        ...data,
        disease_name: diseaseMap.get(data.disease_code).disease_name,
      });
    return HttpResponse.json({
      ...data,
      disease_code: null,
    });
  }),
  http.get("/api/nutrients", () => {
    return HttpResponse.json(nutrientData);
  }),
  http.get("/api/nutrients/search/:query", ({ params }) => {
    const { query } = params;
    const data = nutrientData.filter(({ nutrients_name }) =>
      nutrients_name.includes(query),
    );
    if (data === undefined) return notFoundError.clone();
    return HttpResponse.json(data);
  }),
  http.get("/api/nutrients/representation", () => {
    const nutrient_list = nutrientData.filter((data) =>
      data.disease_codes.some(
        (code) => diseaseMap.get(code)?.disease_season === getSeason(),
      ),
    );
    return HttpResponse.json(nutrient_list.slice(0, 4));
  }),
  http.get("/api/nutrients/:id", ({ params }) => {
    const { id: paramId } = params;
    const data = nutrientData.find(({ id }) => {
      return String(id) === paramId;
    });
    if (data === undefined) return notFoundError.clone();

    const result = {
      id: data.id,
      image_url: data.image_url,
      nutrients_name: data.nutrients_name,
      nutrients_efficiency: data.nutrients_efficiency,
      diseases: data.disease_codes.map((code) => ({
        code,
        name: diseaseMap.get(code).disease_name,
      })),
    };

    return HttpResponse.json(result);
  }),

  http.get("/api/invalid", () => {
    return new HttpResponse("404 not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }),
];
