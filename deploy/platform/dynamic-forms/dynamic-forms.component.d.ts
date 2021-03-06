import { ChangeDetectorRef, TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { TdDynamicFormsService, ITdDynamicElementConfig } from './services/dynamic-forms.service';
import { TdDynamicFormsErrorTemplate } from './dynamic-element.component';
export declare class TdDynamicFormsComponent implements AfterContentInit {
    private _formBuilder;
    private _dynamicFormsService;
    private _changeDetectorRef;
    private _renderedElements;
    private _elements;
    private _templateMap;
    _errorTemplates: QueryList<TdDynamicFormsErrorTemplate>;
    dynamicForm: FormGroup;
    /**
     * elements: ITdDynamicElementConfig[]
     * JS Object that will render the elements depending on its config.
     * [name] property is required.
     */
    elements: ITdDynamicElementConfig[];
    /**
     * Getter property for dynamic [FormGroup].
     */
    readonly form: FormGroup;
    /**
     * Getter property for [valid] of dynamic [FormGroup].
     */
    readonly valid: boolean;
    /**
     * Getter property for [value] of dynamic [FormGroup].
     */
    readonly value: any;
    /**
     * Getter property for [errors] of dynamic [FormGroup].
     */
    readonly errors: {
        [name: string]: any;
    };
    /**
     * Getter property for [controls] of dynamic [FormGroup].
     */
    readonly controls: {
        [key: string]: AbstractControl;
    };
    constructor(_formBuilder: FormBuilder, _dynamicFormsService: TdDynamicFormsService, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    /**
     * Refreshes the form and rerenders all validator/element modifications.
     */
    refresh(): void;
    /**
     * Getter method for error template references
     */
    getErrorTemplateRef(name: string): TemplateRef<any>;
    /**
     * Loads error templates and sets them in a map for faster access.
     */
    private _updateErrorTemplates();
    private _rerenderElements();
    private _clearRemovedElements();
}
