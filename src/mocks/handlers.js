import { http, HttpResponse } from "msw";
import diseaseData from "./data/disease.json";
import medicineData from "./data/medicine.json";
import nutrientData from "./data/nutrient.json";
import boardData from "./data/board.json";
import commentData from "./data/comment.json";
import personalMedicine from "./data/personalMedicine.json";
import personalNutrients from "./data/personalNutrient.json";

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
const badRequestError = new HttpResponse("400 bad request", {
  status: 400,
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

function searchBoard(basis, boardNo, prompt) {
  return (data) => {
    if (boardNo !== "all" && String(data.board_type) !== boardNo) return false;
    if (basis === "title") return data.board_title.includes(prompt);
    if (basis === "content") return data.board_content.includes(prompt);
    if (basis === "author") return data.board_author.includes(prompt);
    return false;
  };
}

//msw (mock api를 작성하실 때는 /api/를 붙여서 작성해주세요)

export const handlers = [
  // 질병
  http.get("/api/disease", () => {
    const season = getSeason();
    return HttpResponse.json(getSeasonDiseaseList(season));
  }),
  http.get("/api/disease/representation", () => {
    const season = getSeason();
    return HttpResponse.json(getSeasonDiseaseList(season).slice(0, 4));
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

  // 의약품

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
  http.get("/api/medicine/personal", () => {
    return HttpResponse.json(personalMedicine);
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

  // 영양제

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
  http.get("/api/nutrients/personal", () => {
    return HttpResponse.json(personalNutrients);
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
      disease: data.disease_codes.map((code) => ({
        code,
        name: diseaseMap.get(code).disease_name,
      })),
    };

    return HttpResponse.json(result);
  }),

  // 커뮤니티
  http.get("/api/community/board", () => {
    return HttpResponse.json(boardData);
  }),
  http.get("/api/community/representation/:boardType", ({ params }) => {
    const { boardType } = params;
    if (!["1", "2"].includes(boardType)) return notFoundError.clone();

    const result = boardData
      .filter(({ board_type }) => String(board_type) === boardType)
      .slice(0, 4);
    return HttpResponse.json(result);
  }),
  http.get("/api/community/search/:basis/:boardType/:prompt", ({ params }) => {
    const { basis, boardType, prompt } = params;
    if (!["title", "content", "author"].includes(basis))
      return badRequestError.clone();
    if (!["all", "1", "2"].includes(boardType)) return badRequestError.clone();

    const result = boardData.filter(searchBoard(basis, boardType, prompt));
    return HttpResponse.json(result);
  }),

  http.post("/api/community/write", async ({ request }) => {
    const newPost = await request.json();

    boardData.push({
      board_no: boardData.length + 1,
      board_title: newPost.board_title,
      board_content: newPost.board_content,
      board_author: "You",
      disease_code: newPost.disease_code,
      board_date: new Date().toISOString(),
      board_type: newPost.board_type,
    });

    return HttpResponse.json({ success: true, result: "게시글 생성 완료" });
  }),

  http.get("/api/community/:boardType", ({ params }) => {
    const { boardType } = params;
    if (!["1", "2"].includes(boardType)) return notFoundError.clone();

    const result = boardData.filter(
      ({ board_type }) => String(board_type) === boardType,
    );
    return HttpResponse.json(result);
  }),
  http.get("/api/community/:boardType/:boardNo", ({ params }) => {
    const { boardType, boardNo } = params;
    const result = boardData.find(({ board_type, board_no }) => {
      return String(board_type) === boardType && String(board_no) === boardNo;
    });
    if (result === undefined) return notFoundError.clone();
    return HttpResponse.json(result);
  }),

  http.get("/api/community/:boardType/:boardNo/comment", ({ params }) => {
    const { boardNo } = params;
    const result = commentData.filter(({ board_no }) => {
      return String(board_no) === boardNo;
    });
    return HttpResponse.json(result);
  }),
  http.post(
    "/api/community/:boardType/:boardNo/comment/write",
    async ({ params, request }) => {
      const { boardNo } = params;
      const newComment = await request.json();

      commentData.push({
        board_no: +boardNo,
        comment_author: "You",
        comment_body: newComment.comment_body,
        comment_date: new Date().toISOString(),
      });
      return HttpResponse.json({ success: true, result: "댓글 작성 완료" });
    },
  ),

  http.get("/auth", () => {
    console.log("dcalled!");
    return HttpResponse.json({ success: true, result: "oauth" });
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
