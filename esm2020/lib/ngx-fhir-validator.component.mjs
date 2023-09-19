import { Component } from '@angular/core';
import jsPDF from "jspdf";
import * as i0 from "@angular/core";
export class NgxFhirValidatorComponent {
    ngOnInit() {
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZoaXItdmFsaWRhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maGlyLXZhbGlkYXRvci9zcmMvbGliL25neC1maGlyLXZhbGlkYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7O0FBWTFCLE1BQU0sT0FBTyx5QkFBeUI7SUFHcEMsUUFBUTtRQUNOLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckIsQ0FBQzs7c0hBUlUseUJBQXlCOzBHQUF6Qix5QkFBeUIsOERBUjFCOzs7O0dBSVQ7MkZBSVUseUJBQXlCO2tCQVZyQyxTQUFTOytCQUNFLHdCQUF3QixZQUN4Qjs7OztHQUlUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQganNQREYgZnJvbSBcImpzcGRmXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtZmhpci12YWxpZGF0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmd4LWZoaXItdmFsaWRhdG9yIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RmhpclZhbGlkYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERigpO1xuXG4gICAgZG9jLnRleHQoXCJIZWxsbyB3b3JsZCFcIiwgMTAsIDEwKTtcbiAgICBkb2Muc2F2ZShcImE0LnBkZlwiKTtcbiAgfVxuXG59XG4iXX0=