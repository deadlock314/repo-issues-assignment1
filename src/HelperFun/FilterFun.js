function Check(str,searchTerm) {
   console.log(str," ",searchTerm)
    let i=0,z=0,p=0;
    while(i<str.length && z<searchTerm.length){
        if(str[i].toUpperCase()==searchTerm[z].toUpperCase() ){
            p++;
            z++;
        }
        i++;  
    }
    return (p>=searchTerm.length)?true:false;
}


const FilterFun=(resdata,searchTerm)=> {
let filteredData=[];
let i=0;

for (i=0;i<resdata.length;i++){
 
      if(Check(resdata[i].title,searchTerm))
     filteredData.push(resdata[i]);
}
  
    

 return filteredData;
}

export default FilterFun;