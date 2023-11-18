// 가상의 게시글. 30분내에 api 연결하기는 무리이므로 더미데이터만듭니다
const postList = [
  {
    number: 1,
    title: "시즌웰 최고",
    keyword: "시즌웰 키워드",
    writer: "그누",
    views: 999,
    date: "2023-11-17",
    contentType: "consult",
    content: "시즌웰 최고~",
    comments: [
      { id: 1, author: "User1", text: "정말 좋은 정보 감사합니다!" },
      { id: 2, author: "User2", text: "더 자세한 내용이 궁금해요." },
    ],
  },
  {
    number: 2,
    title: "시즌웰 짱~",
    keyword: "시즌웰 키워드",
    writer: "콜록콜록",
    views: 2,
    date: "2023-11-18",
    contentType: "review",
    content: "시즌웰 짱~",
    comments: [
      { id: 4, author: "User3", text: "맛있는 음식 추천 감사합니다!" },
    ],
  },
  {
    number: 3,
    title: "커피 그만 마시고 싶어요~",
    keyword: "시즌웰 키워드",
    writer: "커피중독",
    views: 443,
    date: "2023-11-18",
    contentType: "consult",
    content:
      "시즌웰 짱~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~커피 그만 마시고 싶어요~",
    comments: [
      { id: 4, author: "User3", text: "맛있는 음식 추천 감사합니다!" },
    ],
  },
];

export { postList };

export function updatePostList(data) {
  postList.push(data);
}
