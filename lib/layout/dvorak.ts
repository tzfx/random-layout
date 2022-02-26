import { Layout } from "./layout";

export class Dvorak extends Layout {
    name = "Dvorak";
    keys = {
        "Row 1": "1234567890[]".split(""),
        "Row 2": "',.pyfgcrl/=".split(""),
        "Row 3": "aoeuidhtns-".split(""),
        "Row 4": ";qjkxbmwvz".split(""),
    };
}
