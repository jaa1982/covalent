import { OnInit, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { TdDynamicElement, TdDynamicType, TdDynamicFormsService } from './services/dynamic-forms.service';
import { AbstractControlValueAccessor } from './dynamic-elements/abstract-control-value-accesor';
export declare const ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicFormsErrorTemplate extends TemplatePortalDirective {
    tdDynamicFormsError: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdDynamicElementDirective {
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef);
}
export declare class TdDynamicElementComponent extends AbstractControlValueAccessor implements ControlValueAccessor, OnInit, OnChanges {
    private _componentFactoryResolver;
    private _dynamicFormsService;
    private _instance;
    value: any;
    /**
     * Sets form control of the element.
     */
    dynamicControl: FormControl;
    /**
     * Sets label to be displayed.
     */
    label: string;
    /**
     * Sets type or element of element to be rendered.
     * Throws error if does not exist or no supported.
     */
    type: TdDynamicElement | TdDynamicType;
    /**
     * Sets required validation checkup (if supported by element).
     */
    required: boolean;
    /**
     * Sets min validation checkup (if supported by element).
     */
    min: number;
    /**
     * Sets max validation checkup (if supported by element).
     */
    max: number;
    /**
     * Sets minLength validation checkup (if supported by element).
     */
    minLength: number;
    /**
     * Sets maxLength validation checkup (if supported by element).
     */
    maxLength: number;
    /**
     * Sets selections for array elements (if supported by element).
     */
    selections: any[];
    childElement: TdDynamicElementDirective;
    readonly maxAttr: any;
    readonly minAttr: any;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _dynamicFormsService: TdDynamicFormsService);
    ngOnInit(): void;
    /**
     * Reassign any inputs that have changed
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    registerOnModelChange(fn: any): void;
    onModelChange: (_: any) => any;
}
