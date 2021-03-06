import { WebComponentDefinition } from "@microsoft/fast-tooling/dist/esm/data-utilities/web-component";
import { DataType } from "@microsoft/fast-tooling";

export const fastSliderLabelDefinition: WebComponentDefinition = {
    version: 1,
    tags: [
        {
            name: "fast-slider-label",
            title: "Slider label",
            description: "The FAST slider-label element",
            attributes: [
                {
                    name: "name",
                    description: "The name attribute",
                    type: DataType.string,
                    default: "",
                    required: false,
                },
                {
                    name: "hide-mark",
                    description: "The hide-mark attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    description: "The disabled attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "position",
                    description: "The position value attribute",
                    type: DataType.string,
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the slider label",
                },
            ],
        },
    ],
};
