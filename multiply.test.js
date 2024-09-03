test("multiplying 3*5 should return 15", () =>{
    expect(calculations.product(3,5)).toBeCloseTo(15);
})

test("multiplying 3*0 should return 0", () =>{
    expect(calculations.product(3,0)).toBeCloseTo(0);
})

test("multiplying 3*-2 should return -6", () =>{
    expect(calculations.product(3,-2)).toBeCloseTo(-6);
})


