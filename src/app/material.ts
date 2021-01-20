import { from } from "rxjs";
import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule
        
        
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule
    ]
}) 
export class MyMaterialModule{

}