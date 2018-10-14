module.exports = function(array){
  var arrayOfSubtopics = [...array];
  arrayOfSubtopics.sort((a,b) => {
    var orderVal = a.order - b.order;
    var timeVal = 0;
    if(orderVal === 0){
      timeVal = b.unixUpdated - a.unixUpdated; //negative means that a was created before b and thus should be put before
    }
    return orderVal === 0 ? timeVal : orderVal;
  });

  for(var i = 0; i <arrayOfSubtopics.length; i++){
    arrayOfSubtopics[i].order = (i+1);
  }
  return arrayOfSubtopics;
};
