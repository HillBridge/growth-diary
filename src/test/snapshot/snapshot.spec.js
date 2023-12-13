import { it, expect, describe } from "vitest";
import Hi from "./Hi.vue";
import { mount } from "@vue/test-utils";

describe("snapshot", () => {
  it("对象的比对, 可以防止误改代码操作", () => {
    expect({ name: "bridge", age: 10 }).toMatchSnapshot();
  });

  it("inline -- 对于简单的数据结构可以使用", () => {
    expect({ name: "bridge", age: 10 }).toMatchInlineSnapshot(`
      {
        "age": 10,
        "name": "bridge",
      }
    `);
  });

  it("组件", () => {
    const wrapper = mount(Hi);
    const result = wrapper.html();
    expect(result).toMatchSnapshot();
  });

  it("file", () => {
    const wrapper = mount(Hi);
    const result = wrapper.html();
    expect(result).toMatchFileSnapshot("./__snapshots__/Hi.html");
  });
});
