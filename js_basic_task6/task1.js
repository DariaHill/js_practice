function printNumbers(start, finish) {
    if (start > finish) {
        return;
    }
    
  
    console.log(start);
    
    
    printNumbers(start + 1, finish);
}

printNumbers(1, 10); 