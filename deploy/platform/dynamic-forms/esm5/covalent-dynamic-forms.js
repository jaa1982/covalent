import { __extends, __spread } from 'tslib';
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

var noop = function () {
};
var AbstractControlValueAccessor = /** @class */ (function () {
    function AbstractControlValueAccessor() {
        this._value = undefined;
        this.onChange = function (_) { return noop; };
        this.onTouched = function () { return noop; };
    }
    Object.defineProperty(AbstractControlValueAccessor.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
    };
    AbstractControlValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AbstractControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AbstractControlValueAccessor;
}());
var INPUT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicInputComponent; }),
    multi: true,
};
var TdDynamicInputComponent = /** @class */ (function (_super) {
    __extends(TdDynamicInputComponent, _super);
    function TdDynamicInputComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.type = undefined;
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        _this.minLength = undefined;
        _this.maxLength = undefined;
        return _this;
    }
    return TdDynamicInputComponent;
}(AbstractControlValueAccessor));
TdDynamicInputComponent.decorators = [
    { type: Component, args: [{
                providers: [INPUT_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-input',
                styles: [".td-dynamic-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-input-wrapper .td-dynamic-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"],
                template: "<div class=\"td-dynamic-input-wrapper\">\n  <mat-form-field class=\"td-dynamic-input-field\">\n    <input #elementInput\n            matInput\n            [(ngModel)]=\"value\"\n            [formControl]=\"control\"\n            [placeholder]=\"label\"\n            [type]=\"type\"\n            [required]=\"required\"\n            [attr.min]=\"min\"\n            [attr.max]=\"max\"\n            [attr.minLength]=\"minLength\"\n            [attr.maxLength]=\"maxLength\"/>\n  </mat-form-field>\n</div>\n",
            },] },
];
TdDynamicInputComponent.ctorParameters = function () { return []; };
var UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicFileInputComponent; }),
    multi: true,
};
var TdDynamicFileInputComponent = /** @class */ (function (_super) {
    __extends(TdDynamicFileInputComponent, _super);
    function TdDynamicFileInputComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.required = undefined;
        _this.label = '';
        return _this;
    }
    return TdDynamicFileInputComponent;
}(AbstractControlValueAccessor));
TdDynamicFileInputComponent.decorators = [
    { type: Component, args: [{
                providers: [UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-file-input',
                styles: [".td-dynamic-file-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-file-input-wrapper .td-dynamic-file-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-file-input{margin-left:10px}"],
                template: "<div class=\"td-dynamic-file-input-wrapper\">\n  <mat-form-field tdFileDrop\n                  class=\"td-dynamic-file-input-field\"\n                  floatLabel=\"never\"\n                  (fileDrop)=\"value = $event\"\n                  (click)=\"fileInput.inputElement.click()\"\n                  (keyup.enter)=\"fileInput.inputElement.click()\"\n                  (keyup.delete)=\"fileInput.clear()\"\n                  (keyup.backspace)=\"fileInput.clear()\">\n    <input matInput\n          [value]=\"value?.name\"\n          [placeholder]=\"label\"\n          readonly/>\n  </mat-form-field>\n  <button mat-icon-button *ngIf=\"value\" (click)=\"fileInput.clear()\" (keyup.enter)=\"fileInput.clear()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n  <td-file-input class=\"td-file-input\" #fileInput [(ngModel)]=\"value\">\n    <mat-icon>folder</mat-icon>\n    <span>{{ label }}</span>\n  </td-file-input>\n</div>",
            },] },
];
TdDynamicFileInputComponent.ctorParameters = function () { return []; };
var TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicTextareaComponent; }),
    multi: true,
};
var TdDynamicTextareaComponent = /** @class */ (function (_super) {
    __extends(TdDynamicTextareaComponent, _super);
    function TdDynamicTextareaComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.required = undefined;
        return _this;
    }
    return TdDynamicTextareaComponent;
}(AbstractControlValueAccessor));
TdDynamicTextareaComponent.decorators = [
    { type: Component, args: [{
                providers: [TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-textarea',
                styles: [".td-dynamic-textarea-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-textarea-wrapper .td-dynamic-textarea-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"],
                template: "<div class=\"td-dynamic-textarea-wrapper\">\n  <mat-form-field class=\"td-dynamic-textarea-field\">\n    <textarea #elementInput\n            matInput\n            [(ngModel)]=\"value\"\n            [placeholder]=\"label\"\n            [required]=\"required\"\n            rows=\"4\">\n    </textarea>\n  </mat-form-field>\n</div>",
            },] },
];
TdDynamicTextareaComponent.ctorParameters = function () { return []; };
var SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicSlideToggleComponent; }),
    multi: true,
};
var TdDynamicSlideToggleComponent = /** @class */ (function (_super) {
    __extends(TdDynamicSlideToggleComponent, _super);
    function TdDynamicSlideToggleComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.required = false;
        return _this;
    }
    return TdDynamicSlideToggleComponent;
}(AbstractControlValueAccessor));
TdDynamicSlideToggleComponent.decorators = [
    { type: Component, args: [{
                providers: [SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-slide-toggle',
                styles: [""],
                template: "<div class=\"td-dynamic-slide-toggle-wrapper\">\n  <mat-slide-toggle [(ngModel)]=\"value\"\n                   [required]=\"required\">\n    {{label}}\n  </mat-slide-toggle>\n</div>",
            },] },
];
TdDynamicSlideToggleComponent.ctorParameters = function () { return []; };
var CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicCheckboxComponent; }),
    multi: true,
};
var TdDynamicCheckboxComponent = /** @class */ (function (_super) {
    __extends(TdDynamicCheckboxComponent, _super);
    function TdDynamicCheckboxComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.required = false;
        return _this;
    }
    return TdDynamicCheckboxComponent;
}(AbstractControlValueAccessor));
TdDynamicCheckboxComponent.decorators = [
    { type: Component, args: [{
                providers: [CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-checkbox',
                styles: [""],
                template: "<div class=\"td-dynamic-checkbox-wrapper\">\n  <mat-checkbox [(ngModel)]=\"value\"\n                [required]=\"required\">\n    {{label}}\n  </mat-checkbox>\n</div>",
            },] },
];
TdDynamicCheckboxComponent.ctorParameters = function () { return []; };
var SLIDER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicSliderComponent; }),
    multi: true,
};
var TdDynamicSliderComponent = /** @class */ (function (_super) {
    __extends(TdDynamicSliderComponent, _super);
    function TdDynamicSliderComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        return _this;
    }
    return TdDynamicSliderComponent;
}(AbstractControlValueAccessor));
TdDynamicSliderComponent.decorators = [
    { type: Component, args: [{
                providers: [SLIDER_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-slider',
                styles: [".td-dynamic-slider-field{position:relative;margin-top:8px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-slider-field .td-dynamic-slider{-webkit-box-flex:1;-ms-flex:1;flex:1}"],
                template: "<div class=\"td-dynamic-slider-wrapper\">\n  <div class=\"mat-form-field-placeholder-wrapper mat-form-field-can-float mat-form-field-should-float\"\n       [class.mat-focused]=\"slider._isActive\">\n    <label class=\"mat-form-field-placeholder mat-float mat-form-field-float td-slider-label\"> {{label}} <span *ngIf=\"required\" class=\"mat-placeholder-required\">*</span></label>\n  </div>\n  <div class=\"td-dynamic-slider-field\">\n    <mat-slider #slider\n               class=\"td-dynamic-slider\"\n               [(ngModel)]=\"value\"\n                [min]=\"min\"\n                [max]=\"max\"\n                thumbLabel\n                tickInterval=\"auto\"\n                [required]=\"required\">\n    </mat-slider>\n  </div>\n</div>",
            },] },
];
TdDynamicSliderComponent.ctorParameters = function () { return []; };
var SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicSelectComponent; }),
    multi: true,
};
var TdDynamicSelectComponent = /** @class */ (function (_super) {
    __extends(TdDynamicSelectComponent, _super);
    function TdDynamicSelectComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.required = undefined;
        _this.selections = undefined;
        return _this;
    }
    return TdDynamicSelectComponent;
}(AbstractControlValueAccessor));
TdDynamicSelectComponent.decorators = [
    { type: Component, args: [{
                providers: [SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-select',
                styles: [".td-dynamic-select-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-select-wrapper .td-dynamic-select-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"],
                template: "<div class=\"td-dynamic-select-wrapper\">\n  <mat-form-field class=\"td-dynamic-select-field\">\n    <mat-select [(ngModel)]=\"value\"\n              [placeholder]=\"label\"\n              [required]=\"required\">\n      <mat-option *ngFor=\"let selection of selections\" [value]=\"selection.value || selection\">{{selection.label || selection}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n",
            },] },
];
TdDynamicSelectComponent.ctorParameters = function () { return []; };
var DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicDatepickerComponent; }),
    multi: true,
};
var TdDynamicDatepickerComponent = /** @class */ (function (_super) {
    __extends(TdDynamicDatepickerComponent, _super);
    function TdDynamicDatepickerComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
        _this.label = '';
        _this.type = undefined;
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        return _this;
    }
    return TdDynamicDatepickerComponent;
}(AbstractControlValueAccessor));
TdDynamicDatepickerComponent.decorators = [
    { type: Component, args: [{
                providers: [DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-datepicker',
                styles: [".td-dynamic-datepicker-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dynamic-datepicker-wrapper .td-dynamic-datepicker-field{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"],
                template: "<div class=\"td-dynamic-datepicker-wrapper\">\n  <mat-form-field class=\"td-dynamic-datepicker-field\">\n    <input #elementInput\n            matInput\n            [matDatepicker]=\"dynamicDatePicker\"\n            [(ngModel)]=\"value\"\n            [formControl]=\"control\"\n            [placeholder]=\"label\"\n            [required]=\"required\"\n            [min]=\"min\"\n            [max]=\"max\"/>\n    <mat-datepicker-toggle matSuffix [for]=\"dynamicDatePicker\"></mat-datepicker-toggle>\n    <mat-datepicker #dynamicDatePicker></mat-datepicker>\n  </mat-form-field>\n</div>\n",
            },] },
];
TdDynamicDatepickerComponent.ctorParameters = function () { return []; };
var TdDynamicType = {
    Text: 'text',
    Boolean: 'boolean',
    Number: 'number',
    Array: 'array',
    Date: 'date',
};
var TdDynamicElement = {
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
var DYNAMIC_ELEMENT_NAME_REGEX = /^[a-zA-Z]+[a-zA-Z0-9-_]*$/;
var TdDynamicFormsService = /** @class */ (function () {
    function TdDynamicFormsService() {
    }
    TdDynamicFormsService.prototype.validateDynamicElementName = function (name) {
        if (!DYNAMIC_ELEMENT_NAME_REGEX.test(name)) {
            throw new Error("Dynamic element name: \"" + name + "\" is not valid.");
        }
    };
    TdDynamicFormsService.prototype.getDynamicElement = function (element) {
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
                throw new Error("Error: type " + element + " does not exist or not supported.");
        }
    };
    TdDynamicFormsService.prototype.createFormControl = function (config) {
        var validator = this.createValidators(config);
        return new FormControl(config.default, validator);
    };
    TdDynamicFormsService.prototype.createValidators = function (config) {
        var validator;
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
        if (config.validators) {
            config.validators.forEach(function (validatorConfig) {
                validator = Validators.compose([validator, validatorConfig.validator]);
            });
        }
        return validator;
    };
    return TdDynamicFormsService;
}());
TdDynamicFormsService.decorators = [
    { type: Injectable },
];
TdDynamicFormsService.ctorParameters = function () { return []; };
function DYNAMIC_FORMS_PROVIDER_FACTORY(parent) {
    return parent || new TdDynamicFormsService();
}
var DYNAMIC_FORMS_PROVIDER = {
    provide: TdDynamicFormsService,
    deps: [[new Optional(), new SkipSelf(), TdDynamicFormsService]],
    useFactory: DYNAMIC_FORMS_PROVIDER_FACTORY,
};
var noop$1 = function () {
};
var ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdDynamicElementComponent; }),
    multi: true,
};
var TdDynamicFormsErrorTemplate = /** @class */ (function (_super) {
    __extends(TdDynamicFormsErrorTemplate, _super);
    function TdDynamicFormsErrorTemplate(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdDynamicFormsErrorTemplate;
}(TemplatePortalDirective));
TdDynamicFormsErrorTemplate.decorators = [
    { type: Directive, args: [{ selector: '[tdDynamicFormsError]ng-template' },] },
];
TdDynamicFormsErrorTemplate.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
TdDynamicFormsErrorTemplate.propDecorators = {
    "tdDynamicFormsError": [{ type: Input },],
};
var TdDynamicElementDirective = /** @class */ (function () {
    function TdDynamicElementDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdDynamicElementDirective;
}());
TdDynamicElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdDynamicContainer]',
            },] },
];
TdDynamicElementDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
var TdDynamicElementComponent = /** @class */ (function (_super) {
    __extends(TdDynamicElementComponent, _super);
    function TdDynamicElementComponent(_componentFactoryResolver, _dynamicFormsService) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._dynamicFormsService = _dynamicFormsService;
        _this.label = '';
        _this.type = undefined;
        _this.required = undefined;
        _this.min = undefined;
        _this.max = undefined;
        _this.minLength = undefined;
        _this.maxLength = undefined;
        _this.selections = undefined;
        _this.onModelChange = function (_) { return noop$1; };
        return _this;
    }
    Object.defineProperty(TdDynamicElementComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this.onModelChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicElementComponent.prototype, "maxAttr", {
        get: function () {
            return this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicElementComponent.prototype, "minAttr", {
        get: function () {
            return this.min;
        },
        enumerable: true,
        configurable: true
    });
    TdDynamicElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ref = this._componentFactoryResolver.
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
        this._instance.registerOnChange(function (value) {
            _this.value = value;
        });
        this.registerOnModelChange(function (value) {
            if (!Number.isNaN(value)) {
                _this._instance.value = value;
            }
        });
    };
    TdDynamicElementComponent.prototype.ngOnChanges = function (changes) {
        if (this._instance) {
            for (var prop in changes) {
                this._instance[prop] = changes[prop].currentValue;
            }
        }
    };
    TdDynamicElementComponent.prototype.registerOnModelChange = function (fn) {
        this.onModelChange = fn;
    };
    return TdDynamicElementComponent;
}(AbstractControlValueAccessor));
TdDynamicElementComponent.decorators = [
    { type: Component, args: [{
                providers: [TdDynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR],
                selector: 'td-dynamic-element',
                template: '<div tdDynamicContainer></div>',
            },] },
];
TdDynamicElementComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: TdDynamicFormsService, },
]; };
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
var TdDynamicFormsComponent = /** @class */ (function () {
    function TdDynamicFormsComponent(_formBuilder, _dynamicFormsService, _changeDetectorRef) {
        this._formBuilder = _formBuilder;
        this._dynamicFormsService = _dynamicFormsService;
        this._changeDetectorRef = _changeDetectorRef;
        this._renderedElements = [];
        this._templateMap = new Map();
        this.dynamicForm = this._formBuilder.group({});
    }
    Object.defineProperty(TdDynamicFormsComponent.prototype, "elements", {
        get: function () {
            return this._renderedElements;
        },
        set: function (elements) {
            if (elements) {
                this._elements = elements;
            }
            else {
                this._elements = [];
            }
            this._rerenderElements();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "form", {
        get: function () {
            return this.dynamicForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "valid", {
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.valid;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "value", {
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.value;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "errors", {
        get: function () {
            if (this.dynamicForm) {
                var errors = {};
                for (var name in this.dynamicForm.controls) {
                    errors[name] = this.dynamicForm.controls[name].errors;
                }
                return errors;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDynamicFormsComponent.prototype, "controls", {
        get: function () {
            if (this.dynamicForm) {
                return this.dynamicForm.controls;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    TdDynamicFormsComponent.prototype.ngAfterContentInit = function () {
        this._updateErrorTemplates();
    };
    TdDynamicFormsComponent.prototype.refresh = function () {
        this._rerenderElements();
        this._updateErrorTemplates();
    };
    TdDynamicFormsComponent.prototype.getErrorTemplateRef = function (name) {
        return this._templateMap.get(name);
    };
    TdDynamicFormsComponent.prototype._updateErrorTemplates = function () {
        this._templateMap = new Map();
        for (var i = 0; i < this._errorTemplates.toArray().length; i++) {
            this._templateMap.set(this._errorTemplates.toArray()[i].tdDynamicFormsError, this._errorTemplates.toArray()[i].templateRef);
        }
    };
    TdDynamicFormsComponent.prototype._rerenderElements = function () {
        var _this = this;
        this._clearRemovedElements();
        this._renderedElements = [];
        var duplicates = [];
        this._elements.forEach(function (elem) {
            _this._dynamicFormsService.validateDynamicElementName(elem.name);
            if (duplicates.indexOf(elem.name) > -1) {
                throw new Error("Dynamic element name: \"" + elem.name + "\" is duplicated");
            }
            duplicates.push(elem.name);
            if (!_this.dynamicForm.get(elem.name)) {
                _this.dynamicForm.addControl(elem.name, _this._dynamicFormsService.createFormControl(elem));
            }
            else {
                _this.dynamicForm.get(elem.name).setValidators(_this._dynamicFormsService.createValidators(elem));
            }
            _this._renderedElements.push(Object.assign({}, elem));
        });
        this._changeDetectorRef.detectChanges();
        timer().toPromise().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    TdDynamicFormsComponent.prototype._clearRemovedElements = function () {
        var _this = this;
        for (var i = 0; i < this._renderedElements.length; i++) {
            for (var j = 0; j < this._elements.length; j++) {
                if (this._renderedElements[i].name === this._elements[j].name) {
                    delete this._renderedElements[i];
                    break;
                }
            }
        }
        this._renderedElements.forEach(function (elem) {
            _this.dynamicForm.removeControl(elem.name);
        });
    };
    return TdDynamicFormsComponent;
}());
TdDynamicFormsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-forms',
                template: "<form [formGroup]=\"dynamicForm\" novalidate>\n  <div class=\"td-dynamic-form-wrapper\">\n    <ng-template let-element ngFor [ngForOf]=\"elements\">\n      <div class=\"td-dynamic-element-wrapper\"\n          [style.max-width.%]=\"element.flex ? element.flex : 100\"\n          [style.flex]=\"'1 1 ' + (element.flex ? element.flex : 100) + '%'\"\n          [style.-ms-flex]=\"'1 1 ' + (element.flex ? element.flex : 100) + '%'\"\n          [style.-webkit-box-flex]=\"1\">\n        <td-dynamic-element\n          #dynamicElement\n          *ngIf=\"dynamicForm.controls[element.name]\"\n          [formControlName]=\"element.name\"\n          [dynamicControl]=\"dynamicForm.controls[element.name]\"\n          [id]=\"element.name\"\n          [label]=\"element.label || element.name\"\n          [type]=\"element.type\"\n          [required]=\"element.required\"\n          [min]=\"element.min\"\n          [max]=\"element.max\"\n          [minLength]=\"element.minLength\"\n          [maxLength]=\"element.maxLength\"\n          [selections]=\"element.selections\">\n        </td-dynamic-element>\n        <div class=\"tc-red-600\"\n             [style.font-size.%]=\"'70'\"\n             [style.position]=\"'absolute'\"\n             [style.bottom.px]=\"'10'\"\n              *ngIf=\"getErrorTemplateRef(element.name) && dynamicForm.controls[element.name]?.errors\">\n          <ng-template\n            [ngTemplateOutlet]=\"getErrorTemplateRef(element.name)\"\n            [ngTemplateOutletContext]=\"{control: dynamicForm.controls[element.name], errors: dynamicForm.controls[element.name]?.errors}\">\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <ng-content></ng-content>\n</form>\n",
                styles: [".td-dynamic-form-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}.td-dynamic-form-wrapper .td-dynamic-element-wrapper{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding:4px 4px 8px}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdDynamicFormsComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
    { type: TdDynamicFormsService, },
    { type: ChangeDetectorRef, },
]; };
TdDynamicFormsComponent.propDecorators = {
    "_errorTemplates": [{ type: ContentChildren, args: [TdDynamicFormsErrorTemplate,] },],
    "elements": [{ type: Input, args: ['elements',] },],
};
var TD_DYNAMIC_FORMS = [
    TdDynamicFormsComponent,
    TdDynamicElementComponent,
    TdDynamicElementDirective,
    TdDynamicFormsErrorTemplate,
];
var TD_DYNAMIC_FORMS_ENTRY_COMPONENTS = [
    TdDynamicInputComponent,
    TdDynamicFileInputComponent,
    TdDynamicTextareaComponent,
    TdDynamicSlideToggleComponent,
    TdDynamicCheckboxComponent,
    TdDynamicSliderComponent,
    TdDynamicSelectComponent,
    TdDynamicDatepickerComponent,
];
var CovalentDynamicFormsModule = /** @class */ (function () {
    function CovalentDynamicFormsModule() {
    }
    return CovalentDynamicFormsModule;
}());
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
CovalentDynamicFormsModule.ctorParameters = function () { return []; };

export { CovalentDynamicFormsModule, TdDynamicFormsComponent, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicFormsErrorTemplate, TdDynamicElementDirective, TdDynamicElementComponent, TdDynamicType, TdDynamicElement, DYNAMIC_ELEMENT_NAME_REGEX, TdDynamicFormsService, DYNAMIC_FORMS_PROVIDER_FACTORY, DYNAMIC_FORMS_PROVIDER, TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicTextareaComponent, SLIDER_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSliderComponent, SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSlideToggleComponent, SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicSelectComponent, INPUT_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicInputComponent, UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicFileInputComponent, DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicDatepickerComponent, CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR, TdDynamicCheckboxComponent, AbstractControlValueAccessor as ɵa };
//# sourceMappingURL=covalent-dynamic-forms.js.map
