import { WebComponentDefinition } from "@microsoft/fast-tooling/dist/esm/data-utilities/web-component";
import { DataType } from "@microsoft/fast-tooling";

export const fastProgressRingDefinition: WebComponentDefinition = {
    version: 1,
    tags: [
        {
            name: "fast-progress-ring",
            title: "Progress ring",
            description: "The FAST progress-ring element",
            attributes: [
                {
                    name: "value",
                    description: "The value attribute",
                    default: "",
                    required: false,
                    type: DataType.number,
                },
                {
                    name: "min",
                    description: "The min attribute",
                    default: 0,
                    required: false,
                    type: DataType.number,
                },
                {
                    name: "max",
                    description: "The max attribute",
                    default: 100,
                    required: false,
                    type: DataType.number,
                },
                {
                    name: "paused",
                    description: "The paused attribute",
                    default: false,
                    required: false,
                    type: DataType.boolean,
                },
            ],
            slots: [
                {
                    name: "determinate",
                    title: "Determinate slot",
                    description:
                        "Slot to provide custom visual representations of the determinate progress ring",
                },
                {
                    name: "indeterminate",
                    title: "Indeterminate slot",
                    description:
                        "Slot to provide custom visual representations of the indeterminate progress ring",
                },
            ],
        },
    ],
};
