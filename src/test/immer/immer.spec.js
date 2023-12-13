import { it, expect, describe } from "vitest";
import { produce, enableMapSet } from "immer";

describe("immer", () => {
  it("Map", () => {
    enableMapSet();
    const usersById_v1 = new Map([
      ["michel", { name: "Michel Weststrate", country: "NL" }],
    ]);

    const usersById_v2 = produce(usersById_v1, (draft) => {
      draft.get("michel").country = "UK";
    });

    expect(usersById_v1.get("michel").country).toBe("NL");
    expect(usersById_v2.get("michel").country).toBe("UK");
  });

  it("Array", () => {
    const usersById_v1 = [{ name: "Michel Weststrate", country: "NL" }];

    const usersById_v2 = produce(usersById_v1, (draft) => {
      draft[0].country = "UK";
    });

    expect(usersById_v1[0].country).toBe("NL");
    expect(usersById_v2[0].country).toBe("UK");
  });

  it.only("case3", () => {
    const baseState = [
      {
        title: "Learn TypeScript",
        done: true,
      },
      {
        title: "Try Immer",
        done: false,
      },
    ];

    const nextState = produce(baseState, (draftState) => {
      draftState.push({ title: "Tweet about it" });
      draftState[1].done = true;
    });

    expect(baseState.length).toBe(2);
    expect(nextState[1].done).toBe(true);
    expect(nextState[2].title).toBe("Tweet about it");
  });
});
