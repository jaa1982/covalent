import { Provider } from '@angular/core';
import { ValidatorFn, FormControl } from '@angular/forms';
export declare enum TdDynamicType {
    Text = "text",
    Boolean = "boolean",
    Number = "number",
    Array = "array",
    Date = "date",
}
export declare enum TdDynamicElement {
    Input = "input",
    Datepicker = "datepicker",
    Password = "password",
    Textarea = "textarea",
    Slider = "slider",
    SlideToggle = "slide-toggle",
    Checkbox = "checkbox",
    Select = "select",
    FileInput = "file-input",
}
export interface ITdDynamicElementValidator {
    validator: ValidatorFn;
}
export interface ITdDynamicElementConfig {
    label?: string;
    name: string;
    type: TdDynamicType | TdDynamicElement;
    required?: boolean;
    min?: any;
    max?: any;
    minLength?: any;
    maxLength?: any;
    selections?: string[] | {
        value: any;
        label: string;
    }[];
    default?: any;
    flex?: number;
    validators?: ITdDynamicElementValidator[];
}
export declare const DYNAMIC_ELEMENT_NAME_REGEX: RegExp;
export declare class TdDynamicFormsService {
    /**
     * Method to validate if the [name] is a proper element name.
     * Throws error if name is not valid.
     */
    validateDynamicElementName(name: string): void;
    /**
     * Gets component to be rendered depending on [TdDynamicElement | TdDynamicType]
     * Throws error if it does not exists or not supported.
     */
    getDynamicElement(element: TdDynamicElement | TdDynamicType): any;
    /**
     * Creates form control for element depending [ITdDynamicElementConfig] properties.
     */
    createFormControl(config: ITdDynamicElementConfig): FormControl;
    /**
     * Creates form validationdepending [ITdDynamicElementConfig] properties.
     */
    createValidators(config: ITdDynamicElementConfig): ValidatorFn;
}
export declare function DYNAMIC_FORMS_PROVIDER_FACTORY(parent: TdDynamicFormsService): TdDynamicFormsService;
export declare const DYNAMIC_FORMS_PROVIDER: Provider;
