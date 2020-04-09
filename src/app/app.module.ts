import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { SliderModule } from 'angular-image-slider';
import { SliderComponentComponent } from './slider-component/slider-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    MenuDetailsComponent,
    ServiceDetailsComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatMenuModule,
    SliderModule,
    MatGridListModule
  ],
  // exports: [
  //   A11yModule,
  //   ClipboardModule,
  //   CdkStepperModule,
  //   CdkTableModule,
  //   CdkTreeModule,
  //   DragDropModule,
  //   MatAutocompleteModule,
  //   MatBadgeModule,
  //   MatBottomSheetModule,
  //   MatButtonModule,
  //   MatButtonToggleModule,
  //   MatCardModule,
  //   MatCheckboxModule,
  //   MatChipsModule,
  //   MatStepperModule,
  //   MatDatepickerModule,
  //   MatDialogModule,
  //   MatDividerModule,
  //   MatExpansionModule,
  //   MatGridListModule,
  //   MatIconModule,
  //   MatInputModule,
  //   MatListModule,
  //   MatMenuModule,
  //   MatNativeDateModule,
  //   MatPaginatorModule,
  //   MatProgressBarModule,
  //   MatProgressSpinnerModule,
  //   MatRadioModule,
  //   MatRippleModule,
  //   MatSelectModule,
  //   MatSidenavModule,
  //   MatSliderModule,
  //   MatSlideToggleModule,
  //   MatSnackBarModule,
  //   MatSortModule,
  //   MatTableModule,
  //   MatTabsModule,
  //   MatToolbarModule,
  //   MatTooltipModule,
  //   MatTreeModule,
  //   PortalModule,
  //   ScrollingModule,
  // ],
  providers: [
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
