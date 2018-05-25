import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';
export declare const UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TdDynamicFileInputComponent extends AbstractControlValueAccessor implements ControlValueAccessor {
    control: FormControl;
    required: boolean;
    label: string;
}
