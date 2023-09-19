import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as JSZip from 'jszip';

class NgxFhirValidatorService {
    constructor() { }
}
NgxFhirValidatorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxFhirValidatorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxFhirValidatorComponent {
    ngOnInit() {
        const zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
    }
}
NgxFhirValidatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFhirValidatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxFhirValidatorComponent, selector: "lib-ngx-fhir-validator", ngImport: i0, template: `
    <p>
      ngx-fhir-validator works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-fhir-validator', template: `
    <p>
      ngx-fhir-validator works!
    </p>
  ` }]
        }] });

class NgxFhirValidatorModule {
}
NgxFhirValidatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFhirValidatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorModule, declarations: [NgxFhirValidatorComponent], exports: [NgxFhirValidatorComponent] });
NgxFhirValidatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxFhirValidatorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxFhirValidatorComponent
                    ],
                    imports: [],
                    exports: [
                        NgxFhirValidatorComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-fhir-validator
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFhirValidatorComponent, NgxFhirValidatorModule, NgxFhirValidatorService };
//# sourceMappingURL=ngx-fhir-validator.mjs.map
