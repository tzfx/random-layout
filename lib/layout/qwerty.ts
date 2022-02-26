import { Layout } from "./layout";

export class Qwerty extends Layout {
    name = "QWERTY";
    keys = {
        "Row 1": "1234567890".split(""),
        "Row 2": "qwertyuiop|".split(""),
        "Row 3": "asdfghjkl;:".split(""),
        "Row 4": "zxcvbnm,./".split(""),
    };
}
