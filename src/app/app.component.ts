import { Component } from '@angular/core';
import { LinksService } from './links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private ingrdient: LinksService) {}
  title = 'lessonservs';
  TextValues = [];
  ingrValue = [];
  unit;
  food;
  ingrSum;
  ingrSums = setTimeout(() => {
    this.ingrSum = {};
  }, 1000);
disabled = false
  ingr(val) {
    this.TextValues = val.split('\n');
    console.log(this.TextValues);
    this.table();
   this.disabled = true
  }
  table() {
    this.TextValues.map((x) => {
      x = x.replace(/\s\s+/g, ' ').split(/[.,\/ ' ']/);
      return this.ingrdient.getData(x).subscribe((data) => {
        setTimeout(() => {
          console.log(data);

          this.ingrValue.push({
            val: data,
            qyt: !parseInt(x) ? 0 : parseInt(x),
            unit: x.length >= 3 ? x[1] : 'whole',
            food: x.length < 3 ? x[1] : x[2],
          });
          console.log(this.ingrValue);
        }, 0);
        this.sum();
      });
    });
  }
  sum() {
    setTimeout(() => {
      this.ingrSum = {
        calorie:Math.ceil( this.ingrValue
          .map((item) => item.val.calories)
          .reduce((prev, next) => prev + next)
        ),
        totalFat: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.FAT.quantity)
            .reduce((prev, next) => prev + next)
        ),

        Cholesterol: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.CHOLE.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Sodium: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.NA.quantity)
            .reduce((prev, next) => prev + next)
        ),

        Carbohydrate: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.CHOCDF.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Protein: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.PROCNT.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Vitamin: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.VITD.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Calcium: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.CA.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Iron: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.FE.quantity)
            .reduce((prev, next) => prev + next)
        ),
        Potassium: Math.round(
          this.ingrValue
            .map((item) => item.val.totalNutrients.K.quantity)
            .reduce((prev, next) => prev + next)
        ),
        totalFatPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.FAT.quantity)
            .reduce((prev, next) => prev + next)
        ),
        saturatedPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.FASAT.quantity)
            .reduce((prev, next) => prev + next)
        ),
        CholesterolPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.CHOLE.quantity)
            .reduce((prev, next) => prev + next)
        ),
        SodiumPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.NA.quantity)
            .reduce((prev, next) => prev + next)
        ),
        CarbohydratePar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.CHOCDF.quantity)
            .reduce((prev, next) => prev + next)
        ),
        ProteinPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.PROCNT.quantity)
            .reduce((prev, next) => prev + next)
        ),
        VitaminPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.VITD.quantity)
            .reduce((prev, next) => prev + next)
        ),
        CalciumPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.CA.quantity)
            .reduce((prev, next) => prev + next)
        ),
        IronPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.FE.quantity)
            .reduce((prev, next) => prev + next)
        ),
        PotassiumPar: Math.round(
          this.ingrValue
            .map((item) => item.val.totalDaily.K.quantity)
            .reduce((prev, next) => prev + next)
        ),
      };
      console.log(this.ingrSum);
    }, 500);
  }
  reset(){
    this.ingrValue=[];
    this.ingrSum={};
    this.disabled= false
  }
}
