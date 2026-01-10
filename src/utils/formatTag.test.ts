import { formatTag } from "./formatTag"

test("format tags into human readable strings", () => 
{
    expect(formatTag("hi-there")).toBe("Hi There")
    expect(formatTag("golly-and-gosh")).toBe("Golly & Gosh")
})