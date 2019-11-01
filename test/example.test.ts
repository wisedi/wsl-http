import { expect } from "chai";
import { sayHi } from "../src/index";

describe("Greetings", () => {
    describe("#sayHi()", () => {
        it("function returns 'hello world'", () => {
            const greetings = sayHi();

            expect(greetings).equals("hello world");
        });
    });
});
