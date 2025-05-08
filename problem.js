let array = [["Id",'Name','District'],["101","Fazle Hasan",'Naogaon',],['102',"Suraiya Jahan",'Bogura'],['103',"Safa",'Naogaon'],['104',"Saba",'Naogaon']]


// Example Md : Fazle Hasan Rabbi



function fun(array){

    let address = []
   
    for(let i = 0 ; i<array.length; i++){

        for(let j = 0; j < array[i].length; j++ ){
            
            // address +=  " "+ array[i][j]
            for(let k = 0; k < array[i][j].length; k++ ){
            
                address +=  " "+ array[i][j][k]
                
                
                // console.log(array[i])
            }
            
            // console.log(array[i])
        }
        // console.log((array[i]))

    }

    console.log(address)
}
fun(array)