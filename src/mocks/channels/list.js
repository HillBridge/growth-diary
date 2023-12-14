import { http, HttpResponse } from "msw";
export default [
  http.get("/channel/method/list", () => {
    let data = [];
    for (let i = 0; i < 30; i++) {
      const temp = {
        id: "1111",
        name: "pix",
        description: "pix",
        default: "no",
      };
      data.push(temp);
    }
    const total = data.length;
    const resBody = {
      code: 200,
      msg: "success",
      info_list: data,
      total,
    };
    return HttpResponse.json(resBody);
  }),
  http.post("/channel/method/delete", () => {
    const resBody = {
      code: 200,
      msg: "success",
    };
    return HttpResponse.json(resBody);
  }),
  http.post("/channel/method/add", () => {
    const resBody = {
      code: 200,
      msg: "success",
    };
    return HttpResponse.json(resBody);
  }),
];
