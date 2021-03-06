import { Component, ElementRef, Input, Output, EventEmitter, Renderer2, SecurityContext, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable-next-line */
let showdown = require('showdown/dist/showdown.js');
class TdMarkdownComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     */
    constructor(_renderer, _elementRef, _domSanitizer) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        /**
         * contentReady?: function
         * Event emitted after the markdown content rendering is finished.
         */
        this.onContentReady = new EventEmitter();
    }
    /**
     * content?: string
     *
     * Markdown format content to be parsed as html markup.
     * Used to load data dynamically.
     *
     * e.g. README.md content.
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        this._content = content;
        this._loadContent(this._content);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._content) {
            this._loadContent((/** @type {?} */ (this._elementRef.nativeElement)).textContent);
        }
    }
    /**
     * General method to parse a string markdown into HTML Elements and load them into the container
     * @param {?} markdown
     * @return {?}
     */
    _loadContent(markdown) {
        if (markdown && markdown.trim().length > 0) {
            // Clean container
            this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
            // Parse html string into actual HTML elements.
            let /** @type {?} */ divElement = this._elementFromString(this._render(markdown));
        }
        this.onContentReady.emit();
    }
    /**
     * @param {?} markupStr
     * @return {?}
     */
    _elementFromString(markupStr) {
        // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
        // to parse the string into DOM element for now.
        const /** @type {?} */ div = this._renderer.createElement('div');
        this._renderer.appendChild(this._elementRef.nativeElement, div);
        div.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, markupStr);
        return div;
    }
    /**
     * @param {?} markdown
     * @return {?}
     */
    _render(markdown) {
        // Trim leading and trailing newlines
        markdown = markdown.replace(/^(\s|\t)*\n+/g, '')
            .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
        // Split markdown by line characters
        let /** @type {?} */ lines = markdown.split('\n');
        // check how much indentation is used by the first actual markdown line
        let /** @type {?} */ firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
        // Remove all indentation spaces so markdown can be parsed correctly
        let /** @type {?} */ startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line.replace(startingWhitespaceRegex, '');
        });
        // Join lines again with line characters
        let /** @type {?} */ markdownToParse = lines.join('\n');
        // Convert markdown into html
        let /** @type {?} */ converter = new showdown.Converter();
        converter.setOption('ghCodeBlocks', true);
        converter.setOption('tasklists', true);
        converter.setOption('tables', true);
        let /** @type {?} */ html = converter.makeHtml(markdownToParse);
        return html;
    }
}
TdMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-markdown',
                styles: [`:host ::ng-deep a{background-color:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}:host ::ng-deep a:active,:host ::ng-deep a:hover{outline-width:0;text-decoration:underline}:host ::ng-deep strong{font-weight:bolder}:host ::ng-deep h1{margin:.67em 0}:host ::ng-deep img{border-style:none}:host ::ng-deep svg:not(:root){overflow:hidden}:host ::ng-deep code,:host ::ng-deep kbd,:host ::ng-deep pre{font-family:monospace,monospace;font-size:1em}:host ::ng-deep hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:hidden;background:0 0;border-bottom-width:1px;border-bottom-style:solid;margin:16px 0}:host ::ng-deep input{margin:0;overflow:visible;font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}:host ::ng-deep [type=button]:-moz-focusring,:host ::ng-deep [type=reset]:-moz-focusring,:host ::ng-deep [type=submit]:-moz-focusring,:host ::ng-deep button:-moz-focusring{outline:ButtonText dotted 1px}:host ::ng-deep [type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host ::ng-deep table{border-spacing:0;border-collapse:collapse;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep td,:host ::ng-deep th{padding:0}:host ::ng-deep *{-webkit-box-sizing:border-box;box-sizing:border-box}:host ::ng-deep hr::before{display:table;content:""}:host ::ng-deep hr::after{display:table;clear:both;content:""}:host ::ng-deep p{margin-top:0;margin-bottom:10px}:host ::ng-deep blockquote{margin:0;padding:0 15px;border-left-width:4px;border-left-style:solid}:host ::ng-deep ol,:host ::ng-deep ul{margin-top:0;margin-bottom:0;padding-left:2em}:host ::ng-deep ol ol,:host ::ng-deep ul ol{list-style-type:lower-roman}:host ::ng-deep ol ol ol,:host ::ng-deep ol ul ol,:host ::ng-deep ul ol ol,:host ::ng-deep ul ul ol{list-style-type:lower-alpha}:host ::ng-deep dd{margin-left:0}:host ::ng-deep code{font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace}:host ::ng-deep pre{margin-top:0;margin-bottom:0;font:12px Consolas,"Liberation Mono",Menlo,Courier,monospace;word-wrap:normal}:host ::ng-deep .pl-0{padding-left:0!important}:host ::ng-deep .pl-1{padding-left:3px!important}:host ::ng-deep .pl-2{padding-left:6px!important}:host ::ng-deep .pl-3{padding-left:12px!important}:host ::ng-deep .pl-4{padding-left:24px!important}:host ::ng-deep .pl-5{padding-left:36px!important}:host ::ng-deep .pl-6{padding-left:48px!important}:host ::ng-deep .form-select::-ms-expand{opacity:0}:host ::ng-deep a:not([href]){color:inherit;text-decoration:none}:host ::ng-deep h1,:host ::ng-deep h2,:host ::ng-deep h3,:host ::ng-deep h4,:host ::ng-deep h5,:host ::ng-deep h6{margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}:host ::ng-deep h1 .octicon-link,:host ::ng-deep h2 .octicon-link,:host ::ng-deep h3 .octicon-link,:host ::ng-deep h4 .octicon-link,:host ::ng-deep h5 .octicon-link,:host ::ng-deep h6 .octicon-link{color:#000;vertical-align:middle;visibility:hidden}:host ::ng-deep h1:hover .anchor,:host ::ng-deep h2:hover .anchor,:host ::ng-deep h3:hover .anchor,:host ::ng-deep h4:hover .anchor,:host ::ng-deep h5:hover .anchor,:host ::ng-deep h6:hover .anchor{text-decoration:none}:host ::ng-deep h1:hover .anchor .octicon-link,:host ::ng-deep h2:hover .anchor .octicon-link,:host ::ng-deep h3:hover .anchor .octicon-link,:host ::ng-deep h4:hover .anchor .octicon-link,:host ::ng-deep h5:hover .anchor .octicon-link,:host ::ng-deep h6:hover .anchor .octicon-link{visibility:visible}:host ::ng-deep h1{padding-bottom:.3em;font-size:2.25em;line-height:1.2;border-bottom-width:1px;border-bottom-style:solid}:host ::ng-deep h1 .anchor{line-height:1}:host ::ng-deep h2{padding-bottom:.3em;font-size:1.75em;line-height:1.225;border-bottom-width:1px;border-bottom-style:solid}:host ::ng-deep h2 .anchor{line-height:1}:host ::ng-deep h3{font-size:1.5em;line-height:1.43}:host ::ng-deep h3 .anchor{line-height:1.2}:host ::ng-deep h4{font-size:1.25em}:host ::ng-deep h4 .anchor{line-height:1.2}:host ::ng-deep h5{font-size:1em}:host ::ng-deep h5 .anchor{line-height:1.1}:host ::ng-deep h6{font-size:1em}:host ::ng-deep h6 .anchor{line-height:1.1}:host ::ng-deep blockquote,:host ::ng-deep dl,:host ::ng-deep ol,:host ::ng-deep p,:host ::ng-deep pre,:host ::ng-deep table,:host ::ng-deep ul{margin-top:0;margin-bottom:16px}:host ::ng-deep ol ol,:host ::ng-deep ol ul,:host ::ng-deep ul ol,:host ::ng-deep ul ul{margin-top:0;margin-bottom:0}:host ::ng-deep li>p{margin-top:16px}:host ::ng-deep dl{padding:0}:host ::ng-deep dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}:host ::ng-deep dl dd{padding:0 16px;margin-bottom:16px}:host ::ng-deep blockquote>:first-child{margin-top:0}:host ::ng-deep blockquote>:last-child{margin-bottom:0}:host ::ng-deep table th{font-weight:700}:host ::ng-deep table td,:host ::ng-deep table th{padding:6px 13px;border-width:1px;border-style:solid}:host ::ng-deep table tr{border-top-width:1px;border-top-style:solid}:host ::ng-deep img{max-width:100%;-webkit-box-sizing:content-box;box-sizing:content-box}:host ::ng-deep code{padding:.2em 0;margin:0;font-size:85%;border-radius:3px}:host ::ng-deep code:after,:host ::ng-deep code:before{letter-spacing:-.2em}:host ::ng-deep pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:0 0;border:0}:host ::ng-deep .highlight{margin-bottom:16px}:host ::ng-deep .highlight pre,:host ::ng-deep pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;border-radius:3px}:host ::ng-deep .highlight pre{margin-bottom:0;word-break:normal}:host ::ng-deep pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}:host ::ng-deep pre code:after,:host ::ng-deep pre code:before{content:normal}:host ::ng-deep .pl-c{color:#969896}:host ::ng-deep .pl-c1,:host ::ng-deep .pl-s .pl-v{color:#0086b3}:host ::ng-deep .pl-e,:host ::ng-deep .pl-en{color:#795da3}:host ::ng-deep .pl-s .pl-s1,:host ::ng-deep .pl-smi{color:#333}:host ::ng-deep .pl-ent{color:#63a35c}:host ::ng-deep .pl-k{color:#a71d5d}:host ::ng-deep .pl-pds,:host ::ng-deep .pl-s,:host ::ng-deep .pl-s .pl-pse .pl-s1,:host ::ng-deep .pl-sr,:host ::ng-deep .pl-sr .pl-cce,:host ::ng-deep .pl-sr .pl-sra,:host ::ng-deep .pl-sr .pl-sre{color:#183691}:host ::ng-deep .pl-v{color:#ed6a43}:host ::ng-deep .pl-id{color:#b52a1d}:host ::ng-deep .pl-ii{background-color:#b52a1d;color:#f8f8f8}:host ::ng-deep .pl-sr .pl-cce{color:#63a35c;font-weight:700}:host ::ng-deep .pl-ml{color:#693a17}:host ::ng-deep .pl-mh,:host ::ng-deep .pl-mh .pl-en,:host ::ng-deep .pl-ms{color:#1d3e81;font-weight:700}:host ::ng-deep .pl-mq{color:teal}:host ::ng-deep .pl-mi{color:#333;font-style:italic}:host ::ng-deep .pl-mb{color:#333;font-weight:700}:host ::ng-deep .pl-md{background-color:#ffecec;color:#bd2c00}:host ::ng-deep .pl-mi1{background-color:#eaffea;color:#55a532}:host ::ng-deep .pl-mdr{color:#795da3;font-weight:700}:host ::ng-deep .pl-mo{color:#1d3e81}:host ::ng-deep kbd{display:inline-block;padding:3px 5px;font:11px/10px Consolas,"Liberation Mono",Menlo,Courier,monospace;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 #bbb;box-shadow:inset 0 -1px 0 #bbb}:host ::ng-deep .full-commit .btn-outline:not(:disabled):hover{color:#4078c0;border:1px solid #4078c0}:host ::ng-deep :checked+.radio-label{position:relative;z-index:1;border-color:#4078c0}:host ::ng-deep .octicon{display:inline-block;vertical-align:text-top;fill:currentColor}:host ::ng-deep .task-list-item{list-style-type:none}:host ::ng-deep .task-list-item+.task-list-item{margin-top:3px}:host ::ng-deep .task-list-item input{margin:0 .2em .25em -1.6em;vertical-align:middle}`],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdMarkdownComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: DomSanitizer, },
];
TdMarkdownComponent.propDecorators = {
    "content": [{ type: Input, args: ['content',] },],
    "onContentReady": [{ type: Output, args: ['contentReady',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CovalentMarkdownModule {
}
CovalentMarkdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TdMarkdownComponent,
                ],
                exports: [
                    TdMarkdownComponent,
                ],
            },] },
];
/** @nocollapse */
CovalentMarkdownModule.ctorParameters = () => [];

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

export { CovalentMarkdownModule, TdMarkdownComponent };
//# sourceMappingURL=covalent-markdown.js.map
