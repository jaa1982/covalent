import { Component, forwardRef, Injectable, SkipSelf, Optional, Directive, Input, HostBinding, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validators, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentFileModule } from '@covalent/core/file';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const noop = () => {
    // empty method
};
/**
 * @abstract
 */
class AbstractControlValueAccessor {
    constructor() {
        /**
         * Implemented as part of ControlValueAccessor.
         */
        this._value = undefined;
        this.onChange = (_) => noop;
        this.onTouched = () => noop;
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const INPUT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicInputComponent),
    multi: true,
};
class TdDynamicInputComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.type = undefined;
        this.required = undefined;
        this.min = undefined;
        this.max = undefined;
        this.minLength = undefined;
        this.maxLength = undefined;
    }
}
TdDynamicInputComponent.decorators = [
    { type: Component, args: [{
                providers: [INPUT_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-input',
                styles: [`.td-dynamic-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-input-wrapper .td-dynamic-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}`],
                template: `<div class="td-dynamic-input-wrapper">
  <mat-form-field class="td-dynamic-input-field">
    <input #elementInput
            matInput
            [(ngModel)]="value"
            [formControl]="control"
            [placeholder]="label"
            [type]="type"
            [required]="required"
            [attr.min]="min"
            [attr.max]="max"
            [attr.minLength]="minLength"
            [attr.maxLength]="maxLength"/>
  </mat-form-field>
</div>
`,
            },] },
];
/** @nocollapse */
TdDynamicInputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicFileInputComponent),
    multi: true,
};
class TdDynamicFileInputComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.required = undefined;
        this.label = '';
    }
}
TdDynamicFileInputComponent.decorators = [
    { type: Component, args: [{
                providers: [UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-file-input',
                styles: [`.td-dynamic-file-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-file-input-wrapper .td-dynamic-file-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-file-input{margin-left:10px}`],
                template: `<div class="td-dynamic-file-input-wrapper">
  <mat-form-field tdFileDrop
                  class="td-dynamic-file-input-field"
                  floatLabel="never"
                  (fileDrop)="value = $event"
                  (click)="fileInput.inputElement.click()"
                  (keyup.enter)="fileInput.inputElement.click()"
                  (keyup.delete)="fileInput.clear()"
                  (keyup.backspace)="fileInput.clear()">
    <input matInput
          [value]="value?.name"
          [placeholder]="label"
          readonly/>
  </mat-form-field>
  <button mat-icon-button *ngIf="value" (click)="fileInput.clear()" (keyup.enter)="fileInput.clear()">
    <mat-icon>cancel</mat-icon>
  </button>
  <td-file-input class="td-file-input" #fileInput [(ngModel)]="value">
    <mat-icon>folder</mat-icon>
    <span>{{ label }}</span>
  </td-file-input>
</div>`,
            },] },
];
/** @nocollapse */
TdDynamicFileInputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicTextareaComponent),
    multi: true,
};
class TdDynamicTextareaComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.required = undefined;
    }
}
TdDynamicTextareaComponent.decorators = [
    { type: Component, args: [{
                providers: [TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-textarea',
                styles: [`.td-dynamic-textarea-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-textarea-wrapper .td-dynamic-textarea-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}`],
                template: `<div class="td-dynamic-textarea-wrapper">
  <mat-form-field class="td-dynamic-textarea-field">
    <textarea #elementInput
            matInput
            [(ngModel)]="value"
            [placeholder]="label"
            [required]="required"
            rows="4">
    </textarea>
  </mat-form-field>
</div>`,
            },] },
];
/** @nocollapse */
TdDynamicTextareaComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSlideToggleComponent),
    multi: true,
};
class TdDynamicSlideToggleComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.required = false;
    }
}
TdDynamicSlideToggleComponent.decorators = [
    { type: Component, args: [{
                providers: [SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-slide-toggle',
                styles: [``],
                template: `<div class="td-dynamic-slide-toggle-wrapper">
  <mat-slide-toggle [(ngModel)]="value"
                   [required]="required">
    {{label}}
  </mat-slide-toggle>
</div>`,
            },] },
];
/** @nocollapse */
TdDynamicSlideToggleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicCheckboxComponent),
    multi: true,
};
class TdDynamicCheckboxComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.required = false;
    }
}
TdDynamicCheckboxComponent.decorators = [
    { type: Component, args: [{
                providers: [CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-checkbox',
                styles: [``],
                template: `<div class="td-dynamic-checkbox-wrapper">
  <mat-checkbox [(ngModel)]="value"
                [required]="required">
    {{label}}
  </mat-checkbox>
</div>`,
            },] },
];
/** @nocollapse */
TdDynamicCheckboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SLIDER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSliderComponent),
    multi: true,
};
class TdDynamicSliderComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.required = undefined;
        this.min = undefined;
        this.max = undefined;
    }
}
TdDynamicSliderComponent.decorators = [
    { type: Component, args: [{
                providers: [SLIDER_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-slider',
                styles: [`.td-dynamic-slider-field{position:relative;margin-top:8px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-slider-field .td-dynamic-slider{-webkit-box-flex:1;-ms-flex:1;flex:1}`],
                template: `<div class="td-dynamic-slider-wrapper">
  <div class="mat-form-field-placeholder-wrapper mat-form-field-can-float mat-form-field-should-float"
       [class.mat-focused]="slider._isActive">
    <label class="mat-form-field-placeholder mat-float mat-form-field-float td-slider-label"> {{label}} <span *ngIf="required" class="mat-placeholder-required">*</span></label>
  </div>
  <div class="td-dynamic-slider-field">
    <mat-slider #slider
               class="td-dynamic-slider"
               [(ngModel)]="value"
                [min]="min"
                [max]="max"
                thumbLabel
                tickInterval="auto"
                [required]="required">
    </mat-slider>
  </div>
</div>`,
            },] },
];
/** @nocollapse */
TdDynamicSliderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSelectComponent),
    multi: true,
};
class TdDynamicSelectComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.required = undefined;
        this.selections = undefined;
    }
}
TdDynamicSelectComponent.decorators = [
    { type: Component, args: [{
                providers: [SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-select',
                styles: [`.td-dynamic-select-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-select-wrapper .td-dynamic-select-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}`],
                template: `<div class="td-dynamic-select-wrapper">
  <mat-form-field class="td-dynamic-select-field">
    <mat-select [(ngModel)]="value"
              [placeholder]="label"
              [required]="required">
      <mat-option *ngFor="let selection of selections" [value]="selection.value || selection">{{selection.label || selection}}</mat-option>
    </mat-select>
  </mat-form-field>
</div>
`,
            },] },
];
/** @nocollapse */
TdDynamicSelectComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicDatepickerComponent),
    multi: true,
};
class TdDynamicDatepickerComponent extends AbstractControlValueAccessor {
    constructor() {
        super(...arguments);
        this.label = '';
        this.type = undefined;
        this.required = undefined;
        this.min = undefined;
        this.max = undefined;
    }
}
TdDynamicDatepickerComponent.decorators = [
    { type: Component, args: [{
                providers: [DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-datepicker',
                styles: [`.td-dynamic-datepicker-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-datepicker-wrapper .td-dynamic-datepicker-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}`],
                template: `<div class="td-dynamic-datepicker-wrapper">
  <mat-form-field class="td-dynamic-datepicker-field">
    <input #elementInput
            matInput
            [matDatepicker]="dynamicDatePicker"
            [(ngModel)]="value"
            [formControl]="control"
            [placeholder]="label"
            [required]="required"
            [min]="min"
            [max]="max"/>
    <mat-datepicker-toggle matSuffix [for]="dynamicDatePicker"></mat-datepicker-toggle>
    <mat-datepicker #dynamicDatePicker></mat-datepicker>
  </mat-form-field>
</div>
`,
            },] },
];
/** @nocollapse */
TdDynamicDatepickerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const TdDynamicType = {
    Text: 'text',
    Boolean: 'boolean',
    Number: 'number',
    Array: 'array',
    Date: 'date',
};
/** @enum {string} */
const TdDynamicElement = {
    Input: 'input',
    Datepicker: 'datepicker',
    Password: 'password',
    Textarea: 'textarea',
    Slider: 'slider',
    SlideToggle: 'slide-toggle',
    Checkbox: 'checkbox',
    Select: 'select',
    FileInput: 'file-input',
};
/**
 * @record
 */

/**
 * @record
 */

const DYNAMIC_ELEMENT_NAME_REGEX = /^[a-zA-Z]+[a-zA-Z0-9-_]*$/;
class TdDynamicFormsService {
    /**
     * Method to validate if the [name] is a proper element name.
     * Throws error if name is not valid.
     * @param {?} name
     * @return {?}
     */
    validateDynamicElementName(name) {
        if (!DYNAMIC_ELEMENT_NAME_REGEX.test(name)) {
            throw new Error(`Dynamic element name: "${name}" is not valid.`);
        }
    }
    /**
     * Gets component to be rendered depending on [TdDynamicElement | TdDynamicType]
     * Throws error if it does not exists or not supported.
     * @param {?} element
     * @return {?}
     */
    getDynamicElement(element) {
        switch (element) {
            case TdDynamicType.Text:
            case TdDynamicType.Number:
            case TdDynamicElement.Input:
            case TdDynamicElement.Password:
                return TdDynamicInputComponent;
            case TdDynamicElement.Textarea:
                return TdDynamicTextareaComponent;
            case TdDynamicType.Boolean:
            case TdDynamicElement.SlideToggle:
                return TdDynamicSlideToggleComponent;
            case TdDynamicElement.Checkbox:
                return TdDynamicCheckboxComponent;
            case TdDynamicElement.Slider:
                return TdDynamicSliderComponent;
            case TdDynamicType.Array:
            case TdDynamicElement.Select:
                return TdDynamicSelectComponent;
            case TdDynamicElement.FileInput:
                return TdDynamicFileInputComponent;
            case TdDynamicElement.Datepicker:
            case TdDynamicType.Date:
                return TdDynamicDatepickerComponent;
            default:
                throw new Error(`Error: type ${element} does not exist or not supported.`);
        }
    }
    /**
     * Creates form control for element depending [ITdDynamicElementConfig] properties.
     * @param {?} config
     * @return {?}
     */
    createFormControl(config) {
        let /** @type {?} */ validator = this.createValidators(config);
        return new FormControl(config.default, validator);
    }
    /**
     * Creates form validationdepending [ITdDynamicElementConfig] properties.
     * @param {?} config
     * @return {?}
     */
    createValidators(config) {
        let /** @type {?} */ validator;
        if (config.required) {
            validator = Validators.required;
        }
        if (config.max || config.max === 0) {
            validator = Validators.compose([validator, Validators.max(parseFloat(config.max))]);
        }
        if (config.min || config.min === 0) {
            validator = Validators.compose([validator, Validators.min(parseFloat(config.min))]);
        }
        if (config.maxLength || config.maxLength === 0) {
            validator = Validators.compose([validator, Validators.maxLength(parseFloat(config.maxLength))]);
        }
        if (config.minLength || config.minLength === 0) {
            validator = Validators.compose([validator, Validators.minLength(parseFloat(config.minLength))]);
        }
        // Add provided custom validators to the validator function
        if (config.validators) {
            config.validators.forEach((validatorConfig) => {
                validator = Validators.compose([validator, validatorConfig.validator]);
            });
        }
        return validator;
    }
}
TdDynamicFormsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TdDynamicFormsService.ctorParameters = () => [];
/**
 * @param {?} parent
 * @return {?}
 */
function DYNAMIC_FORMS_PROVIDER_FACTORY(parent) {
    return parent || new TdDynamicFormsService();
}
const DYNAMIC_FORMS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDynamicFormsService,
    deps: [[new Optional(), new SkipSelf(), TdDynamicFormsService]],
    useFactory: DYNAMIC_FORMS_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const noop$1 = () => {
    // empty method
};
const ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicElementComponent),
    multi: true,
};
class TdDynamicFormsErrorTemplate extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdDynamicFormsErrorTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tdDynamicFormsError]ng-template' },] },
];
/** @nocollapse */
TdDynamicFormsErrorTemplate.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
TdDynamicFormsErrorTemplate.propDecorators = {
    "tdDynamicFormsError": [{ type: Input },],
};
class TdDynamicElementDirective {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
TdDynamicElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdDynamicContainer]',
            },] },
];
/** @nocollapse */
TdDynamicElementDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
class TdDynamicElementComponent extends AbstractControlValueAccessor {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _dynamicFormsService
     */
    constructor(_componentFactoryResolver, _dynamicFormsService) {
        super();
        this._componentFactoryResolver = _componentFactoryResolver;
        this._dynamicFormsService = _dynamicFormsService;
        /**
         * Sets label to be displayed.
         */
        this.label = '';
        /**
         * Sets type or element of element to be rendered.
         * Throws error if does not exist or no supported.
         */
        this.type = undefined;
        /**
         * Sets required validation checkup (if supported by element).
         */
        this.required = undefined;
        /**
         * Sets min validation checkup (if supported by element).
         */
        this.min = undefined;
        /**
         * Sets max validation checkup (if supported by element).
         */
        this.max = undefined;
        /**
         * Sets minLength validation checkup (if supported by element).
         */
        this.minLength = undefined;
        /**
         * Sets maxLength validation checkup (if supported by element).
         */
        this.maxLength = undefined;
        /**
         * Sets selections for array elements (if supported by element).
         */
        this.selections = undefined;
        this.onModelChange = (_) => noop$1;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.onModelChange(v);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get maxAttr() {
        return this.max;
    }
    /**
     * @return {?}
     */
    get minAttr() {
        return this.min;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ ref = this._componentFactoryResolver.
            resolveComponentFactory(this._dynamicFormsService.getDynamicElement(this.type))
            .create(this.childElement.viewContainer.injector);
        this.childElement.viewContainer.insert(ref.hostView);
        this._instance = ref.instance;
        this._instance.control = this.dynamicControl;
        this._instance.label = this.label;
        this._instance.type = this.type;
        this._instance.value = this.value;
        this._instance.required = this.required;
        this._instance.min = this.min;
        this._instance.max = this.max;
        this._instance.minLength = this.minLength;
        this._instance.maxLength = this.maxLength;
        this._instance.selections = this.selections;
        this._instance.registerOnChange((value) => {
            this.value = value;
        });
        this.registerOnModelChange((value) => {
            // fix to check if value is NaN (type=number)
            if (!Number.isNaN(value)) {
                this._instance.value = value;
            }
        });
    }
    /**
     * Reassign any inputs that have changed
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._instance) {
            for (let /** @type {?} */ prop in changes) {
                this._instance[prop] = changes[prop].currentValue;
            }
        }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnModelChange(fn) {
        this.onModelChange = fn;
    }
}
TdDynamicElementComponent.decorators = [
    { type: Component, args: [{
                providers: [TdDynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-element',
                template: '<div tdDynamicContainer></div>',
            },] },
];
/** @nocollapse */
TdDynamicElementComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: TdDynamicFormsService, },
];
TdDynamicElementComponent.propDecorators = {
    "dynamicControl": [{ type: Input },],
    "label": [{ type: Input },],
    "type": [{ type: Input },],
    "required": [{ type: Input },],
    "min": [{ type: Input },],
    "max": [{ type: Input },],
    "minLength": [{ type: Input },],
    "maxLength": [{ type: Input },],
    "selections": [{ type: Input },],
    "childElement": [{ type: ViewChild, args: [TdDynamicElementDirective,] },],
    "maxAttr": [{ type: HostBinding, args: ['attr.max',] },],
    "minAttr": [{ type: HostBinding, args: ['attr.min',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdDynamicFormsComponent {
    /**
     * @param {?} _formBuilder
     * @param {?} _dynamicFormsService
     * @param {?} _changeDetectorRef
     */
    constructor(_formBuilder, _dynamicFormsService, _changeDetectorRef) {
        this._formBuilder = _formBuilder;
        this._dynamicFormsService = _dynamicFormsService;
        this._changeDetectorRef = _changeDetectorRef;
        this._renderedElements = [];
        this._templateMap = new Map();
        this.dynamicForm = this._formBuilder.group({});
    }
    /**
     * elements: ITdDynamicElementConfig[]
     * JS Object that will render the elements depending on its config.
     * [name] property is required.
     * @param {?} elements
     * @return {?}
     */
    set elements(elements) {
        if (elements) {
            this._elements = elements;
        }
        else {
            this._elements = [];
        }
        this._rerenderElements();
    }
    /**
     * @return {?}
     */
    get elements() {
        return this._renderedElements;
    }
    /**
     * Getter property for dynamic [FormGroup].
     * @return {?}
     */
    get form() {
        return this.dynamicForm;
    }
    /**
     * Getter property for [valid] of dynamic [FormGroup].
     * @return {?}
     */
    get valid() {
        if (this.dynamicForm) {
            return this.dynamicForm.valid;
        }
        return false;
    }
    /**
     * Getter property for [value] of dynamic [FormGroup].
     * @return {?}
     */
    get value() {
        if (this.dynamicForm) {
            return this.dynamicForm.value;
        }
        return {};
    }
    /**
     * Getter property for [errors] of dynamic [FormGroup].
     * @return {?}
     */
    get errors() {
        if (this.dynamicForm) {
            let /** @type {?} */ errors = {};
            for (let /** @type {?} */ name in this.dynamicForm.controls) {
                errors[name] = this.dynamicForm.controls[name].errors;
            }
            return errors;
        }
        return {};
    }
    /**
     * Getter property for [controls] of dynamic [FormGroup].
     * @return {?}
     */
    get controls() {
        if (this.dynamicForm) {
            return this.dynamicForm.controls;
        }
        return {};
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._updateErrorTemplates();
    }
    /**
     * Refreshes the form and rerenders all validator/element modifications.
     * @return {?}
     */
    refresh() {
        this._rerenderElements();
        this._updateErrorTemplates();
    }
    /**
     * Getter method for error template references
     * @param {?} name
     * @return {?}
     */
    getErrorTemplateRef(name) {
        return this._templateMap.get(name);
    }
    /**
     * Loads error templates and sets them in a map for faster access.
     * @return {?}
     */
    _updateErrorTemplates() {
        this._templateMap = new Map();
        for (let /** @type {?} */ i = 0; i < this._errorTemplates.toArray().length; i++) {
            this._templateMap.set(this._errorTemplates.toArray()[i].tdDynamicFormsError, this._errorTemplates.toArray()[i].templateRef);
        }
    }
    /**
     * @return {?}
     */
    _rerenderElements() {
        this._clearRemovedElements();
        this._renderedElements = [];
        let /** @type {?} */ duplicates = [];
        this._elements.forEach((elem) => {
            this._dynamicFormsService.validateDynamicElementName(elem.name);
            if (duplicates.indexOf(elem.name) > -1) {
                throw new Error(`Dynamic element name: "${elem.name}" is duplicated`);
            }
            duplicates.push(elem.name);
            if (!this.dynamicForm.get(elem.name)) {
                this.dynamicForm.addControl(elem.name, this._dynamicFormsService.createFormControl(elem));
            }
            else {
                this.dynamicForm.get(elem.name).setValidators(this._dynamicFormsService.createValidators(elem));
            }
            // copy objects so they are only changes when calling this method
            this._renderedElements.push(Object.assign({}, elem));
        });
        // call a change detection since the whole form might change
        this._changeDetectorRef.detectChanges();
        timer().toPromise().then(() => {
            // call a markForCheck so elements are rendered correctly in OnPush
            this._changeDetectorRef.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    _clearRemovedElements() {
        for (let /** @type {?} */ i = 0; i < this._renderedElements.length; i++) {
            for (let /** @type {?} */ j = 0; j < this._elements.length; j++) {
                // check if the name of the element is still there removed
                if (this._renderedElements[i].name === this._elements[j].name) {
                    delete this._renderedElements[i];
                    break;
                }
            }
        }
        // remove elements that were removed from the array
        this._renderedElements.forEach((elem) => {
            this.dynamicForm.removeControl(elem.name);
        });
    }
}
TdDynamicFormsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-forms',
                template: `<form [formGroup]="dynamicForm" novalidate>
  <div class="td-dynamic-form-wrapper">
    <ng-template let-element ngFor [ngForOf]="elements">
      <div class="td-dynamic-element-wrapper"
          [style.max-width.%]="element.flex ? element.flex : 100"
          [style.flex]="'1 1 ' + (element.flex ? element.flex : 100) + '%'"
          [style.-ms-flex]="'1 1 ' + (element.flex ? element.flex : 100) + '%'"
          [style.-webkit-box-flex]="1">
        <td-dynamic-element
          #dynamicElement
          *ngIf="dynamicForm.controls[element.name]"
          [formControlName]="element.name"
          [dynamicControl]="dynamicForm.controls[element.name]"
          [id]="element.name"
          [label]="element.label || element.name"
          [type]="element.type"
          [required]="element.required"
          [min]="element.min"
          [max]="element.max"
          [minLength]="element.minLength"
          [maxLength]="element.maxLength"
          [selections]="element.selections">
        </td-dynamic-element>
        <div class="tc-red-600"
             [style.font-size.%]="'70'"
             [style.position]="'absolute'"
             [style.bottom.px]="'10'"
              *ngIf="getErrorTemplateRef(element.name) && dynamicForm.controls[element.name]?.errors">
          <ng-template
            [ngTemplateOutlet]="getErrorTemplateRef(element.name)"
            [ngTemplateOutletContext]="{control: dynamicForm.controls[element.name], errors: dynamicForm.controls[element.name]?.errors}">
          </ng-template>
        </div>
      </div>
    </ng-template>
  </div>
  <ng-content></ng-content>
</form>
`,
                styles: [`.td-dynamic-form-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}.td-dynamic-form-wrapper .td-dynamic-element-wrapper{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding:4px 4px 8px}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdDynamicFormsComponent.ctorParameters = () => [
    { type: FormBuilder, },
    { type: TdDynamicFormsService, },
    { type: ChangeDetectorRef, },
];
TdDynamicFormsComponent.propDecorators = {
    "_errorTemplates": [{ type: ContentChildren, args: [TdDynamicFormsErrorTemplate,] },],
    "elements": [{ type: Input, args: ['elements',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_DYNAMIC_FORMS = [
    TdDynamicFormsComponent,
    TdDynamicElementComponent,
    TdDynamicElementDirective,
    TdDynamicFormsErrorTemplate,
];
const TD_DYNAMIC_FORMS_ENTRY_COMPONENTS = [
    TdDynamicInputComponent,
    TdDynamicFileInputComponent,
    TdDynamicTextareaComponent,
    TdDynamicSlideToggleComponent,
    TdDynamicCheckboxComponent,
    TdDynamicSliderComponent,
    TdDynamicSelectComponent,
    TdDynamicDatepickerComponent,
];
class CovalentDynamicFormsModule {
}
CovalentDynamicFormsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TD_DYNAMIC_FORMS,
                    TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatSelectModule,
                    MatCheckboxModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatIconModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    CovalentCommonModule,
                    CovalentFileModule,
                ],
                exports: [
                    TD_DYNAMIC_FORMS,
                    TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
                ],
                providers: [
                    DYNAMIC_FORMS_PROVIDER,
                ],
                entryComponents: [TD_DYNAMIC_FORMS_ENTRY_COMPONENTS],
            },] },
];
/** @nocollapse */
CovalentDynamicFormsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentDynamicFormsModule, TdDynamicFormsComponent, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicFormsErrorTemplate, TdDynamicElementDirective, TdDynamicElementComponent, TdDynamicType, TdDynamicElement, DYNAMIC_ELEMENT_NAME_REGEX, TdDynamicFormsService, DYNAMIC_FORMS_PROVIDER_FACTORY, DYNAMIC_FORMS_PROVIDER, TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicTextareaComponent, SLIDER_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSliderComponent, SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSlideToggleComponent, SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSelectComponent, INPUT_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicInputComponent, UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicFileInputComponent, DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicDatepickerComponent, CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicCheckboxComponent, AbstractControlValueAccessor as ɵa };
//# sourceMappingURL=covalent-dynamic-forms.js.map
