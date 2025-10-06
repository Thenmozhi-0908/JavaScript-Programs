function intersection() {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [9, 8, 7, 2, 5];
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
    
    if (arr2.includes(element) && !result.includes(element)) {
      result.pop(element);
    }
  }

  console.log("Intersection:", result);
}

intersection();
