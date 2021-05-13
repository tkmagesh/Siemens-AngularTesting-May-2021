import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { GreeterComponent } from "./greeter.component"

fdescribe("Greeter Component", () => {
    let fixture : ComponentFixture<GreeterComponent>;
    let greeterComponent : GreeterComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations : [GreeterComponent]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GreeterComponent);
            greeterComponent = fixture.componentInstance;
        })
    }));

    it("component instance creation", () => {
        expect(greeterComponent).toBeDefined();
    });

    //component state testing
    it('component state testing', () => {
        expect(greeterComponent.username).toBe('')
        expect(greeterComponent.greetMsg).toBe('')
    });

    it('should have greetMsg when greeted', () => {
        greeterComponent.username = 'Magesh';
        greeterComponent.onBtnGreetClick();
        expect(greeterComponent.greetMsg).toBe('Hi Magesh, Have a nice day!')
    });

    //component ui testing
    it('should display the greet message when greeted', () => {
        greeterComponent.username = 'Magesh';
        greeterComponent.onBtnGreetClick();
        const el = fixture.debugElement;
        const compiled = fixture.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('div.message').textContent).toBe(greeterComponent.greetMsg);
    })

})