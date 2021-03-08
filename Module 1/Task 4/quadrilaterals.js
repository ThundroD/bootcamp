let side1= 91;
let side2= 89;
let side3= 91;
let side4= 89;
let corner1= 91;
let corner2= 89;
let corner3= 91;
let corner4= 89; // variables are hardset to different dimensions. In this example the outcome is a parallelogram.
if (((side1==side2) && (side1==side3) && (side1==side4)) && ((corner1==90) && (corner2==90) && (corner3==90) && (corner4==90))){
        console.log("It is a square"); 
} //It is a square if side 1 is equal to side 2 and side 1 is equal to side 3 and side1 is equal to side 4 and all corners are equal to 90.
else if (((side1==side3) && (side1!==side2) && (side2==side4)) && ((corner1==90) && (corner2==90) && (corner3==90) && (corner4==90))){
        console.log("It is a rectangle."); 
} //It is a rectangle if side 1 and side 3 are equal and side 1 and side 2 are not equal and side 2 and side 4 are equal and all corners are equal to 90.
else if (((side1==side2) && (side1==side3) && (side1==side4)) && ((corner1=corner3) && (corner2=corner4)) && ((corner1>90) && (corner2<90) || (corner1<90) && (corner2>90))){
        console.log("It is a rhombus."); 
}/* It is a rhombus if side 1 and side 2 are equal and side side 1 and side 3 are equal and side 1 and side 4 are equal and corner 1 and corner 3 are equal and corner 2 and corner 4 are equal 
and if corner 1 is more than 90 and corner 2 is less than 90 or corner 1 is less than 90 and corner 2 is more than 90.*/
else if (((side1==side3) && (side1!==side2) && (side2==side4)) && ((corner1=corner3) && (corner2=corner4)) && ((corner1>90) && (corner2<90) || (corner1<90) && (corner2>90))){
        console.log("It is a parallelogram.")
    }/* It is a parallelgram if side 1 is equal to side 3 and side 1 is not equal to side2 and side 2 is equal to side 4 and corner 1 is equal to corner 3 and corner 2 is equal to corner 4
    and if corner 1 is greater than 90 and corner 2 is less than 90 or corner 1 is less than 90 and corner 2 is more than 90. For the variables given above this would be the output the console.log would give.*/
else {
        console.log("It is not a square, rectangle, rhombus, or parallelogram.")
    } // If none of the above matches consol.log would state that the shape is not a square, rectangle, rhombus, or parallelogram.