import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
/**
 * Function TdBounceAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based bounce animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export declare function TdBounceAnimation(bounceOptions?: IAnimationOptions): AnimationTriggerMetadata;
