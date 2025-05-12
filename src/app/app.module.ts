import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent,
        UserInputComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    bootstrap: [AppComponent]
    })
export class AppModule {}