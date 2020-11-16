import { substraction } from './substraction';
describe('substraction unit tests',() => {
  //AAA
  
  it(' should 0 - 2 = -2',()=>{
    let result = 0;
    result = substraction(0,2);
    expect(result).toBe(-2);
  })
  
  it(' should 9 - 3 = 6',()=>{
    let result = 0;
    result = substraction(9, 3);
    expect(result).toBe(6);
  })
  it('should 3.1416 - 0.1416 = 3.0',()=>{
    let result = 0;
    result = substraction(3.1416,.1416);
    expect(result).toBe(3.0);
  })
  it('should 2.7 - 0.7 = 2.0',()=>{
    let result = 0;
    result = substraction(2.7, 0.7);
    expect(result).toBe(2.0);
  })
});
