import { http, HttpResponse } from "msw";
import diseaseData from "./data/disease.json";
import medicineData from "./data/medicine.json";

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
  if ([0, 1, 11].includes(month)) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";
  return "autumn";
}

function getSeasonDiseaseList(season) {
  const disease_list = diseaseData.filter((e) => e.disease_season === season);
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
      .map(({ disease_code, disease_name }) => ({
        disease_code,
        disease_name,
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
      disease_name: null,
      disease_code: null,
    });
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
