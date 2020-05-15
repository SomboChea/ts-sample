// Run Basic Types
import { BasicType } from "./basicTypes"
import { LabeledValue } from "./basicTypes/LabeledValue"

function test(obj: LabeledValue) {
    console.log(obj)
}

test({ label: "Sambo", size: 10 })